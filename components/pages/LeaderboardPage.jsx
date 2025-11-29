"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Card from "../ui/Card"
import Button from "../ui/Button"

export default function LeaderboardPage() {

    const router = useRouter()

    return (
        <div className="w-screen min-h-screen flex items-center justify-center p-6">
            <main className="w-full max-w-3xl">
                <Card className="p-8">
                    <section>
                        <h1 className="text-4xl font-bold text-center">Tabela de Líderes</h1>
                        <ol className="list-decimal list-inside text-lg mt-4 space-y-2 px-6">
                            <li className="bg-green-50 p-2 rounded-md">Jogador 1 - 150 pontos</li>
                            <li className="bg-green-50 p-2 rounded-md">Jogador 2 - 120 pontos</li>
                            <li className="bg-green-50 p-2 rounded-md">Jogador 3 - 100 pontos</li>
                            <li className="bg-green-50 p-2 rounded-md">Jogador 4 - 80 pontos</li>
                        </ol>
                        <Button onClick={() => router.push("/inicio")} className="w-8/12 mx-auto mt-8 block">
                            Voltar ao início
                        </Button>
                    </section>
                </Card>
            </main>
        </div>
    )
}