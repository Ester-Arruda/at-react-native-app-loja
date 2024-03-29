import { Text, View, StyleSheet, Pressable, Image } from 'react-native'

export function ProductCard({product, action}) {
  const { name, image } = product

  return(
    <Pressable onPress={() => action(product)} style={styles.containerPress}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={{width:100, height:100}} resizeMode="contain" source={{uri: image}}/>
        </View>
        <View>
          <Text style={styles.listItem}>Nome: {name}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerPress: {
    backgroundColor: '#E1F9F9',
    margin: 5,
    height: 150,
  },
  container: {
    height: '100%',
    marginVertical: 1,
    marginHorizontal: 2,
    flexDirection: "column",
    shadowColor: '#000',
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.25,
    elevation: 1,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  listItem: {
    padding: 4,
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  }
});