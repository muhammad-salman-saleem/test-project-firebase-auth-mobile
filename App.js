import React, {useEffect, useState} from 'react';
import MobileAuthComponent from './App/MobileAuthComponent';
import initializeFirebase from './App/firebaseSetup';

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    const initializeAppAsync = async () => {
      try {
        await initializeFirebase();
        setFirebaseInitialized(true);
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    };

    initializeAppAsync();
  }, []);

  return <>{firebaseInitialized && <MobileAuthComponent />}</>;
};

export default App;
