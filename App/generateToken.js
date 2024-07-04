// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://your-firebase-project-id.firebaseio.com',
// });

// async function generateToken(mobileNumber) {
//   try {
//     const uid = await findUserUidByMobileNumber(mobileNumber);
//     if (uid) {
//       const customToken = await admin.auth().createCustomToken(uid);
//       return customToken;
//     } else {
//       throw new Error('User not found');
//     }
//   } catch (error) {
//     console.error('Error generating token:', error);
//     throw error;
//   }
// }

// async function findUserUidByMobileNumber(mobileNumber) {
//   // Implement logic to find user UID by mobile number in your database
//   // You might use Firestore, Realtime Database, or any other database
// }

// module.exports = generateToken;
