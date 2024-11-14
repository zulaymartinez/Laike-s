import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";

// Ejemplo de perritos disponibles (esto podría venir de una API en el futuro)
const perritosData = [
  { id: "1", name: "Max", age: 2, breed: "Bulldog", size: "Mediano", image: require("../assets/perrito1.jpg") },
  { id: "2", name: "Bella", age: 1, breed: "Labrador", size: "Grande", image: require("../assets/perrito2.jpg") },
  { id: "3", name: "Rocky", age: 3, breed: "Beagle", size: "Pequeño", image: require("../assets/perrito3.jpg") },
  { id: "4", name: "Luna", age: 4, breed: "Poodle", size: "Mediano", image: require("../assets/perrito4.jpg") },
];

export default function NuevosPerritosScreen() {
  const [filteredPerritos, setFilteredPerritos] = useState(perritosData);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para filtrar perritos por tamaño
  const filterPerritos = (size) => {
    if (size === "Todos") {
      setFilteredPerritos(perritosData);
    } else {
      const filtered = perritosData.filter(perrito => perrito.size === size);
      setFilteredPerritos(filtered);
    }
  };

  // Función para buscar perritos por nombre o raza
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredPerritos(perritosData);
    } else {
      const filtered = perritosData.filter(perrito => 
        perrito.name.toLowerCase().includes(text.toLowerCase()) || 
        perrito.breed.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPerritos(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar perritos..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Filtros */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterPerritos("Todos")}>
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterPerritos("Pequeño")}>
          <Text style={styles.filterText}>Pequeños</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterPerritos("Mediano")}>
          <Text style={styles.filterText}>Medianos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterPerritos("Grande")}>
          <Text style={styles.filterText}>Grandes</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de perritos */}
      <FlatList
        data={filteredPerritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => alert(`Detalles del perrito: ${item.name}`)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardAge}>{item.age} años</Text>
              <Text style={styles.cardBreed}>{item.breed}</Text>
              <Text style={styles.cardSize}>{item.size}</Text>
              <TouchableOpacity style={styles.adoptButton} onPress={() => alert(`Adoptando a ${item.name}`)}>
                <Text style={styles.adoptButtonText}>Adoptar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
  },
  filterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  cardInfo: {
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardAge: {
    fontSize: 16,
    color: "#888",
  },
  cardBreed: {
    fontSize: 16,
    color: "#4CAF50",
  },
  cardSize: {
    fontSize: 16,
    color: "#888",
  },
  adoptButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  adoptButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
