import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./statecard.style";
import { seals } from "../../../../constants";
import { standardizeSlug } from "../../../../utils/standardizeSlug";

const StateCard = ({ state, selectedState, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container(state["ID State"], selectedState)}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={seals[standardizeSlug(state["Slug State"])]}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.stateName(state["ID State"], selectedState)}>
          {state.State}
        </Text>
        <Text style={styles.statePops(state["ID State"], selectedState)}>
          Population:{" "}
          {state.Population.toLocaleString("en-US", { style: "decimal" })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StateCard;
