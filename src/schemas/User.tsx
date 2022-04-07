import { buildSchema } from "@camberi/firecms";

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

export const usersSchema = buildSchema<User>({
    name: "User",
    properties: {
        uid: {
            title: "UID",
            validation: { required: true },
            dataType: "string"
        },
        role: {
            title: "Role",
            validation: { required: true },
            dataType: "string",
            config: {
                enumValues: {
                    admin: "Admin",
                    user: "User",
                }
            }
        },
        email: {
            title: "EMail",
            validation: { required: true, email: true },
            dataType: "string",
            readOnly: true,
        },
        imageUrl: {
            title: "Image url",
            validation: { required: true },
            dataType: "string"
        },
        name: {
            title: "Name",
            validation: { required: true },
            dataType: "string"
        },
        personTitle: {
            title: "Person title",
            validation: { required: true },
            dataType: "string"
        },
        phone: {
            title: "Phone",
            validation: { required: true },
            dataType: "string"
        },
        surname: {
            title: "Surname",
            validation: { required: true },
            dataType: "string"
        },
        username: {
            title: "Username",
            validation: { required: true },
            dataType: "string"
        },
        pushNotification: {
            title: "Push Notification",
            validation: { required: true },
            dataType: "boolean"
        },
        isComplete: {
            title: "Profile complete",
            validation: { required: true },
            dataType: "boolean"
        },
        goal: {
            dataType: "map",
            properties: {
                breakOldHabits: {
                    title: "Break old habits",
                    dataType: "boolean"
                },
                calmMind: {
                    title: "Calm mind",
                    dataType: "boolean"
                },
                dealWithCriticismAndNegativity: {
                    title: "Deal with criticism and negativity",
                    dataType: "boolean"
                },
                dealWithStress: {
                    title: "Deal with stress",
                    dataType: "boolean"
                },
                developNewHabits: {
                    title: "Develop new habits",
                    dataType: "boolean"
                },
                doesNotMatter: {
                    title: "Does not matter",
                    dataType: "boolean"
                },
                enhanceYourEnergyLevel: {
                    title: "Enhance your energy level",
                    dataType: "boolean"
                },
                gainBetterFocusAndWillpower: {
                    title: "Gain better focus and willpower",
                    dataType: "boolean"
                },
                getRidOfInsecurity: {
                    title: "Get rid of insecurity",
                    dataType: "boolean"
                },
                max15minPerDay: {
                    title: "Max15min per day",
                    dataType: "boolean"
                },
                max1hoursPerDay: {
                    title: "Max1hours per day",
                    dataType: "boolean"
                },
                max2hoursPerDay: {
                    title: "Max2hours per day",
                    dataType: "boolean"
                },
                oneTimePerWeek: {
                    title: "One time per week",
                    dataType: "boolean"
                },
                releaseTensionInMyBody: {
                    title: "Release tension in my body",
                    dataType: "boolean"
                },
                sleepBetter: {
                    title: "Sleep better",
                    dataType: "boolean"
                },
            },
        }
    },
})