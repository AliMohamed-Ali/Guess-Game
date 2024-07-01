import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver ,setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);
  const [fontsLoaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setRoundNumber(numberOfRounds);
  }
  function restartGameHnadler(){
    setUserNumber(null);
    setRoundNumber(0);
  }
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} onRestart={restartGameHnadler} roundNumber={roundNumber} />
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
