// import React, { useEffect, useState } from "react";
// import { View, Text, ActivityIndicator, Alert, StyleSheet } from "react-native";
// import * as LocalAuthentication from "expo-local-authentication";

// const BiometricAuth = ({
//   onAuthenticated,
// }: {
//   onAuthenticated: () => void;
// }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const authenticate = async () => {
//       try {
//         // Check if biometric authentication is supported
//         const hasHardware = await LocalAuthentication.hasHardwareAsync();
//         if (!hasHardware) {
//           Alert.alert("Error", "Biometric authentication not supported.");
//           setLoading(false);
//           return;
//         }

//         const isEnrolled = await LocalAuthentication.isEnrolledAsync();
//         if (!isEnrolled) {
//           Alert.alert("Error", "No biometrics are enrolled on this device.");
//           setLoading(false);
//           return;
//         }

//         const result = await LocalAuthentication.authenticateAsync({
//           promptMessage: "Authenticate",
//           fallbackLabel: "Use Passcode",
//         });

//         if (result.success) {
//           onAuthenticated();
//         } else {
//           Alert.alert("Error", "Authentication failed.");
//         }
//       } catch (error) {
//         Alert.alert("Error", `Biometric authentication failed`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     authenticate();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Text style={styles.text}>Authentication Required</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });

// export default BiometricAuth;
