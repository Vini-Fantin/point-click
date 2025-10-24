"use client";

export default function GameHUD({ score = 0, roomIndex = 0, totalRooms = 3, playerName = "" }) {
  return (
    <div className="fixed top-4 right-80 z-50 glass rounded-full px-5 py-2 shadow-md flex items-center gap-4 animate-pop">
      <div className="text-sm text-gray-700"><strong>Jogador:</strong> {playerName || "Anônimo"}</div>
      <div className="w-px h-4 bg-gray-300" />
      <div className="text-sm text-gray-700"><strong>Sala:</strong> {roomIndex + 1}/{totalRooms}</div>
      {/* <div className="w-px h-4 bg-gray-300" /> */}
      {/* <div className="text-sm text-gray-700"><strong>Pontos:</strong> {score}</div> */}
    </div>
  );
}


