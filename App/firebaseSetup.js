import {initializeApp, getApp} from '@react-native-firebase/app';
import firebaseConfig from './firebaseConfig';

const initializeFirebase = () => {
  return new Promise((resolve, reject) => {
    try {
      const existingApp = getApp();
      if (existingApp) {
        resolve(existingApp);
      } else {
        const firebaseApp = initializeApp(firebaseConfig);
        resolve(firebaseApp);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default initializeFirebase;
