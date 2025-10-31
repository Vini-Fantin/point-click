"use server"

import prisma from "../../lib/prisma"


export async function getPlaces(room_id:number) {

    try {
        const places = await prisma.places.findMany({
            where: {
                room_id: room_id
            }
        })

        return places
        
    } catch (error) {
        return []
    }
}