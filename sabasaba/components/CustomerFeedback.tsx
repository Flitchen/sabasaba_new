import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useProduct } from '@/contexto/ProductProvider';


const FeedbackCard = ({username:String}) => {
  const {author,set_author } = useProduct();
useEffect(()=>{
  var user = {
    name: author ? author :"",
    profilePicture: 'https://example.com/profile.jpg',
    online: 0, // or false
    lastSeen: '10 minutes ago',
    feedback: 'Great seller, would buy again!',
    rating: 4.5, // out of 5
  };
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  console.log("user.name : ",user.name )
  
},[author])  
  var user = {
    name: author,
    profilePicture: 'https://example.com/profile.jpg',
    online: 0, // or false
    lastSeen: '10 minutes ago',
    feedback: 'Great seller, would buy again!',
    rating: 4.5, // out of 5
  };
  
   const handleViewMore = () => {
    // Implement navigation logic to open the full profile page
    console.log('View More clicked for user:', user.name);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.viewMoreButton} onPress={handleViewMore}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        <Text style={styles.username}>{user.name?user.name:"Anonymous"}</Text>
      </View>
      <View style={styles.status}>
        {user.online ? (
          <Text style={[styles.statusText, styles.onlineStatus]}>Online</Text>
        ) : (
          <Text style={[styles.statusText, styles.lastSeen]}>Last seen: {user.lastSeen}</Text>
        )}
      </View>
      <Text style={styles.feedbackTitle}>Feedback from customers:</Text>
      <View style={styles.feedback}>
        <Text>{user.feedback}</Text>
      </View>
      <View style={styles.ratings}>
        <Text style={styles.rating}>{user.rating}/5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#045286',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  viewMoreButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
  },
  viewMoreText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 45,
    marginRight: 10,
    backgroundColor:"red"
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
  },
  onlineStatus: {
    color: 'green',
  },
  lastSeen: {
    color: 'gray',
  },
  feedback: {
    marginBottom: 10,
    borderRadius:10, 
    color:"white",
    backgroundColor:"#045286",
    padding:10
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratings: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  rating: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default FeedbackCard;
