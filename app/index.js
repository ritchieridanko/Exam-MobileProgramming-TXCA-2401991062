import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack } from "expo-router";

import { COLORS, SIZES } from "../constants";
import { US_Territories, US_States } from "../components";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.blue, flexDirection: "row" },
          headerShadowVisible: false,
          headerTitle: "Americapedia",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: SIZES.large },
          headerTintColor: COLORS.white,
          headerLeft: () => (
            <Text style={{ fontSize: SIZES.large, color: COLORS.white }}>
              ★ ★ ★
            </Text>
          ),
          headerRight: () => (
            <Text style={{ fontSize: SIZES.large, color: COLORS.white }}>
              ★ ★ ★
            </Text>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            padding: SIZES.medium,
          }}
        >
          <US_Territories />
          <US_States />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
