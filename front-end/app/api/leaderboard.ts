"use server";

import prisma from "../../lib/prisma";

export async function getLeaderboard() {
  return await prisma.leaderboard.findMany({
    orderBy: { score: "desc" },
    take: 10, // sempre retorna o top 10
  });
}

export async function updateLeaderboard({ nome, score }) {
  const existing = await prisma.leaderboard.findFirst({
    where: { name: nome },
  });

  if (existing) {
    if (score > existing.score) {
      await prisma.leaderboard.update({
        where: { id: existing.id },
        data: { score },
      });
    }
  } else {
    const count = await prisma.leaderboard.count();

    if (count < 10) {
      await prisma.leaderboard.create({
        data: { name: nome, score },
      });
    } else {
      const lowest = await prisma.leaderboard.findFirst({
        orderBy: { score: "asc" },
      });

      if (score > lowest.score) {
        await prisma.leaderboard.update({
          where: { id: lowest.id },
          data: { name: nome, score },
        });
      }
    }
  }
}
