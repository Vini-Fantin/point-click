"use server";

import prisma from "../../lib/prisma";

export async function getLeaderboard() {
  return await prisma.leaderboard.findMany({
    orderBy: { score: "desc" },
    take: 10,
  });
}

export async function updateLeaderboard({ nome, score }: { nome: string; score: number }) {

  const safeName = (nome ?? "").trim();
  if (!safeName || safeName.toLowerCase() === "teste") return;

  const existing = await prisma.leaderboard.findFirst({
    where: { name: safeName },
  });

  if (existing) {
    if (score > (existing as any).score) {
      await prisma.leaderboard.update({
        where: { id: (existing as any).id },
        data: { score },
      });
    }
  } else {
    const count = await prisma.leaderboard.count();

    if (count < 10) {
      await prisma.leaderboard.create({
        data: { name: safeName, score },
      });
    } else {
      const lowest: any = await prisma.leaderboard.findFirst({
        orderBy: { score: "asc" },
      });

      if (lowest && score > lowest.score) {
        await prisma.leaderboard.update({
          where: { id: lowest.id },
          data: { name: safeName, score },
        });
      }
    }
  }
}
