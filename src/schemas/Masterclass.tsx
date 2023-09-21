
import {
    buildProperty,
    buildCollection,
} from "firecms";
import CustomIdField from "../custom_id_field";
import { v4 as uuid } from 'uuid';

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
    numberId: string,
    bannerUrl: string,
    description: string,
    title: string,
    videoUrl: string,
}

export const masterclassCollection = buildCollection<Masterclass>({
    name: "Masterclass",
    path: "masterclass",
    properties: {
        id: buildProperty({
            name: "Id",
            dataType: "string",
            disabled: true,
            config: {
                Field: CustomIdField,
            }
        }),
        title: buildProperty({
            name: "Title",
            validation: { required: true },
            dataType: "string"
        }),
        description: buildProperty({
            name: "Description",
            validation: { required: true },
            dataType: "string"
        }),
        imageBannerUrl: buildProperty({
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
        introVideoUrl: buildProperty({
            name: "Intro video",
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
        }),
        courses: buildProperty({
            name: "Courses",
            dataType: "array",
            of: {
                dataType: "map",
                name: "Course",
                properties: {
                    id: {
                        name: "Id",
                        dataType: "string",
                        disabled: true,
                        config: {
                            Field: CustomIdField,
                        }
                    },
                    bannerUrl: {
                        name: "Course banner image",
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
                    },
                    description: {
                        name: "Description",
                        validation: { required: true },
                        dataType: "string"
                    },
                    isAVideoForPremiumUsers: {
                        name: "Is a premium video?",
                        validation: { required: true },
                        dataType: "boolean"
                    },
                    title: {
                        name: "Title",
                        validation: { required: true },
                        dataType: "string"
                    },
                    videoLength: {
                        name: "Video length",
                        validation: { required: true },
                        dataType: "string"
                    },
                    videoUrl: {
                        name: "Video url",
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
                    },
                    videos: {
                        dataType: "array",
                        name: "Videos",
                        of: {
                            dataType: "map",
                            name: "Video",
                            properties: {
                                id: {
                                    name: "Id",
                                    dataType: "string",
                                    disabled: true,
                                    config: {
                                        Field: CustomIdField,
                                    }
                                },
                                numberId:{
                                    name: "Number Id",
                                    validation: { required: true },
                                    dataType: "string"
                                },
                                bannerUrl: {
                                    name: "Banner url",
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
                                },
                                description: {
                                    name: "Description",
                                    validation: { required: true },
                                    dataType: "string"
                                },
                                title: {
                                    name: "Title",
                                    validation: { required: true },
                                    dataType: "string"
                                },
                                videoUrl: {
                                    name: "Video Url",
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
                                },
                            }
                        }
                    }
                },
            }
        })
    }
})