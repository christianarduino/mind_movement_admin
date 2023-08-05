import React from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    FirebaseCMSApp
} from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import { GuidedMeditation, guidedMeditationsCollection } from "./schemas/GuidedMeditation";
import { Masterclass, masterclassCollection } from "./schemas/Masterclass";
import { Mindrest, mindrestCollection } from "./schemas/Mindrest";
import { Mindbreath, mindbreathCollection } from "./schemas/Mindbreath";
import { MobilityMovements, mobilityMovementsCollection } from "./schemas/MobilityMovements";
import { Resources, resourcesCollection } from "./schemas/Resources";
import { User, usersCollection } from "./schemas/User";
import { Tickets, ticketsCollection } from "./schemas/Tickets";

const firebaseConfig = {
  apiKey: "AIzaSyB3rpRb46oIOQ0TY7ZdL2yMg-V1yUQHeAw",
  authDomain: "mind-movement.firebaseapp.com",
  projectId: "mind-movement",
  storageBucket: "mind-movement.appspot.com",
  messagingSenderId: "961255732655",
  appId: "1:961255732655:web:0909942e47cb5ac392eb5a",
  measurementId: "G-HDD4RDDLKG"
};

const collections = [
  masterclassCollection,
  mindbreathCollection,
  mobilityMovementsCollection,
  guidedMeditationsCollection,
  mindrestCollection,
  resourcesCollection,
  ticketsCollection,
  usersCollection,
]

export default function App() {



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
          collection: usersCollection,
        })
        if (user != undefined) {
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
    collections={collections}
    signInOptions={[
      'password',
    ]}
    firebaseConfig={firebaseConfig}
  />;
}