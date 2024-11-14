import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function LaikaDreamersScreen() {
  const [joined, setJoined] = useState(false);

  // Función para manejar la unión al programa
  const handleJoinProgram = () => {
    setJoined(true);
    Alert.alert("¡Bienvenido!", "Te has unido al programa Laika Dreamers. Gracias por tu apoyo.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Laika Dreamers</Text>

      <View style={styles.infoSection}>
        <Image
          source={require('../assets/laikadreamers.png')}
          style={styles.programImage}
          resizeMode="contain" // Asegura que la imagen se ajuste sin recortarse
        />
        <Text style={styles.infoText}>
          Laika Dreamers es una iniciativa que busca promover la adopción y el cuidado de perritos
          callejeros. Juntos podemos hacer una gran diferencia en la vida de muchos de estos animales.
          Únete a nuestra causa y ayúdanos a ofrecerles un hogar lleno de amor.
        </Text>
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={handleJoinProgram}
          disabled={joined}
        >
          <Text style={styles.joinButtonText}>
            {joined ? "Ya eres parte de Laika Dreamers" : "Unirte a Laika Dreamers"}
          </Text>
        </TouchableOpacity>

        {!joined && (
          <Text style={styles.noteText}>
            Al unirte, recibirás actualizaciones y podrás participar activamente en nuestras campañas.
          </Text>
        )}
      </View>

      <View style={styles.donateSection}>
        <TouchableOpacity style={styles.donateButton} onPress={() => Alert.alert("Donación", "Funcionalidad para donar.")}>
          <Text style={styles.donateButtonText}>Hacer una Donación</Text>
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
  infoSection: {
    marginBottom: 30,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  programImage: {
    width: "100%", 
    height: undefined, 
    aspectRatio: 1, 
    borderRadius: 8,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  actionSection: {
    marginTop: 20,
    alignItems: "center",
  },
  joinButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  noteText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
  donateSection: {
    marginTop: 30,
    alignItems: "center",
  },
  donateButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
