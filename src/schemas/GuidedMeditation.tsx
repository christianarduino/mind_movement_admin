const uuid = require('uuid');
export type GuidedMeditation = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string
    videoUrl: string
}

export const guidedMeditations = {
    bannerUrl: {
        title: "Banner image",
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
    videoUrl: {
        title: "Video",
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
                    return uuid.v4();
                }
            }
        }
    }
}