import React, { useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { AuthUserContext } from "../context/authUserContext";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Ananya Das");
  const [email, setEmail] = useState("ananya.das@gmail.com");
  const [photo, setPhoto] = useState("https://cdn-icons-png.flaticon.com/512/3237/3237472.png");

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto("https://cdn-icons-png.flaticon.com/512/3237/3237472.png");
  };

  const handleSave = () => {
    setModalVisible(false);
  };

  const { logout } = useContext(AuthUserContext);

  const handleLogout = () => {
    console.log("Logout button pressed");
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerBackground}></View>
          <View style={styles.userInfoSection}>
            <Avatar.Image source={{ uri: photo }} size={80} />
            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title}>{name}</Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="edit" size={24} color="black" style={{ marginLeft: "auto" }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsSection}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Addresses</Text>
          </TouchableOpacity>
          <View style={styles.gap}></View>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Help and Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
          <View style={styles.gap}></View>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Feedback</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal Implementation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <View style={styles.avatarContainer}>
              <Avatar.Image source={{ uri: photo }} size={80} style={styles.modalAvatar} />
              <TouchableOpacity style={styles.cameraIcon} onPress={handleChoosePhoto}>
                <Icon name="photo-camera" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={handleRemovePhoto}>
              <Text style={styles.removeButtonText}>Remove Photo</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F7F7F7",
    paddingBottom: 20,
    alignItems: "center",
  },
  headerBackground: {
    width: "100%",
    height: 10,
  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    color: "black",
    marginTop: 5,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  optionsSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  gap: {
    height: 20,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  link: {
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "500",
    color: "blue",
  },
  logoutButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: "center",
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "orange",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  modalAvatar: {
    marginBottom: 10,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  removeButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#FB8B24",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
