import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (stateId, selectedState) => ({
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: selectedState === stateId ? COLORS.red : COLORS.grey,
  }),
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "90%",
    height: "90%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  stateName: (stateId, selectedState) => ({
    fontSize: SIZES.xLarge,
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
