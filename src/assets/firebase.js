import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCagywvibaoJ9uy33u5BN1DN3CaYYjzHRA",
    authDomain: "akvs-app.firebaseapp.com",
      databaseURL: "https://akvs-app-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "akvs-app",
          storageBucket: "akvs-app.appspot.com",
            messagingSenderId: "663904907934",
              appId: "1:663904907934:web:8b4576f4e95cb6593a018f"
              };

              const app = initializeApp(firebaseConfig);

              export default app;
