import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const TermsOfService = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Terms of Service</Text>
      <Text style={styles.paragraph}>
        Welcome to [Platform Name]! These Terms of Service ("Terms") govern your
        use of our website, mobile application, and any related services
        provided by us (collectively, the "Platform"). By accessing or using our
        Platform, you agree to comply with these Terms and our Privacy Policy which govern 7saba’s relationship with you in relation to this platform.
        If you do not agree with these Terms or our Privacy Policy, you may not
        access or use our Platform.
      </Text>
      <Text style={styles.sectionHeading}>1. Your Relationship With Us</Text>
      <Text style={styles.paragraph}>
        Your use of the Platform constitutes your agreement to be bound by these
        Terms.
      </Text>
      <Text style={styles.paragraph}>
      1.1.  Our Platform is provided to you on an "as is" and "as available" basis.
        We reserve the right to modify or discontinue the Platform (or any part
        thereof) at any time, with or without notice.
      </Text>

      
      <Text style={styles.paragraph}>
      1.2. We may update these Terms from time to time. Any changes to these Terms will be effective upon posting. Your continued use of the Platform after such changes constitutes acceptance of the updated Terms.
</Text>

      <Text style={styles.sectionHeading}>2. User Accounts</Text>
      <Text style={styles.paragraph}>
      2.1. In order to access certain features of the Platform, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process.
      </Text>
      <Text style={styles.paragraph}>
        2.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
      </Text>
      <Text style={styles.paragraph}>
        2.3. Your account and username may be used across all platforms operated by us. By creating an account, you consent to the use of your account and username in this manner.
      </Text>
      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>3. User Content</Text>
      <Text style={styles.paragraph}>3.1. Our Platform allows users to post, upload, share, or submit content, including but not limited to text, images, videos, and audio clips ("User Content").</Text>
      <Text style={styles.paragraph}>3.2. You retain ownership of any User Content you post on the Platform. By posting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, modify, adapt, publicly perform, and publicly display such User Content in connection with the operation of the Platform.</Text>
      <Text style={styles.paragraph}>3.3. You agree not to post User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, profane, hateful, or racially, ethnically, or otherwise objectionable.</Text>

      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>4. Intellectual Property Rights</Text>
      <Text style={styles.paragraph}>4.1. All content and materials available on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of [Platform Name] or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.</Text>
      <Text style={styles.paragraph}>4.2. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Platform without our prior written consent.</Text>

      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>5. User Conduct</Text>
      <Text style={styles.paragraph}>5.1. You agree not to:</Text>
      <Text style={styles.paragraph}>   - use the Platform for any illegal or unauthorized purpose;</Text>
      <Text style={styles.paragraph}>   - interfere with or disrupt the operation of the Platform or the servers or networks used to make the Platform available;</Text>
      <Text style={styles.paragraph}>   - engage in any conduct that could damage, disable, overburden, or impair the Platform;</Text>
      <Text style={styles.paragraph}>   - impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</Text>
      <Text style={styles.paragraph}>   - collect or store personal data about other users without their consent;</Text>
      <Text style={styles.paragraph}>   - use the Platform to transmit spam or other unsolicited advertising or promotional materials.</Text>

      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>6. Third-Party Links</Text>
      <Text style={styles.paragraph}>6.1. The Platform may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</Text>
      <Text style={styles.paragraph}>6.2. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any third-party websites or services.</Text>

      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>7. Disclaimer of Warranties</Text>
      <Text style={styles.paragraph}>7.1. Your use of the Platform is at your own risk. The Platform is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied.</Text>
      <Text style={styles.paragraph}>7.2. We do not warrant that the Platform will be error-free or uninterrupted, or that defects will be corrected. We make no representations or warranties about the accuracy, completeness, or reliability of any content available on the Platform.</Text>

      {/* Add other sections similarly */}
      <Text style={styles.sectionHeading}>8. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
8.1. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of the Platform.
      </Text>
      <Text style={styles.paragraph}>
        To the fullest extent permitted by applicable law, our total liability to you for all claims
        arising out of or related to these Terms or the Platform shall not exceed the amount paid by
        you, if any, for accessing or using the Platform during the twelve (12) months immediately
        preceding the event giving rise to such liability.
      </Text>
          
      <Text style={styles.sectionHeading}>12. Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions about these Terms, please contact us at [Contact Email].
      </Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container:{
    padding: 16,
    backgroundColor: '#fff',
    
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
});

export default TermsOfService;
