import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: SIZES.medium,
    backgroundColor: COLORS.white,
  },
  flagContainer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: SIZES.xxSmall - 2,
    borderColor: COLORS.blue,
    borderRadius: SIZES.xSmall,
    overflow: "hidden",
  },
  flagImage: {
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    justifyContent: "flex-start",
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  titleText: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.blue,
  },
  popContainer: {
    alignItems: "flex-start",
    marginTop: SIZES.xxSmall - 2,
  },
  popText: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.red,
  },
  detailsContainer: {
    alignItems: "flex-start",
    marginVertical: SIZES.large,
  },
  detailsText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#000",
    letterSpacing: 1,
    textAlign: "justify",
  },
  logoWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: SIZES.small,
  },
  logoContainer: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "90%",
    height: "90%",
  },
  logoText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.red,
    textAlign: "center",
  },
  mapWrapper: {
    width: "100%",
    height: 550,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mapTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.blue,
    marginTop: -SIZES.large,
    marginBottom: SIZES.medium,
  },
  mapContainer: {
    width: "100%",
    height: 500,
    borderRadius: SIZES.small,
    borderWidth: SIZES.xxSmall - 3,
    borderColor: COLORS.blue,
    overflow: "hidden",
  },
  mapWidget: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
