// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

let app;

export async function initializeFirebase() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCV8DZ9624X8PzB8LJRs2lPBABDMDJWlbw",
        authDomain: "nweb-projekt6.firebaseapp.com",
        projectId: "nweb-projekt6",
        storageBucket: "nweb-projekt6.appspot.com",
        messagingSenderId: "677479275412",
        appId: "1:677479275412:web:a93e4ac11890294ead8d81",
        measurementId: "G-MNM05XVHJ0"
    };

    // Initialize Firebase
    app = initializeApp(firebaseConfig);
}

export function getFirebase() {
    return app;
}