import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";

// Ejemplo de productos (esto podría venir de una API en el futuro)
const productosData = [
  { id: "1", name: "Comida para Perro", price: 15.99, category: "Comida", image: require("../assets/comida.jpg") },
  { id: "2", name: "Juguete para Perro", price: 8.99, category: "Juguetes", image: require("../assets/juguete.jpg") },
  { id: "3", name: "Collar para Perro", price: 12.49, category: "Accesorios", image: require("../assets/collar.jpg") },
  { id: "4", name: "Bebedero Automático", price: 25.99, category: "Accesorios", image: require("../assets/bebedero.jpg") },
];

export default function PetshopScreen() {
  const [filteredProducts, setFilteredProducts] = useState(productosData);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  // Función para filtrar productos por categoría
  const filterProducts = (category) => {
    if (category === "Todos") {
      setFilteredProducts(productosData);
    } else {
      const filtered = productosData.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Función para buscar productos por nombre
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredProducts(productosData);
    } else {
      const filtered = productosData.filter(product => 
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar productos..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Filtros de Categoría */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterProducts("Todos")}>
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterProducts("Comida")}>
          <Text style={styles.filterText}>Comida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterProducts("Juguetes")}>
          <Text style={styles.filterText}>Juguetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => filterProducts("Accesorios")}>
          <Text style={styles.filterText}>Accesorios</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de productos */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.cardCategory}>{item.category}</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
                <Text style={styles.addToCartText}>Añadir al Carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Carrito de Compras */}
      <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={() => alert("Ver carrito")}>
          <Text style={styles.cartText}>Carrito ({cart.length})</Text>
        </TouchableOpacity>
      </View>
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
    color: "#ff6347",
    marginBottom: 5,
  },
  cardCategory: {
    fontSize: 14,
    color: "#888",
  },
  addToCartButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cartButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  cartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
