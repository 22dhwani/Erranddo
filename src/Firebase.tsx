// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiFWJ2KbaBth5pX3Rv084a6mhUHPUsP34",
  authDomain: "erranddo-36cbc.firebaseapp.com",
  projectId: "erranddo-36cbc",
  storageBucket: "erranddo-36cbc.appspot.com",
  messagingSenderId: "715070118259",
  appId: "1:715070118259:web:52fc23bee61f6fce940d06",
  measurementId: "G-8X4TWTJKE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore();
export const messaging = getMessaging(app);
export let userCurrentToken = "";

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BCdfqlsBOwjbIsJAl4uO-rYfel9ckd3AqQmp78vPmGXtG1VF6ZDGsN9ISdzkGmrBEZLvjA4iA0_C8lboymSBzIw",
    });
    if (currentToken) {
      userCurrentToken = currentToken;
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
  }
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
