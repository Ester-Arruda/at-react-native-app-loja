import { Text, View, StyleSheet } from 'react-native'

export function Comments({ commentUser }) {
    const formatDate = (dateString) => {
        const dateParts = dateString.split('-');
        return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      };
    
      return (
        <View>
          {commentUser.map((item, index) => {
            const formattedDate = formatDate(item.date);
            return (
              <View key={index} style={styles.container}>
                <View style={styles.containerName}>
                  <Text style={styles.text}>nome: </Text>
                  <Text style={styles.textBold}>{item.user}</Text>
                </View>
                <View style={styles.containerName}>
                  <Text style={styles.text}>data: </Text>
                  <Text style={styles.textBold}>{formattedDate}</Text>
                </View>
                <View style={styles.containerTex}>
                  <Text style={styles.text}>comentário: </Text>
                  <Text style={styles.textBold}>{item.comment}</Text>
                </View>
                <View style={styles.containerTex}>
                  <Text style={styles.text}>avaliação: </Text>
                  <Text style={styles.textBold}>{item.rating}</Text>
                </View>
              </View>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
    backgroundColor: '#79C1C1',
    margin: 5
  },
  containerName: {
    display: 'flex', 
    flexDirection: 'row',
    padding: 7
  },
  containerTex: { 
    width: "100%", 
    display: 'flex', 
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 7
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    margin:10
  },
  text: {
    fontSize: 15,

  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});