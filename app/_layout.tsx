// // import {
// //   DarkTheme,
// //   DefaultTheme,
// //   ThemeProvider,
// // } from "@react-navigation/native";
// // import { useFonts } from "expo-font";
// // import { Stack } from "expo-router";
// // import * as SplashScreen from "expo-splash-screen";
// // import { useEffect } from "react";
// // import { ThirdwebProvider } from "thirdweb/react";

// // import { useColorScheme } from "@/hooks/useColorScheme";

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // export default function RootLayout() {
// //   const colorScheme = useColorScheme();
// //   const [loaded] = useFonts({
// //     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
// //   });

// //   useEffect(() => {
// //     if (loaded) {
// //       SplashScreen.hideAsync();
// //     }
// //   }, [loaded]);

// //   if (!loaded) {
// //     return null;
// //   }

// //   return (
// //     <ThirdwebProvider>
// //       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
// //         <Stack>
// //           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// //           <Stack.Screen name="+not-found" />
// //         </Stack>
// //       </ThemeProvider>
// //     </ThirdwebProvider>
// //   );
// // }

// // app/_layout.tsx
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }

// app/_layout.tsx
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }

// // app/_layout.tsx
// import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import { ThirdwebProvider, ChainId } from "thirdweb/react"; // Importing ThirdwebProvider

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThirdwebProvider ={ChainId.Mainnet}> {/* Wrap your application */}
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="index" options={{ headerShown: false }} />
//           <Stack.Screen name="+not-found" />
//         </Stack>
//       </ThemeProvider>
//     </ThirdwebProvider>
//   );
// }

import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ThirdwebProvider } from "thirdweb/react";
// import * as LocalAuthentication from "expo-local-authentication";
// import BiometricAuth from "./components/BiometricAuth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // useEffect(() => {
  //   async function checkBiometrics() {
  //     const compatible = await LocalAuthentication.hasHardwareAsync();
  //     const supportedTypes =
  //       await LocalAuthentication.supportedAuthenticationTypesAsync();

  //     if (compatible && supportedTypes.length > 0) {
  //       const { success } = await LocalAuthentication.authenticateAsync({
  //         promptMessage: "Authenticate with Face ID",
  //         fallbackLabel: "Use Passcode",
  //       });
  //       setIsAuthenticated(success);
  //     } else {
  //       // If biometrics are not available, proceed without authentication
  //       setIsAuthenticated(true);
  //     }
  //   }

  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //     checkBiometrics();
  //   }
  // }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const handleAuthentication = () => {
  //   setAuthenticated(true);
  // };

  // if (!authenticated) {
  //   return <BiometricAuth onAuthenticated={handleAuthentication} />;
  // }

  return (
    <ThirdwebProvider>
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
