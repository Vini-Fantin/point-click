"use client"

import { useState } from "react"

export default function ResultScreen({ items, resultado }) {

    return (
        <div className="bg-gradient-to-r from-green-300 to-lime-400 w-screen h-full flex items-center justify-center">
            <main className="bg-white rounded-md w-6/12 py-12 shadow-lg">
                <h1 className="text-4xl font-bold text-center">Resultado Final</h1>
                <section>
                    <p className="text-2xl text-center mt-10 bg-lime-400 shadow-md py-2 ">Pontuação Total: {resultado.score}</p>
                    <h2 className="text-2xl text-center mt-4 py-2 font-semibold">Placar de Ranking</h2>
                    <ol className="list-decimal list-inside text-lg mt-4 space-y-2 px-32">
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 1 - 150 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 2 - 120 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 3 - 100 pontos</li>
                        <li className="bg-green-200 p-2 rounded-md shadow-md">Jogador 4 - 80 pontos</li>
                    </ol>
                </section>
            </main>
        </div>
    )
}