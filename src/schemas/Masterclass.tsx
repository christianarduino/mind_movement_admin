import { buildSchema } from "@camberi/firecms";

export type Masterclass = {
    description: string,
    id: string,
    imageBannerUrl: string,
    introVideoUrl: string,
    title: string,
    courses: Course[],
}

export type Course = {
    bannerUrl: string,
    description: string,
    isAVideoForPremiumUsers: boolean,
    title: string,
    videoLength: string,
    videoUrl: string,
    videos: Video[],
}

export type Video = {
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
            validation: { required: true },
            dataType: "string"
        },
        description: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        imageBannerUrl: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        introVideoUrl: {
            title: "Description",
            validation: { required: true },
            dataType: "string"
        },
        title: {
            title: "Title",
            validation: { required: true },
            dataType: "string"
        },
        courses: {
            title: "Courses",
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    bannerUrl: {
                        title: "Banner url",
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
                    videoLength: {
                        title: "Video length",
                        validation: { required: true },
                        dataType: "string"
                    },
                    videoUrl: {
                        title: "Video url",
                        validation: { required: true },
                        dataType: "string"
                    },
                    videos: {
                        dataType: "array",
                        of: {
                            dataType: "map",
                            properties: {
                                bannerUrl: {
                                    title: "Banner url",
                                    validation: { required: true },
                                    dataType: "string"
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
                                    dataType: "string"
                                },
                            }
                        }
                    }
                },
            }
        }
    }
})