import { buildSchema } from "@camberi/firecms"
const uuid = require('uuid');

export type MobilityMovements = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
}

export const mobilityMovementsSchema = buildSchema<MobilityMovements>({
    name: "Mobility Movements",
    properties: {
        bannerUrl: {
            title: "Banner image",
            validation: { required: true },
            dataType: "string",
            config: {
                url: true,
                storageMeta: {
                    storeUrl: true,
                    mediaType: "image",
                    storagePath: (context) => {
                        return "images";
                    },
                    acceptedFiles: ["image/*"],
                    fileName: (context) => {
                        return uuid.v4();
                    }
                }
            }
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
            title: "Video",
            validation: { required: true },
            dataType: "string",
            config: {
                url: true,
                storageMeta: {
                    storeUrl: true,
                    mediaType: "video",
                    storagePath: (context) => {
                        return "videos";
                    },
                    acceptedFiles: ["video/*"],
                    fileName: (context) => {
                        return uuid.v4();
                    }
                }
            }
        },
    }
})