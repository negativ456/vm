import { UserType } from "@/lib/entities"

export type EventType = {
    title: string,
    creator: UserType,
    rating: number,
    location: string,
    datetime: Date,
    price: string,
    type: string,
    isFavourite: boolean,
    image: string,
    description: string
}