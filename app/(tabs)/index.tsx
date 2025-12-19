// import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Link
        href="/login"
        style={{
          width: 90,
          height: 30,
          backgroundColor: "coral",
          borderRadius: 8,
          textAlign: "center",
          justifyContent: "center",
          lineHeight: 30, 
        }}
      >
        {" "}
        Login Page
      </Link> */}
    </View>
  );
}
