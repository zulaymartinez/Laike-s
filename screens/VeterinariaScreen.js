import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; 

// Ejemplo de servicios disponibles en la veterinaria
const serviciosData = [
  {
    id: "1",
    name: "Consulta General",
    description: "Revisión de salud general para tu mascota.",
    price: 50,
  },
  {
    id: "2",
    name: "Vacunación",
    description: "Vacunación contra enfermedades comunes.",
    price: 30,
  },
  {
    id: "3",
    name: "Cirugía",
    description: "Cirugía veterinaria para tratamientos avanzados.",
    price: 200,
  },
  {
    id: "4",
    name: "Examen de Laboratorio",
    description: "Exámenes para detectar posibles enfermedades.",
    price: 100,
  },
];

export default function VeterinariaScreen() {
  const [selectedService, setSelectedService] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [message, setMessage] = useState("");

  // Función para agendar cita
  const bookAppointment = () => {
    if (!selectedService || !appointmentDate || !appointmentTime) {
      setMessage("Por favor, complete todos los campos.");
    } else {
      setMessage(
        `Cita agendada para ${appointmentDate} a las ${appointmentTime}.`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Servicios de Veterinaria</Text>

      {/* Listado de servicios */}
      <FlatList
        data={serviciosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.cardPrice}>${item.price}</Text>
          </View>
        )}
      />

      {/* Selección de servicio */}
      <Text style={styles.label}>Seleccione el Servicio</Text>
      <Picker
        selectedValue={selectedService}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedService(itemValue)}
      >
        {serviciosData.map((service) => (
          <Picker.Item
            key={service.id}
            label={service.name}
            value={service.id}
          />
        ))}
      </Picker>

      {/* Formulario para agendar cita */}
      <Text style={styles.label}>Fecha de la Cita</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        value={appointmentDate}
        onChangeText={(text) => setAppointmentDate(text)}
      />

      <Text style={styles.label}>Hora de la Cita</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        value={appointmentTime}
        onChangeText={(text) => setAppointmentTime(text)}
      />

      {/* Botón para agendar cita */}
      <TouchableOpacity style={styles.bookButton} onPress={bookAppointment}>
        <Text style={styles.bookButtonText}>Agendar Cita</Text>
      </TouchableOpacity>

      {/* Mensaje de confirmación */}
      {message && <Text style={styles.message}>{message}</Text>}

      {/* Información de contacto */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Información de Contacto</Text>
        <Text style={styles.contactInfo}>📞 Teléfono: (123) 456-7890</Text>
        <Text style={styles.contactInfo}>📍 Dirección: Calle Ficticia 123</Text>
        <Text style={styles.contactInfo}>
          🌐 Sitio Web: www.veterinaria.com
        </Text>
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: "#ff6347",
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  bookButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: "#4CAF50",
    textAlign: "center",
  },
  contactContainer: {
    marginTop: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
});
