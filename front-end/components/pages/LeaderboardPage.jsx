"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LeaderboardPage() {

    const router = useRouter()

    return (
        <div className="bg-gradient-to-r from-green-300 to-lime-400 w-screen h-full flex items-center justify-center">
            <main className="bg-white rounded-md w-6/12 py-12 shadow-lg">
                <section>
                    <h1 className="text-4xl font-bold text-center">Tabela de Líderes</h1>
                    <ol className="list-decimal list-inside text-lg mt-4 space-y-2 px-32">
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 1 - 150 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 2 - 120 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 3 - 100 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 4 - 80 pontos</li>
                    </ol>
                    <button onClick={() => router.push("/inicio")} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 w-8/12 rounded block cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg mx-auto mt-8">
                        Voltar ao início
                    </button>
                </section>
            </main>
        </div>
    )
}