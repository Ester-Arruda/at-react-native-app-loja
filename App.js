import { ProductListPage } from './src/pages/ProductListPage';
import { ContainerDetailsProduct } from './src/container/ContainerDetailsProduct';
import { AboutPage } from './src/pages/AboutPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ProductStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProductListPage">
      <Stack.Screen name="ProductListPage" component={ProductListPage} options={{ title: "Lista de Produtos" }} />
      <Stack.Screen name="ContainerDetailsProduct" component={ContainerDetailsProduct} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AboutStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AboutPage">
      <Stack.Screen name="AboutPage" component={AboutPage} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ProductStackNavigator">
        <Drawer.Screen name="ProductStackNavigator" component={ProductStackNavigator} options={{ title: 'Produtos' }} />
        <Drawer.Screen name="ProductListPage" component={ProductListPage} options={{ title: 'Lista de Produtos' }} />
        <Drawer.Screen name="AboutStackNavigator" component={AboutStackNavigator} options={{ title: 'Sobre' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
