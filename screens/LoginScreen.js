import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // Control para mostrar/ocultar contraseña

  const handleLogin = () => {
    if (email && password) {
      // Lógica de autenticación (Simulación)
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Por favor, ingresa ambos campos.');
    }
  };

  const toggleSecureText = () => {
    setSecureText(!secureText); // Cambiar el estado para mostrar/ocultar la contraseña
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        {/* Campo de Correo Electrónico con ícono dentro */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Icon name="envelope" size={20} color="#4CAF50" style={styles.inputIcon} />
        </View>

        {/* Campo de Contraseña con ícono dentro y ojo para mostrar/ocultar */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <Icon name="lock" size={20} color="#4CAF50" style={styles.inputIcon} />
          <TouchableOpacity onPress={toggleSecureText} style={styles.eyeIcon}>
            <Icon name={secureText ? "eye-slash" : "eye"} size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // Esto hace que la imagen cubra el contenedor
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparente para que el texto sea legible
    width: '100%',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40, // Espacio para el ícono
    backgroundColor: '#fff',
    fontSize: 16,
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
  link: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
