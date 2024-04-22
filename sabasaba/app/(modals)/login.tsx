import Colors from '@/constants/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

// https://github.com/clerkinc/clerk-expo-starter/blob/main/components/OAuth.tsx
// import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import useWarmUpBrowser from '@/hooks/useWarmUpBrowser'

import { defaultStyles } from '@/constants/Styles';
import { styled } from 'nativewind';
const StyledOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook',
}
const Page = () => {
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: 'oauth_facebook' });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.push("/(modals)/login");
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />

      <TouchableOpacity style={defaultStyles.btn}>
        <StyledText style={defaultStyles.btnText}>Continue</StyledText>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <StyledText style={styles.seperator}>or</StyledText>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={[styles.btnOutline,styles.phone]}>
          <AntDesign name="phone" size={24} style={defaultStyles.btnIcon} color="black" />
          <StyledText style={styles.btnOutlineText}>Continue with Phone</StyledText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnOutline,styles.apple]} onPress={() => onSelectAuth(Strategy.Apple)}>
          <AntDesign name="apple-o" size={24} style={defaultStyles.btnIcon} color="white" />
          <StyledText style={styles.btnOutlineText} className='text-white'>Continue with Apple</StyledText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnOutline,styles.google]} onPress={() => onSelectAuth(Strategy.Google)}>
          <Entypo name="google-" size={24} style={defaultStyles.btnIcon} color="white" />
          <StyledText style={styles.btnOutlineText} className='text-white'>Continue with Google</StyledText>
        </TouchableOpacity>

        <StyledOpacity style={[styles.btnOutline,styles.facebook]} onPress={() => onSelectAuth(Strategy.Facebook)}>
          <Entypo name="facebook-with-circle" style={defaultStyles.btnIcon} size={24} color="white" />
          <StyledText style={styles.btnOutlineText} className='text-white'>Continue with Facebook</StyledText>
        </StyledOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },

  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  google:{backgroundColor:"red"},
  phone:{backgroundColor:"white"},
  apple:{backgroundColor:"black"},
  facebook:{backgroundColor:"blue"},
});