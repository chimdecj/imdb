import { StackActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Button, Text, ImageBackground, SafeAreaView, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DropShadow from "react-native-drop-shadow";
import InfoScreen from "../InfoScreen";

const Stack = createStackNavigator();

function HeaderCard(props) {
  return (
    <DropShadow
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      }}
    >
      <ImageBackground source={{ uri: props.imgLink }} style={styles.cardBody}>
        <Text style={styles.cardMovieDate}>{props.date}</Text>
        <Text style={styles.cardMovieTitle}>{props.title}</Text>
      </ImageBackground>
    </DropShadow>
  );
}
function MovieCard(props) {
  return (
    <View style={styles.posterBody}>
      <DropShadow
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Image source={{ uri: props.imgLink }} style={styles.posterImage} />
      </DropShadow>
      <Text style={styles.posterMovieTitle}>{props.title}</Text>
      <Text style={styles.posterMovieCategory}>{props.category}</Text>
    </View>
  );
}

function homeScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.gradientTitle}>Coming Soon</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HeaderCard
            title="Sonic the hedgehog"
            date="action,drama,triller,serial"
            imgLink="https://static01.nyt.com/images/2020/02/16/arts/16Box/16Box-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          />
          <HeaderCard
            title="Sonic the hedgehog"
            date="action,drama,triller,serial"
            imgLink="https://3qbqmv3k0dsayahrd3pw8jru-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Adventure_Time_Season_7_Episode_226-Still-e1559702130516.jpg"
          />
        </ScrollView>
        <Text style={styles.middleTitle}>Movies</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: "row" }}>
          <Text style={styles.categoryTags}>All</Text>
          <Text style={styles.categoryTags}>Action</Text>
          <Text style={styles.categoryTags}>Comedy</Text>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MovieCard title="Joker" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
          <MovieCard title="IT 4" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
          <MovieCard title="Avangers" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
          <MovieCard title="Sonic the hedgehog" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
        </ScrollView>
        <Button
          title="INFO"
          onPress={() => {
            props.navigation.navigate("Info");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default function homeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home1">
      <Stack.Screen
        name="Home1"
        component={homeScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#e1eafc",
    // padding: 10,
  },
  cardBody: {
    width: 400,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 30,
  },
  cardMovieDate: {
    fontSize: 12,
    color: "#cdcdcd",
  },
  cardMovieTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
  },
  posterBody: {
    width: 100,
    marginRight: 20,
  },
  posterImage: {
    width: 100,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  categoryTags: { marginTop: 5, marginRight: 15, fontSize: 14, fontWeight: "200", color: "#364256" },
  posterMovieTitle: { marginTop: 5, fontSize: 16, fontWeight: "700", color: "#364256" },
  posterMovieCategory: { marginTop: 5, fontSize: 12, fontWeight: "200", color: "#364256" },
  middleTitle: { fontSize: 22, fontWeight: "700", color: "#364256" },
  gradientTitle: { fontSize: 22, fontWeight: "700", color: "#364256", marginBottom: 10 },
});
