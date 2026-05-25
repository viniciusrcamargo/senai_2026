import {View, Text, StyleSheet} from 'react-native';

export default function Header({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#1c6ed9',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop: 15
    }, 
    titulo:{
        fontSize: 25,
        fontWeight: 700,
        color: 'white'
    },
    subtitulo:{
        fontSize: 14,
        color: '#e67a0e',
        marginTop: 4
    }
})