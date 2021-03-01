import React, { useState } from "react";
import { Image, TouchableHighlight, StyleSheet } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { CardItem } from "native-base";

export default function ImagePicker() {
  const [uri, setUri] = useState("");
  const choosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else {
          const uri = response.uri;
          setUri(uri);
        }
      }
    );
  };

  return (
    <CardItem>
      <TouchableHighlight
        style={styles.image_container}
        onPress={() => choosePhoto()}
      >
        <Image
          source={{
            uri:
              uri !== ""
                ? uri
                : "http://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
          }}
          style={styles.image_profile}
        />
      </TouchableHighlight>
    </CardItem>
  );
}

const styles = StyleSheet.create({
  image_container: {
    marginLeft: 8,
    height: 110,
    width: 110,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: "#E7E7E7",
  },
  image_profile: {
    height: 110,
    width: 110,
    borderRadius: 60,
  },
});
