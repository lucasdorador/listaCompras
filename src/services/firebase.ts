import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const config = {
  apiKey: 'AIzaSyBmJmal5tLG0EV1WR0amYWuvv4x7SKHzq4',
  authDomain: 'listacompras-c946d.firebaseapp.com',
  databaseURL: 'https://listacompras-c946d-default-rtdb.firebaseio.com/',
  projectId: 'listacompras-c946d',
  storageBucket: 'listacompras-c946d.appspot.com',
  appId: '1:164120988076:android:eed67121be1527ae561209',
};

const dbFirebase = async () => {
  let app = undefined;

  if (!firebase.apps.length) {
    app = await firebase.initializeApp(config);
  } else {
    app = firebase.app();
  }

  return database(app);
};

export default dbFirebase;
