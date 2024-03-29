import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import { ProductCard } from '../components/ProductCard';

export function ProductListPage({ navigation }) {
  const url = 'https://at-native-products-default-rtdb.firebaseio.com/';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}.json`)
      .then(resp => resp.json())
      .then(respJson => {
        setProducts(respJson);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  function onClickProduto(product) {
    navigation.navigate('ContainerDetailsProduct', { product });
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }, index) => (
            <ProductCard
              key={`product-${index}`}
              product={item}
              action={onClickProduto}
            />
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    marginTop: 35,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
