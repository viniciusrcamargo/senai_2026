import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [herois, setHerois] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregaHeroes = async () => {
    try {
      setCarregando(true);
      setErro(null);

      const response = await fetch('https://superheroes-api-one.vercel.app/api/herois');
      if (!response.ok) {
        throw new Error('Erro ao buscar heróis');
      }

      const data = await response.json();
      const lista = Array.isArray(data) ? data : data?.herois || [];
      setHerois(lista);
    } catch (e) {
      setErro(e.message || 'Erro inesperado');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregaHeroes();
  }, []);

  const renderItem = ({ item }) => (
    <View >
      {item.foto && (
        <Image source={{ uri: item.foto }}  />
      )}
      <Text >{item.nome}</Text>
      <Text >Força: {item.forca}</Text>
      <Text >Habilidades:</Text> <Text >{item.habilidade}</Text>
    </View>
  );

  return (
    <View >
      <Text >Lista de Heróis</Text>
      {carregando && <Text>Carregando heróis...</Text>}
      {erro && <Text >Erro: {erro}</Text>}
      {!carregando && !erro && herois.length === 0 && <Text>Nenhum herói encontrado.</Text>}
      {!carregando && !erro && (
        <FlatList
          data={herois}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}

        />
      )}
    </View>
  );
}

