"use server"

import prisma from "../../lib/prisma"


export async function getRooms() {
    try {
        const rooms = await prisma.rooms.findMany({
            include: {
                places: {
                    include: {
                        items: true
                    }
                }
            }
        })

        return rooms


    } catch (error) {
        return []
    }

}

export async function getRoom(room_id:number) {
    try {
        const rooms = await prisma.rooms.findUnique({
            where: {
                id: room_id
            },
            include: {
                places: {
                    include: {
                        items: true
                    }
                }
            }
        })

        return rooms


    } catch (error) {
        return []
    }

}