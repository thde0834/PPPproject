import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBR7CWm1jHPSe-4m4qKiPscBTRoAi6futo",
    authDomain: "skoplay-7b008.firebaseapp.com",
    databaseURL: "https://skoplay-7b008.firebaseio.com",
    projectId: "skoplay-7b008",
    storageBucket: "skoplay-7b008.appspot.com",
    messagingSenderId: "761939565849",
    appId: "1:761939565849:web:303e473673f1be814eb988"
};

firebase.initializeApp(firebaseConfig);

export var db = firebase.firestore();
export var auth = firebase.auth();

export async function forEachEntry(collection, func) {
    await db.collection(collection).get().then((query) => {
        query.forEach((doc) => {
            func(doc.data());
        })
    });
}

export async function addEntry(collection, entry) {
    await db.collection(collection).add(entry)
        .then((docRef) => {
            console.log("New entry in " + collection + ": " + docRef.id);
        })
        .catch((error) => {
            console.log("Error adding entry to " + collection + ": " + error);
        })
}