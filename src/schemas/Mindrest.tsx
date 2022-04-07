import { buildSchema } from "@camberi/firecms"

export type Mindrest = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
}

export const mindrestSchema = buildSchema<Mindrest>({
    name: "Mindrest",
    properties: {
        bannerUrl: {
            title: "Banner url",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        isAVideoForPremiumUsers: {
            title: "Is a premium video?",
            validation: { required: true },
            dataType: "boolean"
        },
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        videoLength: {
            title: "Video length",
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