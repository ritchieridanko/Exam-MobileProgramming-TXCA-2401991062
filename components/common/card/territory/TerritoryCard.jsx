import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./territorycard.style";
import { flags, seals } from "../../../../constants";
import { standardizeSlug } from "../../../../utils/standardizeSlug";

const TerritoryCard = ({ state, selectedState, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container(state["ID State"], selectedState)}
      onPress={handleNavigate}
    >
      <View style={styles.flagContainer(state["ID State"], selectedState)}>
        <Image
          source={flags[standardizeSlug(state["Slug State"])]}
          resizeMode="stretch"
          style={styles.flagImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={seals[standardizeSlug(state["Slug State"])]}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.stateName(state["ID State"], selectedState)}>
            {state.State}
          </Text>

          <Text style={styles.statePops(state["ID State"], selectedState)}>
            Population:{" "}
            {state.Population.toLocaleString("en-US", { style: "decimal" })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TerritoryCard;
