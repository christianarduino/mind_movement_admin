import { buildSchema } from "@camberi/firecms";

export type GuidedMeditation = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string
    videoUrl: string
}

export const guidedMeditations = buildSchema<GuidedMeditation>({
    name: "Guided meditations",
    properties: {
        bannerUrl: {
            title: "Banner Url",
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
        videoUrl: {
            title: "Video url",
            validation: { required: true },
            dataType: "string",
        },
    }
})