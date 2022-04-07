import { buildSchema } from "@camberi/firecms"

export type Resources = {
    title: string,
    description: string,
    videoUrl: string,
}

export const resourcesSchema = buildSchema<Resources>({
    name: "Mobility Movements",
    properties: {
        description: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        videoUrl: {
            title: "Video url",
            validation: { required: true },
            dataType: "string"
        },
    }
})