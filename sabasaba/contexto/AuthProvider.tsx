import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

let AuthContext = createContext({});

function AuthProvider({children}: PropsWithChildren) {
  const [is_loggeed_in, set_is_logged_in] = useState(false);
  const [is_loading, set_is_lading] = useState(null);
  const [username, set_username] = useState('');
  const [password, set_password] = useState('');

  const [followers, set_followers] = useState(0);
  const [following, set_following] = useState(0);
  const [number_of_products, set_number_of_products] = useState(0);
  const [money_earned, set_money_earned] = useState(0);
  const [money_spent, set_money_spent] = useState(0);
  const [number_of_profile_views, set_number_of_profile_views] = useState(0);
  const [data_saver_enabled, set_data_saver_enabled] = useState(false);

  const [yout_balance, set_yout_balance] = useState(500);
  const [total_number_of_recruits, set_total_number_of_recruits] = useState(0);
  const [user_token, set_user_token] = useState(null);
  const [logged_in_time, set_logged_in_time] = useState(null);

  const log_in = async () => {
    // Prepare product data
    const userData = {
      username: username,
      password: password,
    };
    console.log(username, password);
    // POST request to localhost:80
    var request = await fetch('http://api.7saba.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    var response = await request
      .json()
      .then(data => {
        console.log(data);
        set_user_token(data.token);
        set_username(data.username);
        set_logged_in_time(new Date());
        AsyncStorage.setItem('is_loggeed_in', JSON.stringify(is_loggeed_in));
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('user_token', user_token);
        // Handle success, e.g., navigate to a success screen
      })
      .catch(error => {
        console.error('Error Logging in:', error);
        // Handle error, e.g., display error message to the user
      });
    if (user_token) {
      set_is_logged_in(true);
      // AsyncStorage.setItem("TokenName", TokenValue)
      // console.log(is_loggeed_in)
    }
  };

  // useEffect(()=>{if (new Date - logged_in_time>0) console.log(new Date - logged_in_time)} )
  function log_out() {
    set_user_token(null);
    set_is_logged_in(false);
  }
  useEffect(()=>{
      async function check_if_logged_in() {
        
        const is_loggeed_in = await AsyncStorage.getItem('is_loggeed_in')
        const username = await AsyncStorage.getItem('username')
        const user_token = await AsyncStorage.getItem('user_token')
        is_loggeed_in && set_is_logged_in(is_loggeed_in)
        username && set_username(username)
        user_token && set_user_token(user_token)

        console.log(is_loggeed_in,
          username,
          user_token,)
        
      }
      check_if_logged_in()
  },[])



  return (
    <AuthContext.Provider
      value={{
        username,
        set_username,
        log_in,
        is_loggeed_in,
        log_out,
        set_password,
        user_token,
        yout_balance,
        followers,
        set_followers,
        total_number_of_recruits,
        set_total_number_of_recruits,
        money_earned,
        money_spent,
        number_of_profile_views,
        data_saver_enabled,
        following,
        set_following,
        number_of_products,
        set_number_of_products,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export var useAuth = () => useContext(AuthContext);
