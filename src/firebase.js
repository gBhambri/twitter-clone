import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDAw8CICdMMdz8me7NynTbSIQyUdl8Gl6U",
    authDomain: "twitter-clone-f1b94.firebaseapp.com",
    databaseURL: "https://twitter-clone-f1b94.firebaseio.com",
    projectId: "twitter-clone-f1b94",
    storageBucket: "twitter-clone-f1b94.appspot.com",
    messagingSenderId: "458598393103",
    appId: "1:458598393103:web:16f4cdbb555aa2bac00a7a",
    measurementId: "G-N92W5S09MQ"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
export default db; 