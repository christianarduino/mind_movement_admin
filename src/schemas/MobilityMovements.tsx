import { v4 as uuid } from 'uuid';
import {
    buildProperty,
    buildCollection,
} from "firecms";
export type MobilityMovements = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
}

export const mobilityMovementsCollection = buildCollection<MobilityMovements>({
    path: "mobility_movements",
    name: "Mobility movements", 
    properties:{
    bannerUrl: buildProperty({
        name: "Banner image",
        validation: { required: true },
        dataType: "string",
        config: {
            url: true,
            storageMeta: {
                storeUrl: true,
                mediaType: "image",
                storagePath: () => {
                    return "images";
                },
                acceptedFiles: ["image/*"],
                fileName: () => {
                    return uuid();
                }
            }
        }
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
    videoUrl:buildProperty({
        name: "Video",
        validation: { required: true },
        dataType: "string",
        config: {
            url: true,
            storageMeta: {
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
        }
    }),
}})