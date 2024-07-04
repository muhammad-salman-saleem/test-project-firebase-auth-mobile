// import React, {useState} from 'react';
// import {View, TextInput, Button, Alert} from 'react-native';
// import {firebase} from '@react-native-firebase/auth';
// import generateToken from './generateToken';

// const MobileAuthComponent = () => {
//   const [mobileNumber, setMobileNumber] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const token = await generateToken(mobileNumber);

//       await firebase.auth().signInWithCustomToken(token);
//       Alert.alert('Success', 'User signed in successfully');
//     } catch (error) {
//       console.error('Error signing in:', error);
//       Alert.alert('Error', 'Failed to sign in');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Enter mobile number"
//         onChangeText={text => setMobileNumber(text)}
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//     </View>
//   );
// };

// export default MobileAuthComponent;
// MobileAuthComponent.js

import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const MobileAuthComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [token, setToken] = useState('');
  // User ko sign in karne ke liye phone number send karna
  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      // Add the country code to the phone number
      const fullPhoneNumber = `+92${phoneNumber}`;

      const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log('Error signing in with phone number:', error);
    }
  };

  // OTP ko verify karna
  const confirmCode = async () => {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        // User verified
        // JWT token generate karna
        const jwtToken = await auth().currentUser.getIdToken(true);
        setToken(jwtToken);
      }
      // Clear confirmation after confirming the code
      confirm.clear();
    } catch (error) {
      console.log('Invalid code:', error);
    }
  };

  return (
    <View style={{margin: 20}}>
      {!confirm ? (
        <>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone number"
            keyboardType="phone-pad"
            style={{marginVertical: 10, padding: 10, borderWidth: 1}}
          />
          <Button
            title="Send OTP"
            onPress={() => signInWithPhoneNumber(phoneNumber)}
          />
        </>
      ) : (
        <>
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Confirmation code"
            keyboardType="number-pad"
            style={{marginVertical: 10, padding: 10, borderWidth: 1}}
          />
          <Button title="Confirm OTP" onPress={confirmCode} />
        </>
      )}
      {token ? <Text style={{marginVertical: 10}}>Token: {token}</Text> : null}
    </View>
  );
};

export default MobileAuthComponent;
