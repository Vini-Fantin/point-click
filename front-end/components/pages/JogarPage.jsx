"use client"

import { useState } from "react"
import SalaDeEstar from "./SalaDeEstar"
import ResultScreen from "./ResultScreen"


export default function JogarPage({ items, jogadorNome }) {

    const [totalScore, setTotalScore] = useState(0)
    const [roomsCleared, setRoomsCleared] = useState(0)

    function handleRoomFinished(roomScore) {
        setTotalScore(totalScore + roomScore)
        setRoomsCleared(roomsCleared + 1)
    }

    const [SalaDeEstarVisible, setSalaDeEstarVisible] = useState(true)
    const [SalaCozinhaVisible, setSalaCozinhaVisible] = useState(false)
    const [SalaQuartoVisible, setSalaQuartoVisible] = useState(false)
    const [ResultScreenVisible, setResultScreenVisible] = useState(false)


    return (
        <div className="h-full">

            {SalaDeEstarVisible &&
                <SalaDeEstar items={items} onFinished={handleRoomFinished} />
            }

            {ResultScreenVisible && (
                <ResultScreen resultado={{ nome: jogadorNome, score: totalScore }}></ResultScreen>
            )}


        </div>
    )
}