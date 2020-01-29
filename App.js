import React from 'react';
import { StyleSheet, Text, View, ViewComponent, Dimensions, Image, Animated } from 'react-native';


const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

const Users = [
  {id: "1", uri: require('./assets/pic1.jpg')},
  {id: "2", uri: require('./assets/pic2.jpg')},
  {id: "3", uri: require('./assets/pic3.jpg')},
  {id: "4", uri: require('./assets/pic4.jpg')},
  {id: "5", uri: require('./assets/pic5.jpg')},
  {id: "6", uri: require('./assets/pic6.jpg')},
  {id: "7", uri: require('./assets/pic7.jpg')},
]


export default function App() {


  const renderUsers = () => {

    return Users.map((user, index) => {
      return (
        <Animated.View style={{height: SCREEN_HEIGHT - 200, width: SCREEN_WIDTH, padding: 10, position: "absolute"}}>
          <Image 
            style={{flex: 1, height: null, width: null, resizeMode: "cover", borderRadius: 20}}
            source={user.uri}
          />
        </Animated.View>
      )
    })
  }



  return (
    <View style={{flex: 1}}>
      <View style={{height: 100}}>

      </View>  
      <View style={{flex: 1}}>
        {renderUsers()}      
      </View>
      <View style={{height: 100}}>

      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
