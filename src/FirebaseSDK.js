// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePBx5PlwQI-Sh4IT-MBP6Oiu3wCATZv4",
  authDomain: "groupchat-a74a1.firebaseapp.com",
  projectId: "groupchat-a74a1",
  storageBucket: "groupchat-a74a1.appspot.com",
  messagingSenderId: "823256681708",
  appId: "1:823256681708:web:0422dc78ac16e42446a9c9",
  measurementId: "G-R9ZWRKRH6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 定義欲取得的文件路徑
const documentPath = "/Rooms/Room2/Messages/messages001";

// 取得文件資料
void getDoc(doc(db, documentPath))
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // 取得文件資料
      const data = docSnapshot.data();
      // 取得 text 資料
      const text = data.text;
      console.log("text資料: ", text);
    } else {
      console.log("文件不存在");
    }
  })
  .catch((error) => {
    console.error("取得文件資料時發生錯誤: ", error);
  });
  