import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import styles from "./Styles/DrawerButtonStyles";

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")} style={styles.buttonStyle}>
    <Icon name="menu" style={{}} />
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;
