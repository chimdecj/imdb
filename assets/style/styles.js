import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#dbe4ef",
  },
  LRMargin: {
    marginHorizontal: 15,
  },
  TMargin: {
    marginTop: 14,
  },
  middleTitle: { fontFamily: "GroldSlim", fontSize: 28, fontWeight: "700", color: "#364256" },
  gradientTitle: { fontFamily: "GroldSlim", fontSize: 28, fontWeight: "700", color: "#364256" },
  cardBody: {
    width: 400,
    height: 220,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 25,
    marginBottom: 20,
  },
  cardMovieDate: {
    fontFamily: "Grold",
    fontSize: 12,
    color: "#cdcdcd",
  },
  cardMovieTitle: {
    fontFamily: "GroldSlim",
    textTransform: "uppercase",
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
  },
  categoryTags: { flexDirection: "row", marginTop: 5, marginLeft: 15 },
  categoryTagsText: { fontFamily: "Grold", fontSize: 16, fontWeight: "400", color: "#9ca9bc", marginRight: 20, marginTop: 5 },
  activeText: { color: "#354467" },
  posterBody: {
    width: 100,
    marginLeft: 15,
    marginRight: 5,
  },
  posterImage: {
    width: 100,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 30,
  },
  posterMovieTitle: { fontFamily: "GroldSlim", fontSize: 20, marginTop: 5, fontWeight: "700", color: "#364256" },
  posterMovieCategory: { fontFamily: "Grold-light", fontSize: 14, marginTop: 5, fontWeight: "200", color: "#364256" },
  textBasedCard: {
    borderRadius: 20,
    margin: 15,
    padding: 15,
    height: 120,
    width: 200,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  awardTitle: {
    fontFamily: "GroldSlim",
    fontSize: 20,
    fontWeight: "600",
    color: "#6a7792",
  },
  awardDesc: {
    height: 70,
    fontFamily: "Grold",
    fontSize: 14,
    color: "#757d8e",
    marginTop: 5,
  },
  movieInfoPosterImage: {
    width: "100%",
    height: 500,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  movieInfoTitle: {
    fontFamily: "GroldSlim",
    fontSize: 30,
    color: "#364256",
    fontWeight: "500",
  },
  movieInfoMutedText: {
    fontFamily: "Grold",
    fontSize: 18,
    color: "#9eabbe",
    fontWeight: "500",
  },
  movieInfoDesc: {
    fontFamily: "Grold-light",
    fontSize: 18,
    color: "#3f506d",
  },
});
