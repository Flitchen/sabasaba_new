// import React, { PureComponent } from 'react';
// import {
//   StatusBar,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList
// } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements';

// class New_product extends PureComponent {

//   constructor(props){
//     super(props);
//     this.state = {
//       data: []
//     }
//   }


//   fetchItem() {
//       requestAnimationFrame(() =>
//         fetch(`https://catfact.ninja/breeds`, {
//           method: 'GET',
//         })
//           .then(response => response.json())
//           .then(responseJson => {
//             this.setState({data: responseJson.data})
//              console.warn(responseJson);
//           })
//           .catch(error => {
//             {
//               alert(error)
//             }
//           }),
//       );
//   }


//   renderCats = ({item}) => (
//     <View style={{marginTop: 0}}>
//     <ListItem bottomDivider containerStyle={{ backgroundColor: '#fbb03c' }}>
//     <Avatar rounded large source={{uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'}} height={36} width={36} />
//      <ListItem.Content>
//        <ListItem.Title style={{color:'black', fontSize: 18}}>{item.breed.toUpperCase()}</ListItem.Title>
//        <ListItem.Subtitle style={{color: 'black'}}>{item.country}</ListItem.Subtitle>
//      </ListItem.Content>
//    </ListItem>
//     </View>
//   );


//   componentDidMount(){
//     this.fetchItem()
//   }

//   render(){
//     return(
//       <SafeAreaView style={{ flex: 1, backgroundColor: '#fbb03c' }}>
//       <FlatList
//         removeClippedSubviews={true}
//         data={this.state.data}
//         renderItem={item => this.renderCats(item)}
//       />
//     </SafeAreaView>
//       )
//   }
// }

// export default New_product;
