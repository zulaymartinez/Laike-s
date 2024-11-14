import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Contenido Principal */}
      <View style={styles.content}>
        {/* Título */}
        <Text style={styles.title}>Laikas Dream</Text>

        {/* Barra de búsqueda */}
        <TextInput
          placeholder="Buscar"
          style={styles.searchBar}
          placeholderTextColor="#888"
        />

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Salvando a más de 1,000 perritos callejeros
        </Text>

        {/* Botón principal */}
        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => {
            // Navegar o realizar alguna acción específica
          }}
        >
          <Text style={styles.reportButtonText}>Reportar un Perrito</Text>
        </TouchableOpacity>

        {/* Información sobre el QR */}
        <View style={styles.footer}>
          <Text style={styles.infoText}>
            Escanea el código en el collar de los perritos callejeros para
            salvar vidas.
          </Text>
          <Image
            source={require("../assets/qr-placeholder.png")}
            style={styles.qrImage}
          />
        </View>

        {/* Nueva Sección de Encuesta */}
        <View style={styles.surveySection}>
          <Text style={styles.infoText}>
            Por favor, ayúdanos a salvar vidas diligenciando la siguiente encuesta.
          </Text>
          <TouchableOpacity
            style={styles.surveyButton}
            onPress={() => Linking.openURL("https://forms.gle/W9UtcrjL7wjDEiJq5")}
          >
            <Text style={styles.surveyButtonText}>Diligenciar Encuesta</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de apoyo */}
        <View style={styles.supportSection}>
          <View style={styles.supportItem}>
            <Image
              source={require("../assets/heart-paw.jpg")}
              style={styles.icon}
            />
            <Text style={styles.supportTitle}>Tu apoyo</Text>
          </View>
          <Text style={styles.supportText}>
            Es muy importante tu apoyo en esta campaña, porque sin ti no
            hubiéramos podido llegar hasta aquí.
          </Text>
        </View>

        {/* Sección de cómo apoyar */}
        <View style={styles.supportSection}>
          <View style={styles.supportItem}>
            <Image source={require("../assets/apoyo.jpg")} style={styles.icon} />
            <Text style={styles.supportTitle}>¿Cómo puedo apoyar?</Text>
          </View>
          <Text style={styles.supportText}>
            Solo necesitamos que portes de todas partes nuestro collar para que
            cuando veas un perrito callejero, se lo pongas o, si ya tiene,
            escanea su código QR y "¡lo reporto!".
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  content: {
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  searchBar: {
    backgroundColor: "#eaeaea",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "90%",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 16,
    textAlign: "center",
  },
  reportButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    width: "90%",
    alignItems: "center",
  },
  reportButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    width: "100%",
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  qrImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  surveySection: {
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
  },
  surveyButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  surveyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  supportSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  supportItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 8,
  },
  supportText: {
    fontSize: 16,
    color: "#444",
    textAlign: "justify",
    marginTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
