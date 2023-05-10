import {
    buildProperty,
    buildCollection,
} from "firecms";
import { v4 as uuid } from 'uuid';


export type Resources = {
    title: string,
    description: string,
    videoUrl: string,
}

export const resourcesCollection = buildCollection<Resources>({
    path: "resources",
    name: "Resources",
    properties: {
        description: buildProperty({
            name: "Description",
            validation: { required: true },
            dataType: "string"
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
            config: {
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
    },
})