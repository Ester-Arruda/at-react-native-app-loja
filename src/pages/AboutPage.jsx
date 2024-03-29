import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

export function AboutPage() {
  const url = 'https://at-native-products-about-default-rtdb.firebaseio.com/';
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const { aboutCompany, history, staff } = about?.about || {};

  useEffect(() => {
    fetch(`${url}.json`)
      .then(resp => resp.json())
      .then(respJson => {
        if (Array.isArray(respJson) && respJson.length > 0) {
          setAbout(respJson[0]);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTex}>
        <Text style={styles.textTitle}>Sobre a Exproduto: {aboutCompany}</Text>
      </View>
      <View style={styles.containerTex}>
        <Text style={styles.textTitle}>Nossa história: {history}</Text>
      </View>
      <View>
        <Text style={styles.textTitle}>Nossa equipe: {staff}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    gap: 5,
    padding: 10,
    flexDirection: 'column',
  },
  containerTex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    margin: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
