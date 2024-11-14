import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Alert, ScrollView } from "react-native";

// Datos de ejemplo de perritos callejeros disponibles para adopción con imágenes locales
const perritosData = [
  { id: "1", name: "Rex", age: "2 años", breed: "Pastor Alemán", description: "Muy cariñoso y juguetón. Necesita un hogar con espacio para correr.", image: require('../assets/adopcion1.jpg') },
  { id: "2", name: "Luna", age: "1 año", breed: "Labrador", description: "Es tranquila y le encanta estar con niños. Le gusta jugar en el agua.", image: require('../assets/adopcion2.jpg') },
  { id: "3", name: "Max", age: "3 años", breed: "Pitbull", description: "Fiel y protector. Requiere un dueño con experiencia en razas fuertes.", image: require('../assets/adopcion3.jpg') },
  { id: "4", name: "Bella", age: "4 años", breed: "Bulldog Francés", description: "Sociable, amigable con otros perros y personas. Perfecta para un hogar familiar.", image: require('../assets/adopcion4.jpg') },
];

export default function PerritoCallejeroScreen() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  // Función para manejar la solicitud de adopción
  const handleAdoptRequest = () => {
    if (!selectedDog || !name || !contactInfo) {
      Alert.alert("¡Error!", "Por favor, complete todos los campos.");
    } else {
      Alert.alert("¡Gracias por tu interés!", `Has solicitado adoptar a ${selectedDog.name}.`);
      // Vuelve a la lista de perros después de completar la solicitud
      setSelectedDog(null);
    }
  };

  // Función para manejar la cancelación de la solicitud y volver a la lista
  const handleCancelRequest = () => {
    setSelectedDog(null); // Regresa a la lista de perros sin realizar la adopción
  };

  // Función para manejar la selección de un perro
  const handleSelectDog = (dog) => {
    setSelectedDog(dog);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perritos Callejeros para Adopción</Text>

      {/* Listado de perritos disponibles */}
      {!selectedDog ? (
        <FlatList
          data={perritosData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => handleSelectDog(item)}>
              <Image source={item.image} style={styles.dogImage} />
              <View style={styles.dogInfo}>
                <Text style={styles.dogName}>{item.name}</Text>
                <Text style={styles.dogBreed}>{item.breed}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ScrollView style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Detalles del Perro</Text>
          <Image source={selectedDog.image} style={styles.dogDetailImage} />
          <Text style={styles.dogDetailName}>{selectedDog.name}</Text>
          <Text style={styles.dogDetailInfo}>Edad: {selectedDog.age}</Text>
          <Text style={styles.dogDetailInfo}>Raza: {selectedDog.breed}</Text>
          <Text style={styles.dogDetailDescription}>{selectedDog.description}</Text>

          {/* Formulario de adopción */}
          <Text style={styles.label}>Tu Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu nombre"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Información de Contacto</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu teléfono o email"
            value={contactInfo}
            onChangeText={setContactInfo}
          />
          <TouchableOpacity style={styles.adoptButton} onPress={handleAdoptRequest}>
            <Text style={styles.adoptButtonText}>Solicitar Adopción</Text>
          </TouchableOpacity>

          {/* Botón para cancelar la solicitud y volver a la lista */}
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRequest}>
            <Text style={styles.cancelButtonText}>Cancelar Solicitud</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  dogImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  dogInfo: {
    flexDirection: "column",
  },
  dogName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dogBreed: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    elevation: 3,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  dogDetailImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 15,
  },
  dogDetailName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  dogDetailInfo: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  dogDetailDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
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
  adoptButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  adoptButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
