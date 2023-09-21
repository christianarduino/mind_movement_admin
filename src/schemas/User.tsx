import {
    buildProperty,
    buildCollection,
} from "firecms";
import { v4 as uuid } from 'uuid';



export type User = {
    uid: string,
    email: string,
    imageUrl: string,
    name: string,
    personTitle: string,
    phone: string,
    surname: string,
    username: string
    pushNotification: boolean,
    isComplete: boolean,
    role: string,
    userType: string,
    goal: {
        breakOldHabits: boolean,
        calmMind: boolean,
        dealWithCriticismAndNegativity: boolean,
        dealWithStress: boolean,
        developNewHabits: boolean,
        doesNotMatter: boolean,
        enhanceYourEnergyLevel: boolean,
        gainBetterFocusAndWillpower: boolean,
        getRidOfInsecurity: boolean,
        max15minPerDay: boolean,
        max1hoursPerDay: boolean,
        max2hoursPerDay: boolean,
        oneTimePerWeek: boolean,
        releaseTensionInMyBody: boolean,
        sleepBetter: boolean
    },
}

export const usersCollection = buildCollection({
    path: "users",
    name: "Users",
    permissions: ({ authController }) => ({
        delete: false
    }),
    properties: {
        uid: buildProperty({
            name: "UID",
            validation: { required: true },
            dataType: "string"
        }),
        role: buildProperty({
            name: "Role",
            validation: { required: true },
            dataType: "string",
            enumValues: {
                admin: "Admin",
                user: "User",
            }
        }),
        userType: buildProperty({
            name: "User Type",
            validation: { required: true },
            dataType: "string",
            enumValues: {
                Free: "Free",
                Premium: "Premium",
            }
        }),
        email: buildProperty({
            name: "EMail",
            validation: { required: true, email: true },
            dataType: "string",
            readOnly: true,
        }),
        imageUrl: buildProperty({
            name: "Image url",
            description: "user profile picture",
            validation: { required: false },
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
        name: buildProperty({
            name: "Name",
            validation: { required: true },
            dataType: "string"
        }),
        personTitle: buildProperty({
            name: "Person title",
            validation: { required: true },
            dataType: "string"
        }),
        phone: buildProperty({
            name: "Phone",
            validation: { required: true },
            dataType: "string"
        }),
        surname: buildProperty({
            name: "Surname",
            validation: { required: true },
            dataType: "string"
        }),
        username: buildProperty({
            name: "Username",
            validation: { required: false },
            dataType: "string"
        }),
        pushNotification: buildProperty({
            name: "Push Notification",
            validation: { required: true },
            dataType: "boolean"
        }),
        isComplete: buildProperty({
            name: "Profile complete",
            validation: { required: false },
            dataType: "boolean"
        }),
        goal: buildProperty({
            dataType: "map",
            expanded: true,
            properties: {
                breakOldHabits: {
                    name: "Break old habits",
                    dataType: "boolean"
                },
                calmMind: {
                    name: "Calm mind",
                    dataType: "boolean"
                },
                dealWithCriticismAndNegativity: {
                    name: "Deal with criticism and negativity",
                    dataType: "boolean"
                },
                dealWithStress: {
                    name: "Deal with stress",
                    dataType: "boolean"
                },
                developNewHabits: {
                    name: "Develop new habits",
                    dataType: "boolean"
                },
                doesNotMatter: {
                    name: "Does not matter",
                    dataType: "boolean"
                },
                enhanceYourEnergyLevel: {
                    name: "Enhance your energy level",
                    dataType: "boolean"
                },
                gainBetterFocusAndWillpower: {
                    name: "Gain better focus and willpower",
                    dataType: "boolean"
                },
                getRidOfInsecurity: {
                    name: "Get rid of insecurity",
                    dataType: "boolean"
                },
                max15minPerDay: {
                    name: "Max15min per day",
                    dataType: "boolean"
                },
                max1hoursPerDay: {
                    name: "Max1hours per day",
                    dataType: "boolean"
                },
                max2hoursPerDay: {
                    name: "Max2hours per day",
                    dataType: "boolean"
                },
                oneTimePerWeek: {
                    name: "One time per week",
                    dataType: "boolean"
                },
                releaseTensionInMyBody: {
                    name: "Release tension in my body",
                    dataType: "boolean"
                },
                sleepBetter: {
                    name: "Sleep better",
                    dataType: "boolean"
                },
            },
        })
        /* 
        goal: buildProperty({
            name: "goals",
            dataType: "map",
            properties: {
                breakOldHabits: buildProperty({
                    name: "Break old habits",

                    dataType: "boolean"
                }),
                calmMind: buildProperty({
                    name: "Calm mind",
                    dataType: "boolean"
                }),
                dealWithCriticismAndNegativity: buildProperty({
                    name: "Deal with criticism and negativity",
                    dataType: "boolean"
                }),
                dealWithStress: buildProperty({
                    name: "Deal with stress",
                    dataType: "boolean"
                }),
                developNewHabits: buildProperty({
                    name: "Develop new habits",
                    dataType: "boolean"
                }),
                doesNotMatter: buildProperty({
                    name: "Does not matter",
                    dataType: "boolean"
                }),
                enhanceYourEnergyLevel: buildProperty({
                    name: "Enhance your energy level",
                    dataType: "boolean"
                }),
                gainBetterFocusAndWillpower: buildProperty({
                    name: "Gain better focus and willpower",
                    dataType: "boolean"
                }),
                getRidOfInsecurity: buildProperty({
                    name: "Get rid of insecurity",
                    dataType: "boolean"
                }),
                max15minPerDay: buildProperty({
                    name: "Max15min per day",
                    dataType: "boolean"
                }),
                max1hoursPerDay: buildProperty({
                    name: "Max1hours per day",
                    dataType: "boolean"
                }),
                max2hoursPerDay: buildProperty({
                    name: "Max2hours per day",
                    dataType: "boolean"
                }),
                oneTimePerWeek: buildProperty({
                    name: "One time per week",
                    dataType: "boolean"
                }),
                releaseTensionInMyBody: buildProperty({
                    name: "Release tension in my body",
                    dataType: "boolean"
                }),
                sleepBetter: buildProperty({
                    name: "Sleep better",
                    dataType: "boolean"
                }),
            },
        })
        */
    },
});
