"use server"

import prisma from "../../lib/prisma"

// export async function getItems() {
//   const res = await fetch("http://localhost:8000/items-index")

//   if (!res.ok) {
//     throw new Error(`Erro na requisição: ${res.status}`)
//   }

//   try {
//     const data = await res.json(res)
//     return data.data

//   } catch (err) {
//     return []
//   }
// }

export async function getItems(roomId:number) {

    try {
        const items = await prisma.items.findMany({
            include: {
                places: {
                    include: {
                        rooms: true
                    }
                }
            },
            where: {
                places: {
                   room_id: roomId
                }
            }
        })

        return items

    } catch (error) {
        return []
    }
}

export async function getItemById(itemId:number) {
    try {
        const item = await prisma.items.findUnique({
            where: {
                id: itemId
            }
        })

        return item
    } catch (error) {
        
    }

}