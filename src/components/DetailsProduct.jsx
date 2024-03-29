import { Text, View, StyleSheet, Image } from 'react-native'

export function DetailsProduct({ name, image, description }) {

  return (
    <View style={styles.container}>
      <View style={styles.containerTex}>
        <Text style={styles.textTitle}>{name}</Text>
        <View style={styles.containerTex}>
          <Image source={{ uri: image }} style={{ width: 150, height: 150, margin: 5, resizeMode: "contain" }} />
        </View>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.textTitle}>Descrição: {description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#79C1C1',
    height: '100%',
    gap: 5,
    padding: 10,
    flexDirection: "column",
  },
  containerTex: { 
    width: "100%", 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ECFCFC'
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    margin: 10,
  },
  containerDescription: {
    backgroundColor: '#ECFCFC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});