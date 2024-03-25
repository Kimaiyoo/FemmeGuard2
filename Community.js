import React, { useState, useEffect } from "react";
import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Replace with your firebase app import
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Community = () => {
  const [topics, setTopics] = useState([]);
  const [newComment, setNewComment] = useState(""); // State for new comment

  const fetchTopics = async () => {
    const q = query(collection(db, "topics"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      comments: [], // Add an empty comments array for each topic
    }));
    setTopics(data);
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleCommentSubmit = async (topicId) => {
    if (!newComment) return; // Prevent empty comment submission
  
    try {
      const commentRef = await addDoc(collection(db, "topics", topicId, "comments"), {
        user: "Anonymous", // You can replace with authenticated user info
        content: newComment,
        creationTime: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log("Comment added:", commentRef.id);
  
      // Update comments state for the specific topic
      const updatedTopics = topics.map((topic) => {
        if (topic.id === topicId) {
          return { ...topic, comments: [...topic.comments, { id: commentRef.id, ...commentRef.data() }] };
        }
        return topic;
      });
      setTopics(updatedTopics);
      setNewComment(""); // Clear comment input after submission
    } catch (e) {
      console.error("Error adding comment:", e);
    }
  };
  

  return (
      <View>
        <Text style={styles.header}>Community Discussions</Text>
        {topics.map((topic) => (
          <View key={topic.id} style={styles.topicCard}>
            <Text style={styles.title}>{topic.title}</Text>
            <Text>{topic.description}</Text>
            {/* Comment Section */}
            <View>
              <Text style={styles.commentsTitle}>Comments</Text>
              {topic.comments.map((comment) => (
                <Text key={comment.id}>{comment.content}</Text>
              ))}
            </View>
            <TextInput
              style={styles.inputField}
              placeholder="Add a comment"
              value={newComment}
              onChangeText={setNewComment}
            />
            <Button title="Comment" onPress={() => handleCommentSubmit(topic.id)} />
          </View>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  topicCard: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  topicTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  commentSection: {
    marginLeft: 20,
    marginBottom: 10,
  },
  comment: {
    marginBottom: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
  },
  inputField: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
});

export default Community;
