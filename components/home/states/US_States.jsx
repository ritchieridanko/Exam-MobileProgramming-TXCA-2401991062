import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./us_states.style";
import StateCard from "../../common/card/state/StateCard";
import useFetch from "../../../hooks/useFetch";
import { COLORS } from "../../../constants";

const US_States = () => {
  const router = useRouter();
  const [ascending, setAscending] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedState, setSelectedState] = useState();

  const displayContent = (data, ascending) => {
    if (ascending) {
      data.sort((a, b) => a.State.localeCompare(b.State));
    } else {
      data.sort((a, b) => b.State.localeCompare(a.State));
    }

    return data?.map((state) => (
      <StateCard
        state={state}
        key={`us-state-${state?.["ID State"]}`}
        selectedState={selectedState}
        handleNavigate={() => {
          setSelectedState(state["ID State"]);
          router.push(`/details-page/${state["Slug State"]}`);
        }}
      />
    ));
  };

  const { data, isLoading, error, refetch } = useFetch(1);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      RefreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>List of US States</Text>
          <TouchableOpacity onPress={() => setAscending(!ascending)}>
            <Text style={styles.headerBtn}>
              Order: {ascending ? "Ascending" : "Descending"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.red} />
          ) : error ? (
            <Text>Something went wrong.</Text>
          ) : (
            displayContent(data, ascending)
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default US_States;
