import { v4 as uuid } from 'uuid';
import {
    buildProperty,
    buildCollection,
} from "firecms";

export type GuidedMeditation = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string
    videoUrl: string
}

export const guidedMeditationsCollection = buildCollection<GuidedMeditation>({
    name: "Guided meditations",
    path: "guided_meditations",
    properties: {
        bannerUrl: buildProperty({
            name: "Banner image",
            validation: { required: true },
            dataType: "string",
            storage: {
                storagePath: "images",
                storeUrl: true,
                mediaType: "image",
                acceptedFiles: ["image/*"],
                fileName: (context) => {
                    return uuid();
                }
            },
        }),
        description: buildProperty({
            name: "Description",
            validation: { required: true },
            dataType: "string"
        }),
        isAVideoForPremiumUsers: buildProperty({
            name: "Is a premium video?",
            validation: { required: true },
            dataType: "boolean"
        }),
        title: buildProperty({
            name: "Title",
            validation: { required: true },
            dataType: "string"
        }),
        videoUrl: buildProperty({
            name: "Video",
            validation: { required: true },
            dataType: "string",
            storage: {
                storagePath: "videos",
                storeUrl: true,
                mediaType: "video",
                acceptedFiles: ["video/*"],
                fileName: (context) => {
                    return uuid();
                }
            },
        })
    }
})