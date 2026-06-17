

let status = true;

export default function Teste() {
    return (
        <View>
            <Text style={{color: status ? '#fff' : '#000' }}>Texto Colorido</Text>
        </View>
    )
}