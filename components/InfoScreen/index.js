import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import styles from "../../assets/style/styles";

export default function infoScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Image source={{ uri: props.route.params.props.imgLink }} style={styles.movieInfoPosterImage} />
          <Text style={[styles.LRMargin, styles.movieInfoTitle, styles.TMargin]}>{props.route.params.props.title}</Text>
          <Text style={[styles.LRMargin, styles.movieInfoMutedText]}>{props.route.params.props.category}</Text>
          <Text style={[styles.LRMargin, styles.movieInfoMutedText]}>14+ / 2h 30min</Text>
          <Text style={[styles.LRMargin, styles.middleTitle, styles.TMargin]}>Description</Text>
          <Text style={[styles.LRMargin, styles.movieInfoDesc, styles.TMargin]}>
            This retelling of the old Chinese folktale is about the story of a young Chinese maiden who learns that her weakened and lame father is to be called up into the army in order to fight the
            invading Huns. Knowing that he would never survive the rigours of war in his state, she decides to disguise herself and join in his place. Unknown to her, her ancestors are aware of this
            and to prevent it, they order a tiny disgraced dragon, Mushu to join her in order to force her to abandon her plan. He agrees, but when he meets Mulan, he learns that she cannot be
            dissuaded and so decides to help her in the perilous times ahead.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
