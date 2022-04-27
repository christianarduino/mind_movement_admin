import React from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  Entity,
  FirebaseCMSApp,
  NavigationBuilder,
  NavigationBuilderProps,
} from "@camberi/firecms";

import "typeface-rubik";
import "typeface-space-mono";
import { guidedMeditations } from "./schemas/GuidedMeditation";
import { masterclassSchema } from "./schemas/Masterclass";
import { mindrestSchema } from "./schemas/Mindrest";
import { mobilityMovementsSchema } from "./schemas/MobilityMovements";
import { resourcesSchema } from "./schemas/Resources";
import { User, usersSchema } from "./schemas/User";

const firebaseConfig = {
  apiKey: "AIzaSyB3rpRb46oIOQ0TY7ZdL2yMg-V1yUQHeAw",
  authDomain: "mind-movement.firebaseapp.com",
  projectId: "mind-movement",
  storageBucket: "mind-movement.appspot.com",
  messagingSenderId: "961255732655",
  appId: "1:961255732655:web:0909942e47cb5ac392eb5a",
  measurementId: "G-HDD4RDDLKG"
};

export default function App() {

  const navigation: NavigationBuilder = async ({
    user,
    authController
  }: NavigationBuilderProps) => {

    return ({
      collections: [
        buildCollection({
          path: "guided_meditations",
          schema: guidedMeditations,
          name: "Guided Meditations",
        }),
        buildCollection({
          path: "masterclass",
          schema: masterclassSchema,
          name: "MasterClass",
        }),
        buildCollection({
          path: "mindrests",
          schema: mindrestSchema,
          name: "Mindrests",
        }),
        buildCollection({
          path: "mobility_movements",
          schema: mobilityMovementsSchema,
          name: "Mobility Movements",
        }),
        buildCollection({
          path: "resources",
          schema: resourcesSchema,
          name: "Resources",

        }),
        buildCollection({
          path: "users",
          schema: usersSchema,
          name: "Users",
          permissions: ({ authController }) => ({
            delete: false
          }),
        }),
      ]
    });
  };

  const myAuthenticator: Authenticator<FirebaseUser> = async ({
    user,
    authController,
    dataSource
  }) => {
    if (!authController.initialLoading) {
      const userId = user?.uid
      if (userId) {
        const user = await dataSource.fetchEntity({
          path: "/users",
          entityId: userId,
          schema: usersSchema
        })
        if (user.values) {
          if (user.values.role == "admin") {
            return true
          } else {
            throw Error("You do not have permission to access the panel")
          }
        } else {
          throw Error("You are not registered on the platform")
        }
      } else {
        throw Error("An error occurred while logging in with Firebase")
      }
    }
    return true
  };

  return <FirebaseCMSApp
    logo="logo.png"
    
    name={"Mind Movement Admin"}
    authentication={myAuthenticator}
    signInOptions={[
      'password',
      'google.com',
    ]}
    navigation={navigation}
    firebaseConfig={firebaseConfig}
  />;
}