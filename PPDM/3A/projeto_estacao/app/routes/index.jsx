import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Cadastro from '../pages/cadastro';
import Registro from '../pages/registro';
import Relatorio from '../pages/relatorio'

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
                drawerIcon: ({ color, size, focused }) => {
                    let nomeIcone = 'menu-outline';

                    if (route.name === 'Início') {
                        nomeIcone = focused ? 'book' : 'book-outline';
                    }

                    if (route.name === 'Cadastro') {
                        nomeIcone = focused ? 'person-add' : 'person-add-outline'
                    }
                    if (route.name === 'Relatorio') {
                        nomeIcone = focused ? 'people' : 'people-outline'
                    }
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        > 
            <Draw.Screen name='Estação Meteorológica' component={Dashboard} options={{headerTitleAlign: 'center'}} />
            <Draw.Screen name='Cadastro' component={Cadastro} />
            <Draw.Screen name='Relatório' component={Relatorio} />
        </Draw.Navigator>
    )
}

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Inicio' component={MenuSuperior} options={{ headerShown: false , title: ''}} />
            <Stack.Screen name='Registro' component={Registro} options={{ title: 'Cadsatro de usuário' }} />
        </Stack.Navigator>
    )
}