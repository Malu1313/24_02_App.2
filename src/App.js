import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Layout from "./components/Layout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout>
            <Cadastro/>
          </Layout>
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
