import { StyleSheet, SafeAreaView,Image, Platform, ScrollView,Text, View} from 'react-native';
import PokemonCard from './components/PokemonCard';
export default function App() {
  const charizardData = {
    name: "Charizard",
    image: require("./assets/Red.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch","Ember","Growl","Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/Blue.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle","Water Gun","Tail Whip","Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/Green.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle","Vine Whip","Growl","Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/Yellow.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack","Thunderbolt","Tail Whip","Growl"],
    weaknesses: ["Ground"],
  };

  const ballImg= require('./assets/ball.png')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Pokemon Card</Text>
          <Image  
            source={ballImg}
            style={styles.ball}
          />
        </View>
      <ScrollView>
        
        <PokemonCard {...charizardData}/>
        <PokemonCard {...squirtleData}/>
        <PokemonCard {...bulbasaurData}/>
        <PokemonCard {...pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    
    
  },
  headerContainer: {
    marginBottom: 10,
    alignItems: "center"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  ball: {
    marginTop: 10,
    width: '100%',
    height: 30,
    resizeMode: "contain"
  }
});
