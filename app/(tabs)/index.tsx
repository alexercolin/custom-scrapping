import { BASE_URL } from "@/constants";
import { useTrackUserFlow } from "@/hooks/useTrackUserFlow";
import { StyleSheet } from "react-native";

import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const { track } = useTrackUserFlow();

  return (
    <WebView
      style={styles.titleContainer}
      source={{ uri: BASE_URL }}
      onShouldStartLoadWithRequest={track}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 100,
    height: "100%",
    width: "100%",
  },
});
