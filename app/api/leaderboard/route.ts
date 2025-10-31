import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const data = await prisma.leaderboard.findMany({
      orderBy: { score: "desc" },
      take: 10,
    });
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "failed_to_fetch" }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawName = String(body?.nome ?? "Anônimo");
    const nome = rawName.trim();
    const score = Number(body?.score ?? 0);

    // Ignora entradas de teste e nomes vazios
    if (!nome || nome.toLowerCase() === "teste") {
      const data = await prisma.leaderboard.findMany({ orderBy: { score: "desc" }, take: 10 });
      return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const existing = await prisma.leaderboard.findFirst({ where: { name: nome } });

    if (existing) {
      if (score > (existing as any).score) {
        await prisma.leaderboard.update({ where: { id: (existing as any).id }, data: { score } });
      }
    } else {
      const count = await prisma.leaderboard.count();
      if (count < 10) {
        await prisma.leaderboard.create({ data: { name: nome, score } });
      } else {
        const lowest: any = await prisma.leaderboard.findFirst({ orderBy: { score: "asc" } });
        if (lowest && score > lowest.score) {
          await prisma.leaderboard.update({ where: { id: lowest.id }, data: { name: nome, score } });
        }
      }
    }

    const data = await prisma.leaderboard.findMany({ orderBy: { score: "desc" }, take: 10 });
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "failed_to_update" }), { status: 500 });
  }
}


