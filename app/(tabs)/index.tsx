import { BASE_URL } from "@/constants";
import { useTrackUserFlow } from "@/hooks/useTrackUserFlow";

import { WebView } from "react-native-webview";
import { styles } from "./styles";

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
