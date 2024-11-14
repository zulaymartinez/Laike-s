import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";

// Ejemplo de collares disponibles (esto podría venir de una API en el futuro)
const collaresData = [
  { id: "1", name: "Collar de Cuero", price: "15.99", image: require("../assets/collar1.jpg"), category: "Cuero" },
  { id: "2", name: "Collar de Tela", price: "9.99", image: require("../assets/collar2.jpg"), category: "Tela" },
  { id: "3", name: "Collar Resistente", price: "19.99", image: require("../assets/collar3.jpg"), category: "Resistente" },
  { id: "4", name: "Collar Personalizado", price: "25.00", image: require("../assets/collar4.jpg"), category: "Personalizado" },
];

export default function CollaresScreen() {
  const [filteredCollares, setFilteredCollares] = useState(collaresData);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para filtrar collares por categoría
  const filterCollares = (category) => {
    if (category === "Todos") {
      setFilteredCollares(collaresData);
    } else {
      const filtered = collaresData.filter(collar => collar.category === category);
      setFilteredCollares(filtered);
    }
  };

  // Función para buscar collares por nombre
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredCollares(collaresData);
    } else {
      const filtered = collaresData.filter(collar => collar.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredCollares(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar collares..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Filtros */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterCollares("Todos")}>
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterCollares("Cuero")}>
          <Text style={styles.filterText}>Cuero</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterCollares("Tela")}>
          <Text style={styles.filterText}>Tela</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterCollares("Resistente")}>
          <Text style={styles.filterText}>Resistente</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de collares */}
      <FlatList
        data={filteredCollares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => alert(`Detalles del collar: ${item.name}`)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>${item.price}</Text>
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
  cardPrice: {
    fontSize: 16,
    color: "#4CAF50",
  },
});
