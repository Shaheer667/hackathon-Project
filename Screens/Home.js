
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const [images, setimages] = useState([
    require('../Screens/images/Rectangle7.png'),
    require('../Screens/images/Rectangle1.png'),
    require('../Screens/images/Rectangle7.png'),
    require('../Screens/images/Rectangle1.png')
  ]);
  const navigation = useNavigation();


  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
          <View>
            <Text style={{ color: "#61B846", fontSize: 15, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
            <Text style={{ color: "#024F9D", fontSize: 10, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
          </View>
          <View>
            <Icon name="shoppingcart" size={30} color="grey" />
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingTop: 15 }}>
          <Image
            style={{ width: 330, borderRadius: 20 }}
            source={require('../Screens/images/Grocery.png')}
          />
        </View>
        <View>
          <Text style={{ color: "black", paddingTop: 10 }}>Shop By Category</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  margin: 8,
                }}
              />
            )}
          />
        </View>

        <View>
          <View style={{ flexDirection: 'row', paddingTop: 30 }}>
            <Image
              source={require('../Screens/images/Rectangle17.png')}
            />
            <View>
              <Text style={{ color: 'black' }}>Meat</Text>
              <Text style={{ color: 'grey' }}>This is product description</Text>
              <Text style={{ color: 'grey' }}>This is product description</Text>
            </View>
            <View>
              <Text style={{ color: 'black' }}>Rs:800 Per KG</Text>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <Text style={{ backgroundColor: "#61B846", width: '100%', padding: 5, borderRadius: 10, fontSize: 30, textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: -170, width: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text onPress={() => navigation.navigate('Home')} style={{ color: "black" }}><Icon name="home" size={30} color="grey" /> </Text>
          <Text onPress={() => navigation.navigate('Cart')} style={{ color: "black" }}><Icon name="shoppingcart" size={30} color="grey" /> </Text>
          <Text onPress={() => navigation.navigate('User')} style={{ color: "black" }}><Icon name="user" size={30} color="grey" /> </Text>
        </View>
      </View>

    </View>
  )
}

export default Home