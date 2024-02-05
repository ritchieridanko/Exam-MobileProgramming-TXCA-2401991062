import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xxSmall,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.blue,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.red,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
