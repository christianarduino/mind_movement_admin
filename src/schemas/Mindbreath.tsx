import { v4 as uuid } from 'uuid';
import {
    buildCollection,
    buildProperty,
} from "firecms";
import CustomVideoPreview from '../custom_fields/custom_file_upload';
export type Mindbreath = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
}

export const mindbreathCollection = buildCollection<Mindbreath>({
    path: "mindbreaths",
    name: "Mindbreaths",
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
        videoLength: buildProperty({
            name: "Video length",
            validation: { required: true },
            dataType: "string"
        }),
        videoUrl: buildProperty({
            name: "Video",
            validation: { required: true },
            dataType: "string",
            storage: {
                storeUrl: true,
                mediaType: "video",
                storagePath: () => {
                    return "videos";
                },
                acceptedFiles: ["video/*"],
                fileName: () => {
                    return uuid();
                }
            }
        }),
    }
})