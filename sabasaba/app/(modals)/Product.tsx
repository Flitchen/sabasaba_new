import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  Linking,
} from 'react-native';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
// import picha from '../assets/images/list.png';
import Explore from '../(tabs)/Explore';
import FeedbackCard from '../../components/CustomerFeedback';
import {useApp} from '../../contexto/AppProvider';
import {useRoute} from '@react-navigation/native';
import {useProduct} from '../../contexto/ProductProvider';
import {useFocusEffect} from '@react-navigation/native';
// import VideoCall from './Chat/VideoCall';

const FullWidthButton = ({buttonText, onPress}) => {
  const handlePress = () => {
    onPress(); // Call the provided onPress function
  };

  return (
    <View style={styles5.container}>
      <TouchableOpacity style={styles5.button} onPress={handlePress}>
        <Text style={styles5.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles5 = StyleSheet.create({
  container: {
    width: '96%',
    marginHorizontal: '2%',
  },
  button: {
    backgroundColor: '#045286',
    borderRadius: 10,
    paddingVertical: 15,
    padding: 10,
    marginVertical: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

const SavingTipsList = () => {
  const savingTips = [
    {id: 1, tip: " Don't pay in advance, including for delivery"},
    {id: 2, tip: 'Meet the seller at a safe public place'},
    {
      id: 3,
      tip: 'On delivery, check that the item delivered is what you ordered ',
    },
    {id: 4, tip: "Only pay when you're satisfied"},
  ];

  return (
    <View style={styles2.container}>
      <Text
        style={{
            fontWeight: 'bold',
            lineHeight: 20,
            textTransform: 'uppercase',
            color: '#657786',
            fontSize: 18,
            textAlign: 'center',}
        }>
        Safety tips:
      </Text>
      <View style={styles2.card}>
        {savingTips.map(tip => (
          <View key={tip.id} style={styles2.tipItem}>
            <Text
            style={{color:"grey"}}> - {tip.tip}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Carousel = ({data}) => {
  const carouselRef = useRef();
  const renderItem = ({item}) => (
    <View style={styles1.item}>
      {/* <Image */}
      {/* source={require(../assets/images/toto.png')} */}
      {/* style={styles1.image} */}
      {/* /> */}
      <Image
        source={{uri: `${item['url']}`}}
        style={styles1.image}
      />
    </View>
  );

  return (
    <View style={styles1.container}>
      <FlatList
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        snapToInterval={Dimensions.get('window').width}
        snapToAlignment="center"
      />
    </View>
  );
};

const ContactVendorButton = () => {
  return (
    <TouchableOpacity style={styles3.buttonContainer}>
      {/* <Image
        source={require('./path_to_your_svg_file.svg')}
        style={styles3.icon}
      /> */}
      <Text style={styles3.buttonText}>Contact the Vendor</Text>
    </TouchableOpacity>
  );
};

const ProductPage = (props:any) => {
  const route: any = useRoute();
  const SERVER_URL: String = 'http://api.7saba.com/';
  const [is_loading, set_is_loading] = useState(0);
  const [id, set_id] = useState(null);
  const [selected_product, set_selected_product] = useState({});
  const [product_information, set_product_information] = useState({});
  const [random_number, set_random_number] = useState(0.0);
  const product_link = 'http://api.7saba.com/products_details/';
  const [show_chat_options, setshow_chat_options] = useState(false);
  var phoneNumber: string = '+255746297197';
  const {show_more} = useProduct()
  const [productImages, set_productImages] = useState([]);

  const openChat = () => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.canOpenURL(url)
      .then(supported => {
        return Linking.openURL(url);
      })
      .catch(err => console.error('An error occurred', err));
  };

  const openSMS = () => {
    const url = `sms:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then(() => {
        return Linking.openURL(url);
      })
      .catch(err => console.error('An error occurred', err));
  };

  const openTel = () => {
    const url = `tel:${phoneNumber}`;
    props.navigation.navigate("VideoCall",{username:product_information.author})
  };

  const vendors = [
    {
      id: 1,
      name: 'Vendor 1',
      contact: '123-456-7890',
      social: 'tel://user?username=vendor1',
    },
    {
      id: 2,
      name: 'Vendor 2',
      contact: '987-654-3210',
      social: 'instagram://user?username=vendor2',
    },
  ];
  
  const TopRightCard = () => {
    return (
      <View style={styles2.container}>
        <View style={styles2.card}>
          <Text style={styles2.item}>
          💬 Share</Text>
          <View style={styles2.separator} />
          <Text style={styles2.item}>❤️ Favourite</Text>
          <View style={styles2.separator} />
          <Text style={styles2.item}>❌ Hide</Text>
          <View style={styles2.separator} />
          <Text style={styles2.item}>🚩 Report</Text>
          <View style={styles2.separator} />
          <Text style={styles2.item}>🛑 Block this User</Text>
        </View>
      </View>
    );
  };
  
  const styles2 = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 1, // Adjust top position as needed
      right: 10, // Adjust left position as needed
      zIndex: 1, 
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'column', // Change flexDirection to 'column'
    },
    item: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5, // Add marginBottom to create spacing between items
      color:"black"
    },
    separator: {
      height: 1, // Change height to 1 to create horizontal line
      width: '100%', // Change width to '100%' to span the entire width
      backgroundColor: '#ccc',
      marginVertical: 5, // Add marginVertical to create spacing between separators
    },
  });
  
  function ContactTheVendor() {
    return (
      <>
        <View style={{margin: 10}}>
          <View style={{margin: 10}}>
            {/* {renderVendorButtons()} */}
            <TouchableOpacity
              onPress={openChat}
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginVertical: 2,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Chat with Vendor on WhatsApp
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openSMS}
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginVertical: 2,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Chat with Vendor on Messages
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openTel}
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginVertical: 2,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Call the Vendor In the app
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  const handleButton1Press = () => {
    openTel();
  };

  const handleButton2Press = () => {
    // Write a function for redirectting the user to the vendors profile
    Alert.alert('Comming Soon ...');
  };
  const {author, set_author} = useProduct();
  async function load_my_details() {
    if (route.params.id) {
      var link = `${product_link}${route.params.id}`;

      set_is_loading(true);

      const response = await fetch(link);

      let data = await response.json();
      console.log('Called the server and requesting for', route.params.id);
      set_product_information(data);
      const new_object: Array<any> = [];
      data.images.forEach((element: Product, index: number) => {
        new_object.push({id: index, url: `http://server.7saba.com/${element.fields.file}`});

      });
      set_productImages(new_object);
      set_author(data.author);
      console.log(151, productImages, new_object);
      set_id(null);
      return;
    } else {
      Alert.alert('Somethiogn went terribly wrong');
    }
  }
  React.useEffect(() => {
    set_product_information({});
    if (route.params.id) load_my_details();
    set_is_loading(0);
    setTimeout(() => {
      console.log(' Before logging ');
      load_my_details();
      console.log('loged ');
    }, 50);
    return () => {
      // Cleanup function to clear state when component unmounts
      set_is_loading(0);
      set_id(null);
      set_selected_product({});
      set_product_information({});
      set_random_number(0);
      set_productImages([]);
    };
  }, []);
  return (
    <>
      {!is_loading ? (
        <View>
          <Text>Loading ...</Text>
        </View>
      ) : (
        <ScrollView style={{marginBottom: 60, backgroundColor: '#efefef'}}>
            {show_more?
            <TopRightCard />:<></>
        }
          <View>
            {/* Product Images Carousel */}
            <Carousel data={productImages} />
            {/* <ScrollView horizontal>
        {productImages.map(image => (
          <Image
            key={image.id}
            source={{uri: `https://server.7saba.com/images/${item['url']}`}}
            source={productImages}
            style={{width: 100, height: 100}}
          />
        ))}
      </ScrollView> */}

            {/* List of Vertical Images */}
            {/* <ScrollView>
        {productImages.map(image => (
          <Image key={image.id} source={require(../assets/images/mrembo.png')} style={{ width: 100, height: 100 }} />
        ))}
      </ScrollView> */}

            {/* Product Details Card */}
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#fff',
                padding: 10,
                margin: 10,
                marginTop: -18,
              }}>
              <Text
                style={{
                  borderRadius: 10,
                  color: 'black',
                  fontSize: 19,
                  fontWeight: '800',
                }}>
                {product_information?.title}
              </Text>
              <Text
                style={{
                  borderRadius: 10,
                  color: 'darkcyan',
                  fontSize: 19,
                  fontWeight: '900',
                }}>
                Tsz {product_information?.price}
              </Text>
              <Text
                style={{
                  borderRadius: 10,
                  color: 'black',
                }}>
                Description:
                <Text
                  style={{
                    marginTop: -50,
                    marginRight: 10,
                    borderRadius: 10,
                    color: 'black',
                    fontSize: 13,
                    fontWeight: '700',
                  }}>
                  {product_information?.description}
                </Text>
              </Text>

              {/* <Text>Posted: 1 Day ago.</Text> */}
              <View style={styles4.container}>
                <TouchableOpacity
                  onPress={handleButton1Press}
                  style={[styles4.button, styles4.button1]}>
                  <Text style={styles4.buttonText}>Call the vendor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButton2Press}
                  style={[styles4.button, styles4.button2]}>
                  <Text style={styles4.buttonText}>
                    View vendor's Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles3.buttonContainer}
              onPress={() => {
                setshow_chat_options(!show_chat_options);
              }}>
              <Text style={styles.buttonText}>Contact the Vendor</Text>
            </TouchableOpacity>
            {/* Vendors Details */}
            {show_chat_options ? <ContactTheVendor /> : <></>}
          </View>
          {product_information.author ? (
            <FeedbackCard username={product_information.author} />
          ) : (
            ''
          )}
          <FullWidthButton
            buttonText="Register a similar Product"
            onPress={() => props.navigation.navigate('PublishAProduct',{
                  selectedCategory:product_information.selectedCategory,
                  description:product_information.description,
                  productName:product_information.productName,
            })}
          />
          <SavingTipsList />
          <View>
            <Text style={styles.heading}>Similar Products</Text>
          </View>
          <Explore />
        </ScrollView>
      )}
    </>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: Dimensions.get('window').width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipItem: {
    marginBottom: 10,
  },
});

const styles3 = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: '4%',
    backgroundColor: '#045286',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '92%',
    marginBottom: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

const styles4 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 8,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  button1: {
    backgroundColor: '#045286',
  },
  button2: {
    backgroundColor: 'darkgreen',
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    
  },
});
