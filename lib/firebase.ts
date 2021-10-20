import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOpv4iiTEAPGPFCMKe-8LvLvJaRjYPj78",
  authDomain: "fir-nextjs-blog.firebaseapp.com",
  projectId: "fir-nextjs-blog",
  storageBucket: "fir-nextjs-blog.appspot.com",
  messagingSenderId: "52509613619",
  appId: "1:52509613619:web:cdf00980dfbfa7d038cd46",
  measurementId: "G-6XJN7GP9WX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**
 * Gets a users/{uid} document using their username
 * @param username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username);
  const userdoc = (await query.get()).docs[0];
  return userdoc;
}

/**
 * Converts firestore users doc with firebase timestamps to json
 * @param doc
 */
export function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

// convert timestamp to firebase timestamp
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
// Safer to use for timestamp than browser
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
