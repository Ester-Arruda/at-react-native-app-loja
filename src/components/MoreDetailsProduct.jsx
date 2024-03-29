import { Text, View, StyleSheet } from 'react-native'

export function MoreDetailsProduct({ name, price, technicalSpecifications }) {
    
  function showTechnicalSpecifications() {
    const entries = Object.entries(technicalSpecifications);
    return entries.map(([key, value]) => {
      return (
        <View key={key} style={styles.containerPrice}>
          <Text style={styles.textTitle}>{key}:</Text>
          <Text style={styles.textTitle}>{value}</Text>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.textTitle}>{name}</Text>
      </View>
      <View style={{backgroundColor: '#79C1C1'}}>
        <View style={styles.containerPrice}>
          <Text style={styles.textTitle}>preço:</Text>
          <Text style={styles.textTitle}>{parseFloat(price).toFixed(2)}R$</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textTitle}>Detalhes Técnicos do produto</Text>
        </View>
        {showTechnicalSpecifications()}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    gap: 5,
    padding: 10,
    flexDirection: "column",
  },
  containerText: { 
    width: "100%", 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ECFCFC',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    marginVertical:10
  },
  containerPrice: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ECFCFC'
  }
});


