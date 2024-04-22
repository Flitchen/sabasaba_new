
import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

class TermsAndConditions extends Component{

  state = {
      accepted: false
  }

  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Text style={styles.paragraph}>Welcome to 7saba. This Privacy Policy explains how we collect, use, and protect information about you. By accessing or using our website, mobile application, or any other services provided by us (collectively, the "Service"), by using our Services you agree to the terms of this Privacy Policy.If you disagree with any part of these terms and conditions, please do not use our Services</Text>
                <Text style={styles.sectionHeading}>1. Information We Collect</Text>
                <Text style={styles.paragraph}>We collect various types of information when you interact with our Service, including:</Text>
                <Text style={styles.paragraph}>- Personal Information: Information that can be used to identify you, such as your name, email address, phone number, and payment information.</Text>
                <Text style={styles.paragraph}>- Usage Data: Information about how you interact with our Service, such as your device type, browser type, IP address, and pages visited.</Text>
                <Text style={styles.paragraph}>- Cookies and Tracking Technologies: We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities.</Text>

               
                
                <Text style={styles.sectionHeading}>2. How We Use Your Information</Text>
                <Text style={styles.paragraph}>We use the information we collect for the following purposes:</Text>
                <Text style={styles.paragraph}>- To provide and maintain our Service.</Text>
                <Text style={styles.paragraph}>- To personalize your experience and provide you with relevant content and recommendations.</Text>
                <Text style={styles.paragraph}>- To communicate with you, respond to your inquiries, and provide customer support.</Text>
                <Text style={styles.paragraph}>- To analyze trends, monitor usage patterns, and improve our products and services.</Text>
                <Text style={styles.paragraph}>- To detect, prevent, and address technical issues, fraud, or other illegal activities.</Text>

               
                
                <Text style={styles.sectionHeading}>3. Information Sharing</Text>
                <Text style={styles.paragraph}>We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our Service, conducting business activities, or providing services on our behalf. These service providers are contractually obligated to protect your information and may only use it for the purposes specified by us.</Text>
                <Text style={styles.paragraph}>We may also disclose your information in response to legal requests, such as subpoenas, court orders, or legal process, or to comply with applicable laws, regulations, or government requests.</Text>

               
                
                <Text style={styles.sectionHeading}>4. Data Security</Text>
                <Text style={styles.paragraph}>
We take the security of your information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction. All personal information collected through our Service is encrypted using industry-standard encryption protocols.

                </Text>

               
                
                <Text style={styles.sectionHeading}>5. Data Retention</Text>
                <Text style={styles.paragraph}>6. Your Rights</Text>

               
                
                <Text style={styles.sectionHeading}>
We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When we no longer need your information, we will securely delete or anonymize it.
                </Text>
                <Text style={styles.paragraph}>You have the right to:</Text>
                <Text style={styles.paragraph}>- Access, update, or delete your personal information.</Text>
                <Text style={styles.paragraph}>- Object to the processing of your personal information.</Text>
                <Text style={styles.paragraph}>- Withdraw consent for the processing of your personal information.</Text>
                <Text style={styles.paragraph}>- Receive a copy of your personal information in a structured, machine-readable format.</Text>
                <Text style={styles.paragraph}>
To exercise your rights or request assistance, please contact us using the contact information provided below.

                </Text>

               
                
                <Text style={styles.sectionHeading}>7. Contact Us</Text>
                <Text style={styles.paragraph}>
If you have any questions, concerns, or feedback about this Privacy Policy or our privacy practices, please contact us at [Contact Email].

                </Text>

               
                
                <Text style={styles.sectionHeading}>8. Changes to This Privacy Policy</Text>
                <Text style={styles.paragraph}>
We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any material changes by posting the updated Privacy Policy on our website or through other appropriate channels. Your continued use of our Service after the effective date of the updated Privacy Policy constitutes your acceptance of the changes.
                </Text>

               
                
                <Text style={styles.sectionHeading}></Text>

               
</ScrollView>

            {/* <TouchableOpacity disabled={ !this.state.accepted } onPress={ ()=>alert("Terms and conditions accepted") } style={ this.state.accepted ? styles.button : styles.buttonDisabled }><Text style={styles.buttonLabel}>Accept</Text></TouchableOpacity> */}
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    padding: 16,
    backgroundColor: '#fff',
    

  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 14
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 14
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color:"black"
  },
}

export default TermsAndConditions;