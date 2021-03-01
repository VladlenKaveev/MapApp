import { Platform, PermissionsAndroid } from "react-native";

import Geolocation from "react-native-geolocation-service";

export async function requestPermissions() {
  if (Platform.OS === "ios") {
    Geolocation.requestAuthorization();
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: "whenInUse",
    });
  }

  if (Platform.OS === "android") {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  }
}
