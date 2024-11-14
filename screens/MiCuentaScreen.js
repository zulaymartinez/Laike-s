import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function MiCuentaScreen() {
  const [userInfo, setUserInfo] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "123-456-7890",
    profilePicture: require('../assets/profile.jpg'), // Cambia la imagen de perfil según corresponda
  });
  const [newName, setNewName] = useState(userInfo.name);
  const [newEmail, setNewEmail] = useState(userInfo.email);
  const [newPhone, setNewPhone] = useState(userInfo.phone);

  // Función para manejar la actualización de los datos del usuario
  const handleUpdateProfile = () => {
    if (!newName || !newEmail || !newPhone) {
      Alert.alert("¡Error!", "Por favor, completa todos los campos.");
    } else {
      setUserInfo({
        ...userInfo,
        name: newName,
        email: newEmail,
        phone: newPhone,
      });
      Alert.alert("¡Perfil actualizado!", "Tu información ha sido actualizada correctamente.");
    }
  };

  // Función para manejar la actualización de la imagen de perfil
  const handleChangeProfilePicture = () => {
    // Aquí puedes agregar la funcionalidad para cambiar la foto de perfil
    Alert.alert("Funcionalidad de foto de perfil", "Puedes implementar una función para cambiar la foto de perfil.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mi Cuenta</Text>

      <View style={styles.profileSection}>
        {/* Imagen de perfil */}
        <TouchableOpacity onPress={handleChangeProfilePicture}>
          <Image source={userInfo.profilePicture} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileName}>{userInfo.name}</Text>
      </View>

      {/* Información del usuario */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
        />
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          value={newEmail}
          onChangeText={setNewEmail}
        />
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          value={newPhone}
          onChangeText={setNewPhone}
        />

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Actualizar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Opciones adicionales */}
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionButton} onPress={() => Alert.alert("Cambiar contraseña", "Funcionalidad para cambiar la contraseña.")}>
          <Text style={styles.optionButtonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton} onPress={() => Alert.alert("Cerrar sesión", "Funcionalidad para cerrar sesión.")}>
          <Text style={styles.optionButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  infoSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  updateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  optionsSection: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  optionButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
