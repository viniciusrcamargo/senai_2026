import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

//import das telas
import Login from '../pages/login';
import Registro from '../pages/registro';
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Relatorio from '../pages/relatorio';


//import dos navegadores
const Stack = createStackNavigator();
const Draw = createDrawerNavigator();


function MenuSuperior() {
    return (
        <Draw.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                drawerActiveTintColor: '#FF914D',
                drawerInactiveTintColor: '#777',

                // Estilo do menu lateral em si
                drawerStyle: {
                    backgroundColor: '#042C53',
                },
                drawerContentStyle: {
                    backgroundColor: '#042C53',
                },

                // 🌟 CORREÇÃO AQUI: Garante o fundo azul para as Telas dentro do Drawer
                sceneContainerStyle: {
                    backgroundColor: '#042C53',
                },
                // Caso sua versão do React Navigation seja mais antiga, remova o de cima e use:
                // sceneStyle: { backgroundColor: '#042C53' },

                // Estilo do cabeçalho do Drawer (caso queira azul também)
                headerStyle: {
                    backgroundColor: '#042C53',
                },
                headerTintColor: '#fff', // Cor dos textos/ícone do menu no cabeçalho

                drawerIcon: ({ color, size, focused }) => {
                    let nomeIcone = 'menu-outline';

                    if (route.name === 'Principal') {
                        nomeIcone = focused ? 'desktop' : 'desktop-outline';
                    }
                    if (route.name === 'Cadastro') {
                        nomeIcone = focused ? 'audit' : 'audit-outline';
                    }

                    return <Ionicons name={nomeIcone} size={size} color={color} />;
                }
            })}
        >
            <Draw.Screen name='Home' component={Dashboard} options={{ headerTitleAlign: 'center' }} />
            <Draw.Screen name='Cadastro' component={Cadastro} />
            <Draw.Screen name='Relatorio' component={Relatorio} />
        </Draw.Navigator>
    )
}

export default function Rotas() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: '#042C53',
            },
            headerStyle: {
                backgroundColor: '#042C53',
            },
        }}>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Registro' component={Registro} options={{ title: 'Cadastro de usuário', headerShown: false }} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadastro de usuário', headerShown: false }} />
            <Stack.Screen name='Principal' component={MenuSuperior} options={{ headerShown: false, title: '' }} />
        </Stack.Navigator>
    )
}

const estilos = StyleSheet.create({
    menu: {
        backgroundColor: '#042C53',
    }
})