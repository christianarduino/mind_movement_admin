import { buildSchema } from "@camberi/firecms";
import CustomIdField from "../custom_id_field";
const uuid = require('uuid');

export type Masterclass = {
    description: string,
    id: string,
    imageBannerUrl: string,
    introVideoUrl: string,
    title: string,
    courses: Course[],
}

export type Course = {
    id: string,
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
    videos: Video[],
}

export type Video = {
    id: string,
    bannerUrl: string,
    description: string,
    title: string,
    videoUrl: string,
}

export const masterclassSchema = buildSchema<Masterclass>({
    name: "Masterclass",
    properties: {
        id: {
            title: "Id",
            dataType: "string",
            disabled: true,
            config: {
                Field: CustomIdField,
            }
        },
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        imageBannerUrl: {
            title: "Banner image",
            validation: { required: true },
            dataType: "string",
            config: {
                url: true,
                storageMeta: {
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
        introVideoUrl: {
            title: "Intro video",
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
        courses: {
            title: "Courses",
            dataType: "array",
            of: {
                dataType: "map",
                title:"Course",
                properties: {
                    id: {
                        title: "Id",
                        dataType: "string",
                        disabled: true,
                        config: {
                            Field: CustomIdField,
                        }
                    },
                    bannerUrl: {
                        title: "Course banner image",
                        validation: { required: true },
                        dataType: "string",
                        config: {
                            url: true,
                            storageMeta: {
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
                        title: "Video url",
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
                    videos: {
                        dataType: "array",
                        title: "Videos",
                        of: {
                            dataType: "map",
                            title:"Video",
                            properties: {
                                id: {
                                    title: "Id",
                                    dataType: "string",
                                    disabled: true,
                                    config: {
                                        Field: CustomIdField,
                                    }
                                },
                                bannerUrl: {
                                    title: "Banner url",
                                    validation: { required: true },
                                    dataType: "string",
                                    config: {
                                        url: true,
                                        storageMeta: {
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
                                title: {
                                    title: "Title",
                                    validation: { required: true },
                                    dataType: "string"
                                },
                                videoUrl: {
                                    title: "Video Url",
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
                        }
                    }
                },
            }
        }
    }
})