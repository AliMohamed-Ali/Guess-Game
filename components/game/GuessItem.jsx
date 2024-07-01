import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuessItem = ({ roundNumber, guess }) => {
  return (
    <View style={style.listItem}>
      <Text style={style.textItem}>#{roundNumber}</Text>
      <Text style={style.textItem}>Opponent Guessed:{guess}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
  },
  textItem: {
    fontFamily: "open-sans",
  },
});

export default GuessItem;
