import { buildSchema } from "@camberi/firecms"
const uuid = require('uuid');

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
            title: "Video",
            validation: { required: true },
            dataType: "string",
            config: {
                url: true,
                storageMeta: {
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