import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAuth } from "@/contexto/AuthProvider";


export default function Earnings() {
  const {
    total_number_of_recruits,
    yout_balance,is_loggeed_in,
    number_of_products,
    money_earned,
    money_spent,
    username,
  } = useAuth();
    return (
    <View style={styles.container}>
      <Text style={styles.heading}>Income Summary</Text>

      <View style = {{backgroundColor:"#ddd" ,margin:-12, padding:12 ,borderRadius:15 ,marginBottom:12}}>

      <View style={styles.item}>
        <Text style={styles.text}>Total Friend Invited:</Text>
        <Text style={styles.text}>{total_number_of_recruits}  </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Money Earned:</Text>
        
        <Text style={styles.money}>Tsh {money_earned} /=</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Money in account:</Text>
        <Text style={styles.money}>Tsh {yout_balance} /=</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Money spent:</Text>
        <Text style={styles.money}>Tsh {money_spent} /=</Text>
      </View>

      </View>

      <Text style={styles.heading}>Share and Start Earning</Text>

      {is_loggeed_in?<>
        <View style={styles.shareLink}>
        <Text style={styles.linkText}>
        http://api.7saba.com/share/{username}
        </Text>
      </View>

      </>:""}
      {is_loggeed_in?<>

      <Text style={styles.heading}>Instructions For Earning money</Text>

      <View style={styles.instruction}>
        <Text style={styles.text}>1. Copy the Link above</Text>
        <Text style={styles.text}>2. Share the link with your Friends and start Earning</Text>
      </View>
      </>:
      <View style={styles.instruction}>
        <Text style={styles.text}>Login in and inviting people to the app to earn tokens and win prices </Text>
      </View>
}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 19,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  money: {
    color: "red",
  },
  shareLink: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  linkText: {
    color: "blue",
  },
  instruction: {
    marginBottom: 10,
    backgroundColor:"#ddd", padding:12 ,borderRadius:15 ,marginBottom:12
  },
  text:{
    fontSize:15
  }
});
