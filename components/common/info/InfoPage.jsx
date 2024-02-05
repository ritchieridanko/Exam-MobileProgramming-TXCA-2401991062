import React from "react";
import { View, Image, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./infopage.style";
import { SIZES, flags, seals } from "../../../constants";
import { standardizeSlug } from "../../../utils/standardizeSlug";

const InfoPage = ({ data }) => {
  if (!data || !data.first || !data.second) {
    return <Text>Data not available.</Text>;
  }

  return (
    <View style={{ flex: 1, padding: SIZES.medium }}>
      <View style={styles.pageContainer}>
        <View style={styles.flagContainer}>
          <Image
            source={flags[standardizeSlug(data.first["Slug State"])]}
            resizeMode="stretch"
            style={styles.flagImage}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {data.first.State} ({data.second.Postal})
            </Text>
          </View>

          <View style={styles.popContainer}>
            <Text style={styles.popText}>
              Population:{" "}
              {data.first.Population.toLocaleString("en-US", {
                style: "decimal",
              })}
            </Text>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              {"\t\t"}
              {data.second["First Info"]}
            </Text>
          </View>

          <View style={styles.logoWrapper}>
            <View style={styles.logoContainer}>
              <Image
                source={seals[standardizeSlug(data.first["Slug State"])]}
                resizeMode="contain"
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.logoText}>
              {data.first.State === "Puerto Rico" ||
              data.first.State === "District of Columbia"
                ? `Seal of the Federal Territory of ${data.first.State}`
                : `Seal of the State of ${data.first.State}`}
            </Text>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              {"\t\t"}
              {data.second["Second Info"]}
            </Text>
          </View>
        </View>

        <View style={styles.mapWrapper}>
          <Text style={styles.mapTitle}>Map of {data.first.State}</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.mapWidget}
              provider={PROVIDER_GOOGLE}
              showsTraffic={true}
              region={data.second.Coordinates}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoPage;
