import {createStackNavigator } from '@react-navigation/stack';
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

function abasInferiores(){
    <Tabs.Navigator
        screenOptions={({route}) => ({
            headerShown: true,
            tabBarActiveTintColor: '#FF914D',
            tabBarInactiveTintColor: '#777',
            tabBarIcon: ({color, size, focused}) => {
                let nomeIcone = 'elipse-outline';

                if(route.name === 'Atendimentos'){
                    nomeIcone = focused ? 'calendar' : 'calendar-outline'
                }
                if( route.name === 'Profissionais'){
                     nomeIcone = focused ? 'people' : 'people-outline'
                }
                return <Ionicon name={nomeIcone} size={size} color={color}/>
            } 
        })}
    >
        <Tabs.Screen name='Atendimentos' component={<Atendimentos/>}/>
        <Tabs.Screen name='Profissionais' component={<Profissionais />}/>
    </Tabs.Navigator>
}

function menuSuperior(){
    <Draw.Navigator
        screenOptions={({route}) => ({
            headerShown: true,
            tabBarActiveTintColor: '#FF914D',
            tabBarInactiveTintColor: '#777',
            tabBarIcon: ({color, size, focused}) => {
                let nomeIcone = 'menu-outline';

                if(route.name === 'Atendimentos'){
                    nomeIcone = focused ? 'calendar' : 'calendar-outline'
                }
                if( route.name === 'Profissionais'){
                     nomeIcone = focused ? 'people' : 'people-outline'
                }
                return <Ionicon name={nomeIcone} size={size} color={color}/>
            } 
        })}
    >
        <Draw.Screen name='Início' component={abasInferiores}/>
        <Draw.Screen name='Atendimentos' component={<Atendimentos/>}/>
        <Draw.Screen name='Profissionais' component={<Profissionais />}/>
    </Draw.Navigator>
}

export default function Rotas(){p
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'Cadsatro de usuário'}}/>
            <Stack.Screen name='Principal' component={menuSuperior} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}