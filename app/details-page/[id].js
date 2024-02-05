import {
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { HeaderButton, InfoPage } from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useData from "../../hooks/useData";

const DetailsPage = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error } = useData(params.id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            <HeaderButton
              icon={icons.backOutlined}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <HeaderButton icon={icons.shareOutlined} dimension="60%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.red} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <InfoPage data={data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsPage;
