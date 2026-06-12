import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const dadosLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{ data: [65, 66, 68, 77, 50, 40] }]
};

const dadosPizza = [
    { name: 'Jd Paulista', temp: 18, color: '#378ADD', legendFontColor: '#85B7EB', legendFontSize: 12 },
    { name: 'Portal dos Nobres', temp: 20, color: '#185FA5', legendFontColor: '#85B7EB', legendFontSize: 12 },
    { name: 'Três Pontes', temp: 15, color: '#0C447C', legendFontColor: '#85B7EB', legendFontSize: 12 },
    { name: 'Jd Alto da Boa Vista', temp: 15, color: '#E6F1FB', legendFontColor: '#85B7EB', legendFontSize: 12 },
];

const chartConfig = {
    backgroundGradientFrom: '#0C447C',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#042C53',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(55, 138, 221, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(133, 183, 235, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
        r: '4',
        strokeWidth: '2',
        stroke: '#378ADD',
    },
};

export default function Dashboard() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.inner}>

            <Text style={styles.title}>Estação Meteorológica Sesi</Text>
            <Text style={styles.subtitle}>Monitoramento Ambiental</Text>

            {/* Card de Últimas Medições */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Últimas Medições</Text>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Temperatura</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.row}>
                    <View style={styles.measureItem}>
                        <Text style={styles.label}>12/06/2026</Text>
                        <Text style={styles.measureValue}>25ºC</Text>
                    </View>
                    <View style={styles.measureItem}>
                        <Text style={styles.label}>11/06/2026</Text>
                        <Text style={styles.measureValue}>22ºC</Text>
                    </View>
                </View>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Umidade</Text>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.row}>
                    <View style={styles.measureItem}>
                        <Text style={styles.label}>12/06/2026</Text>
                        <Text style={styles.measureValue}>60%</Text>
                    </View>
                    <View style={styles.measureItem}>
                        <Text style={styles.label}>11/06/2026</Text>
                        <Text style={styles.measureValue}>80%</Text>
                    </View>
                </View>
            </View>

            {/* Card dos Gráficos */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Acompanhe em Tempo Real</Text>

                <Text style={styles.label}>TEMPERATURA MENSAL (ºC)</Text>
                <LineChart
                    data={dadosLinha}
                    width={width - 80}
                    height={200}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>por bairro</Text>
                    <View style={styles.dividerLine} />
                </View>

                <Text style={styles.label}>BAIRROS DE MIRANDÓPOLIS</Text>
                <PieChart
                    data={dadosPizza}
                    width={width - 80}
                    height={200}
                    chartConfig={chartConfig}
                    accessor="temp"
                    backgroundColor="transparent"
                    style={styles.chart}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#042C53',
    },
    inner: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    title: {
        color: '#E6F1FB',
        fontSize: 26,
        fontWeight: '500',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        color: '#85B7EB',
        fontSize: 14,
        marginBottom: 28,
    },
    card: {
        backgroundColor: '#0C447C',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#185FA5',
        padding: 24,
        width: '100%',
        marginBottom: 16,
    },
    sectionTitle: {
        color: '#E6F1FB',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16,
    },
    label: {
        color: '#85B7EB',
        fontSize: 11,
        letterSpacing: 0.8,
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 8,
    },
    measureItem: {
        flex: 1,
        backgroundColor: '#042C53',
        borderWidth: 0.5,
        borderColor: '#185FA5',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 11,
    },
    measureValue: {
        color: '#378ADD',
        fontSize: 20,
        fontWeight: '500',
    },
    chart: {
        borderRadius: 8,
        marginBottom: 8,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
        gap: 8,
    },
    dividerLine: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#185FA5',
    },
    dividerText: {
        color: '#185FA5',
        fontSize: 12,
    },
});