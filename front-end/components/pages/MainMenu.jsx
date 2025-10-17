"use client"

import { useRouter } from "next/navigation"

export default function MainMenu() {

    const router = useRouter()

    return (
        <div className="bg-gradient-to-r from-green-300 to-lime-400 w-screen h-full flex items-center justify-center">
            <main className="bg-white rounded-md w-4/12 py-12 shadow-lg">
                <h1 className="text-4xl font-bold text-center">Menu Principal</h1>
                <section>
                    <button onClick={() => router.push("/jogar")} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 w-8/12 rounded block cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg mx-auto mt-8">
                        Jogar
                    </button>
                    <button onClick={() => router.push("/leaderboard")} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 w-8/12 rounded block cursor-pointer transition duration-150 ease-in-out hover:scale-105 active:scale-100 active:shadow-lg mx-auto mt-8">
                        Tabela de Liderança
                    </button>
                </section>
            </main>
        </div>
    )
}