import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Share,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Link, NativeRouter, useHistory} from 'react-router-native'; // Import useHistory
import {useProduct} from '@/contexto/ProductProvider';
import {useAuth} from '@/contexto/AuthProvider';

// SVG icons
var shareApp;

const moneyIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M12 1L3 5v4.94A5.986 5.986 0 0 0 6 11c1.657 0 3-1.343 3-3s-1.343-3-3-3C7.657 5 5 6.657 5 9.94V11h14v-1.06A5.986 5.986 0 0 0 18 7c1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.037 0-1.963.529-2.5 1.333C16.963 1.529 16.037 1 15 1h-3zM3 13v6h18v-6H3zm16 4H5v-2h14v2z"/>
</svg>
`;

const userIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM12 20c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/>
</svg>
`;

const settingIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M21.983 12.126l-2.048-.107c-.191-.706-.463-1.382-.81-2.022l1.225-1.753-2.105-2.105-1.753 1.225c-.64-.347-1.316-.619-2.022-.81l-.107-2.048-2.63-.438-.438-2.63L10.605 2l-1.753 1.225c-.706-.191-1.382-.463-2.022-.81l-2.048.107c-.347.191-.666.43-.96.707L2 3.407l-.438 2.63L.156 8.537c.29.277.609.516.956.707l2.048.107c.191.706.463 1.382.81 2.022l-1.225 1.753 2.105 2.105 1.753-1.225c.64.347 1.316.619 2.022.81l.107 2.048 2.63.438.438 2.63-1.225 1.753c.347.64.619 1.316.81 2.022l2.048-.107c.191-.706.43-1.382.707-2.022l1.753-1.225 2.105 2.105 1.225-1.753c.64.347 1.316.619 2.022.81l.107 2.048 2.63.438.438-2.63-.107-2.048c.706-.191 1.382-.463 2.022-.81l1.225 1.753 2.105-2.105-1.753-1.225c.347-.64.619-1.316.81-2.022l2.048-.107c.191.706.43 1.382.707 2.022l1.753 1.225-.438 2.63-2.63.438c-.277.29-.516.609-.707.956zM12 15c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
</svg>
`;

const mailIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M21.085 2.077c-1.373-.67-15.448-1.674-17.985-.929-.554.13-.813.692-.415 1.146l3.379 2.632L7.007 8.22l-2.598 1.772 1.49 1.191 3.183-2.422 1.456 2.593 2.202-.867 1.124 1.544 2.248-3.242-6.056-4.675 1.75-.807 8.54 5.93 5.93-8.54.808-.17 1.595 1.92-.322.268 1.076 4.193-.838-1.168-2.513-.036.903-4.157 3.319-1.067-.918-2.493-5.317 1.366-2.86 2.683 1.105 1.994-3.56 5.716-3.12-1.798 4.467-6.103z"/>
</svg>
`;

const problemIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"/>
</svg>
`;

const helpIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 16h2v2h-2zm3.344-5.25c-.375.5-.813.938-1.25 1.25-.125.125-.313.125-.438 0-.438-.25-.875-.563-1.25-.938-.75-.75-1-1.625-1-2.5h2c0 .438.125.875.438 1.313.125.125.313.25.5.313s.375 0 .5-.125c.063-.063.125-.188.125-.313 0-.188-.125-.375-.313-.5zm.906-4.75c-.313.25-.688.5-1.063.813-.625.563-.875 1.188-.875 1.938h2c0-.625.25-1.25.875-1.813.25-.25.5-.5.75-.688.125-.063.25-.125.25-.25 0-.125-.125-.25-.25-.313zm3.594 4.75c-.188.375-.438.75-.688 1.063-.5.563-.938.875-1.5 1.188-.625.375-.938.875-.938 1.563h2c0-.438.125-.875.375-1.25.125-.25.375-.438.625-.563.063-.063.125-.188.125-.313 0-.188-.125-.375-.25-.5zm1.344-4.813c-.188.313-.5.625-.813.938-.563.563-.875.938-1.438 1.313-.563.438-.938.938-.938 1.688h2c0-.438.125-.875.375-1.313.25-.25.563-.563.75-.813.125-.125.313-.125.438 0 .063.063.063.188.063.25 0-.063.063-.125.063-.188z"/>
</svg>
`;

const termsIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M21.085 2.077c-1.373-.67-15.448-1.674-17.985-.929-.554.13-.813.692-.415 1.146l3.379 2.632L7.007 8.22l-2.598 1.772 1.49 1.191 3.183-2.422 1.456 2.593 2.202-.867 1.124 1.544 2.248-3.242-6.056-4.675 1.75-.807 8.54 5.93 5.93-8.54.808-.17 1.595 1.92-.322.268 1.076 4.193-.838-1.168-2.513-.036.903-4.157 3.319-1.067-.918-2.493-5.317 1.366-2.86 2.683 1.105 1.994-3.56 5.716-3.12-1.798 4.467-6.103z"/>
</svg>
`;

const privacyIcon = `
<svg width="24" height="24" viewBox="0 0 24 24">
  <path fill="black" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"/>
</svg>
`;

const MyProfile = ({navigation}) => {
  user_link = 'share/FQ$#Tsdf';
  let mylink = `https://7saba.com/${user_link}`;

  async function shareApp() {
    console.log('share_app');
    try {
      const result = await Share.share({
        message: `Click \n ${mylink} to join us for the best shopping experience`,
      });

      if (result.action == Share.sharedAction) {
        if (result.activityType) {
          console.log('shared wit activity of type: ', result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.activityType == Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  const {
    is_loggeed_in,
    yout_balance,
    followers,
    following,
    number_of_products,
    username,
  } = useAuth();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <NativeRouter>
      <View style={[styles.cards, styles.header]}>
        <View style={{backgroundColor: '#', paddingTop: 50}}>
          <View>
            <View
              style={{
                display: 'flex',
                paddingVertical: 2,
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={styles.dp}
                source={{
                  uri: 'https://server.7saba.com/IMG_20230723_114801_084.jpg',
                }}
              />
            </View>
            <View
              style={{
                display: 'flex',
                paddingVertical: 2,
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.profile_details}>
                {is_loggeed_in
                  ? capitalizeFirstLetter(username)
                  : 'Anonymous User'}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                paddingVertical: 2,
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.profile_details}>{followers} followers</Text>
              <Text style={styles.profile_details}>{following} following</Text>
              <Text style={styles.profile_details}>{number_of_products} Products</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#c1c1c1c1', height: '100%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Earnings')}
          style={styles.flex}>
          <>
            <SvgXml xml={moneyIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>
              Your Balance : {yout_balance}/=
            </Text>
          </>
        </TouchableOpacity>
        <View style={styles.flex}>
          <SvgXml xml={userIcon} />
          <Text style={{margin: 1, marginHorizontal: 12}}>Followers: 0</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.flex}>
          <>
            <SvgXml xml={settingIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>Settings</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex} onPress={shareApp}>
          <SvgXml xml={mailIcon} />
          <Text style={{margin: 1, marginHorizontal: 12}}>Invite friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Report')}
          style={styles.flex}>
          <>
            <SvgXml xml={problemIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>
              Report a problem
            </Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Help')}
          style={styles.flex}>
          <>
            <SvgXml xml={helpIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>Help</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Terms')}
          style={styles.flex}>
          <>
            <SvgXml xml={termsIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>
              Terms of service
            </Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Privacy')}
          style={styles.flex}>
          <>
            <SvgXml xml={privacyIcon} />
            <Text style={{margin: 1, marginHorizontal: 12}}>
              Privacy Policy
            </Text>
          </>
        </TouchableOpacity>
      </View>
    </NativeRouter>
  );
};

// Styles and other code

const styles = StyleSheet.create({
  cards: {backgroundColor: 'red', height: 48, marginBottom: 2},
  dp: {
    backgroundColor: 'lightblue',
    width: 142,
    height: 142,
    marginTop: -45,
    borderRadius: 112,
  },
  header: {height: 240, backgroundColor: '#Efefef'},
  profile_details: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 12,
    marginTop: 4,
  },
  flex: {
    backgroundColor: 'white',
    height: 52,
    paddingVertical: 15,
    paddingHorizontal: 18,
    width: 'auto',
    flexDirection: 'row',
    padding: 4,
    font: 12,
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default MyProfile;
