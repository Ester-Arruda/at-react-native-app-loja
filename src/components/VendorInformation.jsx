import { Text, View, StyleSheet, Image } from 'react-native'

export function VendorInformation({ vendorData }) {
  const { email, name, phone, rating } = vendorData
    
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>{name}</Text>
      </View>
      <View  style={{backgroundColor: '#79C1C1'}}>
        <View style={styles.containerTex}>
          <Text style={styles.textTitle}>email:</Text>
          <Text style={styles.textTitle}>{email}</Text>
        </View>
        <View style={styles.containerTex}>
          <Text style={styles.textTitle}>telefone:</Text>
          <Text style={styles.textTitle}>{phone}</Text>
        </View>
        <View style={styles.containerTex}>
          <Text style={styles.textTitle}>avaliação:</Text>
          <Text style={styles.textTitle}>{rating}</Text>
        </View>
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
  title: {
    width: "100%", 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#ECFCFC',
  },
  containerTex: { 
    width: "100%", 
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#79C1C1',
    borderWidth: 1,
    borderColor: '#ECFCFC'
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    margin:10
  }
});