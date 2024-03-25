import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { db } from './firebaseConfig';

const Home = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const startDiscussion = async () => {
    await db.collection('topics').add({
      title,
      description,
      user: 'user1', // replace this with the actual user
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTitle('');
    setDescription('');
  };

  return (
    <View>
      <TextInput placeholder="Topic" onChangeText={setTitle} value={title} />
      <TextInput placeholder="Description" onChangeText={setDescription} value={description} />
      <Button title="Start a Discussion" onPress={startDiscussion} />
    </View>
  );
};

export default Home;

/*import { View, Text, Pressable } from 'react-native';
import React, { useState, useEffect, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Replace with your firebase app import
import { styles } from "./styles";
import { TextInput } from 'react-native-web';

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const InputRef = useRef(null);
  const TextAreaRef = useRef(null);

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "topics"), {
        user: "Anonymous", // You can replace with authenticated user info
        title,
        description,
        creationTime: Timestamp.now(),
      });
      console.log("Document written with ID:", docRef.id);
      setTitle("");
      setDescription("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View>
      <TextInput placeholder="Topic" onChangeText={setTitle} value={title} />
      <TextInput placeholder="Description" onChangeText={setDescription} value={description} />
      <Button title="Start a Discussion" onPress={startDiscussion} />
    </View> );
};

export default Home; */
/*<TextInput
        ref={InputRef}
        className={styles.inputField}
        type="text"
        placeholder="Topic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textArea
        ref={TextAreaRef}
        className={styles.inputField}
        placeholder="Describe your experience"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Start Discussion
      </button>
*/