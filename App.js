import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
    description: "Charmander is a small, bipedal, lizard-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, along with all of its evolved forms, has a flame that is constantly burning on the end of its tail."
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
    description: "Squirtle, known as the Tiny Turtle Pokémon, are turtle Pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours. Their skin is a light blue, and they possess a long, curled tail. When feeling threatened, Squirtle withdraw their limbs into their brown-orange shells and spray water from their mouth with great force, either to attack their opponent or merely to intimidate it. If attacked anyway, their shells are resilient, and provide excellent protection."
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    description: "In the Pokémon franchise, Bulbasaur are small, squat amphibian and plant Pokémon that move on all four legs, and have blue-green bodies with darker blue-green spots. As a Bulbasaur undergoes evolution into Ivysaur and then later into Venusaur, the bulb on its back blossoms into a large flower."
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
    description: "Pikachu was designed around the concept of electricity. They are creatures that have short, yellow fur with brown markings covering their backs and parts of their lightning bolt-shaped tails. They have black-tipped, pointed ears and red circular pouches on their cheeks, which can spark with electricity."
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
});
