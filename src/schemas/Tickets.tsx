import {
    buildProperty,
    buildCollection,
} from "firecms";
import { v4 as uuid } from 'uuid';


export type Tickets = {
    platform: string,
    version: string,
    ticketId: number,
    userEmail: string,
    userId: string,
    description: string,
}

export const ticketsCollection = buildCollection<Tickets>({
    path: "tickets",
    name: "Tickets",
    permissions: ({ authController }) => ({
        delete: false,
        create: false,
        edit: false,
    }),
    properties: {
        version: buildProperty({
            name: "App Version",
            validation: { required: true },
            dataType: "string"
        }),
        platform: buildProperty({
            name: "Platform",
            validation: { required: true },
            dataType: "string"
        }),
        ticketId: buildProperty({
            name: "Ticket Number",
            validation: { required: true },
            dataType: "number"
        }),
        userEmail: buildProperty({
            name: "User Email",
            validation: { required: true },
            dataType: "string"
        }),
        userId: buildProperty({
            name: "User ID",
            validation: { required: true },
            dataType: "string"
        }),
        description: buildProperty({
            name: "Description",
            validation: { required: true },
            dataType: "string"
        }),
    },
})