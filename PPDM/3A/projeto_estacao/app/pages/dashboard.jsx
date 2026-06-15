import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const chartConfig = {
  backgroundGradientFrom: "#11111",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#111111",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(232, 93, 4, ${opacity})`,   // laranja principal
  labelColor: (opacity = 1) => `rgba(136, 136, 136, ${opacity})`,
  strokeWidth: 2.5,
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: "#E85D04",
    fill: "#0D0D0D",
  },
  propsForBackgroundLines: {
    stroke: "#2A2A2A",
    strokeDasharray: "",
  },
};

export default function Dashboard() {
  const dadosGraficoLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{ data: [20, 30, 45, 66, 77, 99] }],
    legend: ['Medições'],
  };

  const dadosGraficoPizza = [
    { name: 'Airport',    temp: 23, color: '#84daef', legendFontColor: '#888888', legendFontSize: 12 },
    { name: 'Centro',     temp: 35, color: '#f43154', legendFontColor: '#888888', legendFontSize: 12 },
    { name: 'Esplanada',  temp: 25, color: '#51dd9c', legendFontColor: '#888888', legendFontSize: 12 },
  ];

  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.scroll}>
      {/* ── Cabeçalho ── */}
      <View style={estilos.header}>
        <Text style={estilos.heroEyebrow}>MONITORAMENTO</Text>
        <Text style={estilos.heroTitle}>Clima em{'\n'}tempo real</Text>
        <View style={estilos.accentBar} />
      </View>

      {/* ── Cards de stats ── */}
      <View style={estilos.statsRow}>
        <View style={estilos.statCard}>
          <Text style={estilos.statLabel}>TEMP. MÉDIA</Text>
          <Text style={estilos.statValue}>27°C</Text>
          <Text style={estilos.statSub}>↑ 2° vs ontem</Text>
        </View>
        <View style={estilos.statCard}>
          <Text style={estilos.statLabel}>MEDIÇÕES</Text>
          <Text style={estilos.statValue}>99</Text>
          <Text style={estilos.statSub}>Jun · pico máx.</Text>
        </View>
      </View>

      {/* ── Gráfico de linha ── */}
      <View style={estilos.chartCard}>
        <View style={estilos.cardHeader}>
          <Text style={estilos.cardTitle}>Medições mensais</Text>
          <View style={estilos.badge}>
            <Text style={estilos.badgeText}>JAN–JUN</Text>
          </View>
        </View>
        <LineChart
          data={dadosGraficoLinha}
          width={width - 80}
          height={200}
          chartConfig={chartConfig}
          bezier
          withShadow={false}
          style={estilos.chartInner}
        />
      </View>

      {/* ── Gráfico de pizza ── */}
      <View style={estilos.chartCard}>
        <View style={estilos.cardHeader}>
          <Text style={estilos.cardTitle}>Bairros de Mirandópolis</Text>
          <View style={estilos.badge}>
            <Text style={estilos.badgeText}>TEMP °C</Text>
          </View>
        </View>
        <PieChart
          data={dadosGraficoPizza}
          width={width - 80}
          height={200}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="12"
          style={estilos.chartInner}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  /* ── Cabeçalho ── */
  header: {
    paddingTop: 40,
    marginBottom: 24,
  },
  heroEyebrow: {
    color: '#F48C06',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 4,
  },
  heroTitle: {
    color: '#F5F0E8',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  accentBar: {
    width: 44,
    height: 3,
    backgroundColor: '#E85D04',
    borderRadius: 2,
    marginTop: 12,
  },
  /* ── Stats ── */
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 10,
    padding: 14,
  },
  statLabel: {
    color: '#F48C06',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },
  statValue: {
    color: '#F5F0E8',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  statSub: {
    color: '#888',
    fontSize: 11,
    marginTop: 2,
  },
  /* ── Cards dos gráficos ── */
  chartCard: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardTitle: {
    color: '#F5F0E8',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  badge: {
    backgroundColor: '#E85D04',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    color: '#FAA307',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  chartInner: {
    borderRadius: 8,
  },
});