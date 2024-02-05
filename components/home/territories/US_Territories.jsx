import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./us_territories.style";
import TerritoryCard from "../../common/card/territory/TerritoryCard";
import useFetch from "../../../hooks/useFetch";
import { COLORS, SIZES } from "../../../constants";

const US_Territories = () => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState();

  const { data, isLoading, error } = useFetch(2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Federal Territories</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.red} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TerritoryCard
                state={item}
                selectedState={selectedState}
                handleNavigate={() => {
                  setSelectedState(item["ID State"]);
                  router.push(`/details-page/${item["Slug State"]}`);
                }}
              />
            )}
            keyExtractor={(item) => item?.["ID State"]}
            contentContainerStyle={{ columnGap: SIZES.xSmall }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default US_Territories;
