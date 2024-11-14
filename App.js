import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import CollaresScreen from "./screens/CollaresScreen";
import NuevosPerritosScreen from "./screens/NuevosPerritosScreen";
import PetshopScreen from "./screens/PetshopScreen";
import VeterinariaScreen from "./screens/VeterinariaScreen";
import PerritoCallejeroScreen from "./screens/PerritoCallejeroScreen";
import MiCuentaScreen from "./screens/MiCuentaScreen";
import LaikaDreamersScreen from "./screens/LaikaDreamersScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "🏠 Home" }}
        />
        <Drawer.Screen
          name="Collares"
          component={CollaresScreen}
          options={{ title: "🎀 Collares" }}
        />
        <Drawer.Screen
          name="NuevosPerritos"
          component={NuevosPerritosScreen}
          options={{ title: "🐶 Nuevos Perritos" }}
        />
        <Drawer.Screen
          name="Petshop"
          component={PetshopScreen}
          options={{ title: "🛒 Petshop" }}
        />
        <Drawer.Screen
          name="Veterinaria"
          component={VeterinariaScreen}
          options={{ title: "🏥 Veterinaria" }}
        />
        <Drawer.Screen
          name="PerritoCallejero"
          component={PerritoCallejeroScreen}
          options={{ title: "💖 Perrito Callejero" }}
        />
        <Drawer.Screen
          name="MiCuenta"
          component={MiCuentaScreen}
          options={{ title: "👤 Mi Cuenta" }}
        />
        <Drawer.Screen
          name="LaikaDreamers"
          component={LaikaDreamersScreen}
          options={{ title: "🌟 Laika Dreamers" }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "🔐 Login" }}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "📝 Register" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
