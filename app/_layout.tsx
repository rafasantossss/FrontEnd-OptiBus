import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme() || "light";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="registro" options={{ title: "Cadastro de Usuário" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
      </Stack>
      {/* ⚠️ AQUI ESTAVA O ERRO ⚠️ */}
      {/* O estilo da StatusBar agora se ajusta à cor do tema: se for 'dark', a barra fica 'light' (texto branco), e vice-versa. */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} /> 
    </ThemeProvider>
  );
}