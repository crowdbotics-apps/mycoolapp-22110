import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_p0uuNk4.png"
      }}
      style={styles.ImageBackground_1}
    >
      <Button title="menu" onPress={() => alert("Pressed!")} />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/pixilart-drawing_XNy3kJl.png"
        }}
        style={styles.Image_5}
      />
      <Button title="start" onPress={() => alert("Pressed!")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  ImageBackground_1: { color: "#001eff" },
  Button_3: {},
  Image_5: {
    height: 205,
    marginBottom: -3,
    paddingBottom: 13,
    borderColor: "#4900d1"
  },
  Button_10: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
