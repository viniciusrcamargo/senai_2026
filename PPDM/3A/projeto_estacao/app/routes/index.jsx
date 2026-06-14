import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Cadastro from '../pages/cadastro';
import Registro from '../pages/registro';
import Relatorio from '../pages/relatorio';

const Stack = createStackNavigator();
const Draw = createDrawerNavigator();

/* ── Componente customizado do Drawer ── */
function DrawerContent({ state, descriptors, navigation }) {
  return (
    <View style={estilos.drawerContainer}>
      {/* Cabeçalho do Drawer */}
      <View style={estilos.drawerHeader}>
        <Text style={estilos.drawerEyebrow}>NAVEGAÇÃO</Text>
        <Text style={estilos.drawerTitle}>Estação{'\n'}Meteorológica</Text>
        <View style={estilos.accentBar} />
      </View>

      {/* Itens de navegação */}
      <View style={estilos.drawerItems}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.drawerLabel ?? route.name;
          const isFocused = state.index === index;

          const icones = {
            'Estação Meteorológica': isFocused ? 'stats-chart'        : 'stats-chart-outline',
            'Cadastro':              isFocused ? 'person-add'          : 'person-add-outline',
            'Relatório':             isFocused ? 'people'              : 'people-outline',
          };
          const nomeIcone = icones[route.name] ?? 'menu-outline';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[
                estilos.drawerItem,
                isFocused && estilos.drawerItemFocused,
              ]}
              activeOpacity={0.7}
            >
              <View style={estilos.drawerItemIcon}>
                <Ionicons
                  name={nomeIcone}
                  size={20}
                  color={isFocused ? '#FAA307' : '#555'}
                />
              </View>
              <Text
                style={[
                  estilos.drawerItemLabel,
                  isFocused && estilos.drawerItemLabelFocused,
                ]}
              >
                {label}
              </Text>
              {isFocused && <View style={estilos.drawerItemDot} />}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Divisor + rodapé */}
      <View style={estilos.drawerFooter}>
        <View style={estilos.dividerLine} />
        <Text style={estilos.drawerFooterText}>v1.0.0</Text>
      </View>
    </View>
  );
}

/* ── Drawer Navigator ── */
function MenuSuperior() {
  return (
    <Draw.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: estilos.header,
        headerTintColor: '#F48C06',
        headerTitleStyle: estilos.headerTitle,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        /* ícone do hambúrguer */
        headerLeftContainerStyle: { paddingLeft: 8 },
      }}
    >
      <Draw.Screen
        name="Estação Meteorológica"
        component={Dashboard}
        options={{ title: 'Estação Meteorológica' }}
      />
      <Draw.Screen name="Cadastro"  component={Cadastro}  />
      <Draw.Screen name="Relatório" component={Relatorio} />
    </Draw.Navigator>
  );
}

/* ── Stack Navigator raiz ── */
export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login"   component={Login}        options={{ headerShown: false }} />
      <Stack.Screen name="Inicio"  component={MenuSuperior} options={{ headerShown: false }} />
      <Stack.Screen name="Registro" component={Registro}   options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/* ── Estilos ── */
const estilos = StyleSheet.create({
  /* Header da tela */
  header: {
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
    elevation: 0,
  },
  headerTitle: {
    color: '#F5F0E8',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },

  /* Drawer */
  drawerContainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 56,
  },

  /* Cabeçalho do Drawer */
  drawerHeader: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  drawerEyebrow: {
    color: '#F48C06',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 6,
  },
  drawerTitle: {
    color: '#F5F0E8',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  accentBar: {
    width: 44,
    height: 3,
    backgroundColor: '#E85D04',
    borderRadius: 2,
    marginTop: 12,
  },

  /* Itens */
  drawerItems: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 4,
  },
  drawerItemFocused: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  drawerItemIcon: {
    width: 32,
    alignItems: 'center',
  },
  drawerItemLabel: {
    flex: 1,
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
    marginLeft: 10,
  },
  drawerItemLabelFocused: {
    color: '#F5F0E8',
  },
  drawerItemDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E85D04',
  },

  /* Rodapé */
  drawerFooter: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    gap: 14,
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginBottom: 14,
  },
  drawerFooterText: {
    color: '#444',
    fontSize: 11,
    letterSpacing: 1,
  },
});