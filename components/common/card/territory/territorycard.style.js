import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (stateId, selectedState) => ({
    width: 310,
    height: 250,
    backgroundColor: selectedState === stateId ? COLORS.red : COLORS.grey,
    justifyContent: "space-between",
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.xSmall,
    paddingTop: SIZES.xSmall,
  }),
  flagContainer: (stateId, selectedState) => ({
    height: "65%",
    width: "100%",
    borderRadius: SIZES.xSmall,
    overflow: "hidden",
    backgroundColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: selectedState === stateId ? SIZES.xxSmall - 3 : null,
    borderColor: selectedState === stateId ? COLORS.white : null,
  }),
  flagImage: {
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    height: "35%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.small,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "85%",
    height: "85%",
  },
  textContainer: {
    flex: 1,
    marginLeft: SIZES.large,
    marginRight: SIZES.medium,
  },
  stateName: (stateId, selectedState) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: selectedState === stateId ? COLORS.white : COLORS.blue,
  }),
  statePops: (stateId, selectedState) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.light,
    color: selectedState === stateId ? COLORS.white : COLORS.blue,
    marginTop: 3,
  }),
});

export default styles;
