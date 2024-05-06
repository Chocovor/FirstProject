import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Nom from './component/Nom'


const getNames = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Person = (props) => {
  return (
    <View>
      <Text>Je suis : {props.name}</Text>
    </View>
  )
}

export default function App() {


  return (
    <View style={styles.container}>
      <View style={{padding:10, backgrounColor:'black'}}>
        <Text style={styles.text}>Hi guy</Text>
        <Text style={styles.text}>What's up ?</Text>
        <Text style={styles.text}>Can i help you ?</Text>
        <Text style={{textAlign:"center", 
                      fontStyle:"italic",
                      fontSize:25}}
          >
            {getNames("Jean","Claude","Van Dame")}
            <Person name= "Jeremie" />

            <Nom Name= "James"/>
            <Nom Name= "Julie" Age="18"/>

            <Nom Name='Mike'Age="15"/>
          </Text>
        <StatusBar style="auto" />
        <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />     
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: '10%',
    fontSize: 40,
  },
});
