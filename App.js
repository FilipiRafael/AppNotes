import { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from './src/componentes/Nota';
import { criaTabela } from './src/services/notas';

export default function App() {

  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    setNotas(todasNotas);
    console.log(notas);
  }

  useEffect(() => {
    criaTabela();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={nota => nota[0]}
      />
      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

