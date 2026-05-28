import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login';
import Atendimentos from '../pages/atendimentos';
import Cadastro from '../pages/cadastro';
import Profissionais from '../pages/profissionais';

//import dos navegadores
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function AbasInferiores() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FF914D',
                tabBarInactiveTintColor: '#777',
                tabBarIcon: ({ color, size, focused }) => {
                    let nomeIcone = 'elipse-outline';

                    if (route.name === 'Atendimentos') {
                        nomeIcone = focused ? 'calendar' : 'calendar-outline'
                    }
                    if (route.name === 'Profissionais') {
                        nomeIcone = focused ? 'people' : 'people-outline'
                    }
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        >
            <Tabs.Screen name='Atendimentos' component={Atendimentos} />
            <Tabs.Screen name='Profissionais' component={Profissionais} />
        </Tabs.Navigator>
    )
}

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
                        nomeIcone = focused ? 'paw' : 'paw-outline';
                    }

                    if (route.name === 'Atendimentos') {
                        nomeIcone = focused ? 'calendar' : 'calendar-outline'
                    }
                    if (route.name === 'Profissionais') {
                        nomeIcone = focused ? 'people' : 'people-outline'
                    }
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        > 
            <Draw.Screen name='Sesi - Pet' component={AbasInferiores} options={{headerTitleAlign: 'center'}} />
            <Draw.Screen name='Atendimentos' component={Atendimentos} />
            <Draw.Screen name='Profissionais' component={Profissionais} />
        </Draw.Navigator>
    )
}

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadsatro de usuário' }} />
            <Stack.Screen name='Principal' component={MenuSuperior} options={{ headerShown: false , title: ''}} />
        </Stack.Navigator>
    )
}