import { StackActions } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Button, Text, ImageBackground, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DropShadow from "react-native-drop-shadow";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import infoScreen from "../InfoScreen";
import styles from "../../assets/style/styles";

const movieCategory = [
  {
    id: "0",
    title: "All",
    active: true,
  },
  {
    id: "1",
    title: "Action",
  },
  {
    id: "2",
    title: "Drama",
  },
  {
    id: "3",
    title: "Comedy",
  },
];
const movies = [
  { id: "0", title: "Joker", rate: "9,8", category: "Action,drama,triller", imgLink: "https://img.fruugo.com/product/9/75/101193759_max.jpg" },
  { id: "1", title: "The Irishman", rate: "8,1", category: "action,drama,triller,serial", imgLink: "https://i.pinimg.com/originals/94/75/47/9475470af1684423d06edef32442ad02.jpg" },
  { id: "2", title: "Dunkirk", rate: "6,8", category: "action,drama,triller,serial", imgLink: "https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" },
  { id: "3", title: "Sonic the hedgehog", rate: "7,3", category: "action,drama,triller,serial", imgLink: "https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" },
];

const Stack = createStackNavigator();

const renderCats = ({ item }) => <Text style={[styles.categoryTagsText, item.active ? styles.activeText : ""]}>{item.title}</Text>;

function HeaderCard(props, navigation) {
  return (
    <DropShadow
      style={{
        shadowColor: "#404f70",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 20,
      }}
    >
      <ImageBackground source={{ uri: props.imgLink }} style={[styles.cardBody, styles.LRMargin, styles.TMargin]}>
        <Text style={styles.cardMovieDate}>{props.date}</Text>
        <Text style={styles.cardMovieTitle}>{props.title}</Text>
      </ImageBackground>
    </DropShadow>
  );
}
function MovieCard(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("MovieInfo", { props })}>
      <View style={[styles.posterBody, styles.TMargin]}>
        <DropShadow
          style={{
            shadowColor: "#404f70",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 20,
          }}
        >
          <ImageBackground source={{ uri: props.imgLink }} style={styles.posterImage}>
            <Text style={{ position: "absolute", top: 10, left: 10, color: "#fff", fontFamily: "Grold-medium" }}>{props.rate}</Text>
          </ImageBackground>
        </DropShadow>
        <Text style={styles.posterMovieTitle}>{props.title}</Text>
        <Text style={styles.posterMovieCategory}>{props.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

function Awards(props) {
  return (
    <View style={[styles.textBasedCard]}>
      <LinearGradient
        colors={["#d4deec", "#f6f8fb"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 120,
          borderRadius: 20,
        }}
      />
      <Text style={styles.awardTitle}>{props.title}</Text>
      <Text style={styles.awardDesc}>{props.desc}</Text>
    </View>
  );
}

function homeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={[styles.gradientTitle, styles.LRMargin]}>Coming Soon</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HeaderCard
            navigation={props.navigation}
            title="Sonic The Hedgehog"
            date="14 Feb 2020"
            imgLink="https://static01.nyt.com/images/2020/02/16/arts/16Box/16Box-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          />
          <HeaderCard
            navigation={props.navigation}
            title="Sonic the hedgehog"
            date="06 Dec 2020"
            imgLink="https://3qbqmv3k0dsayahrd3pw8jru-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Adventure_Time_Season_7_Episode_226-Still-e1559702130516.jpg"
          />
        </ScrollView>
        <Text style={[styles.middleTitle, styles.LRMargin]}>Movies</Text>
        <FlatList showsHorizontalScrollIndicator={false} horizontal={true} vertical={false} contentContainerStyle={styles.categoryTags} data={movieCategory} renderItem={renderCats} />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MovieCard {...props} title="Joker" rate="9,8" category="Action,drama,triller" imgLink="https://img.fruugo.com/product/9/75/101193759_max.jpg" />
          <MovieCard {...props} title="The Irishman" rate="8,1" category="action,drama,triller,serial" imgLink="https://i.pinimg.com/originals/94/75/47/9475470af1684423d06edef32442ad02.jpg" />
          <MovieCard {...props} title="Dunkirk" rate="6,8" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
          <MovieCard {...props} title="Sonic the hedgehog" rate="7,3" category="action,drama,triller,serial" imgLink="https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg" />
        </ScrollView>
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          vertical={false}
          data={movies}
          renderItem={(item, props) => <MovieCard {...props} {...item} />}
          keyExtractor={(item) => item.title}
        /> */}
        <Text style={[styles.middleTitle, styles.LRMargin]}>Awards & Events</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Awards title="Oscars" desc="The Academy Awards, popularly known as the Oscars,[1] are awards for artistic and technical merit in the film industry. " />
          <Awards title="Emmy awards" desc="David Fincher, whose latest film “Mank” is set" />
          <Awards title="Khan's movie" desc="It is regarded as the most famous and prestigious awards in the entertainment industry." />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default function homeStack(props) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={homeScreen}
        options={({ navigation }) => ({
          headerLeft: ({}) => <FontAwesome style={{ marginLeft: 15 }} name="navicon" size={24} color="#364256" onPress={() => props.navigation.toggleDrawer()} />,
          headerRight: ({ goBack }) => <FontAwesome style={{ marginRight: 15 }} name="search" size={24} color="#364256" />,
          title: "FILMS",
          headerStyle: {
            backgroundColor: "#dbe4ef",
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: "#364256",
          headerTitleStyle: {
            fontFamily: "Grold-bold-italic",
            fontSize: 30,
          },
        })}
      />
      <Stack.Screen
        name="MovieInfo"
        component={infoScreen}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
