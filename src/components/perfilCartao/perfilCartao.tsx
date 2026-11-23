import {Button, Text, View} from "react-native"
import { useState } from "react";
import Cartao from "../cartao/cartao"
import Cabecalho from "../cabecalho/cabecalho";
import Botao from "../botao/botao";
import styles from './styles'

export default function PerfilCartao({name, position, color, bio}) {

    const [Curtidas, setCurtidas] = useState(0);
    const [Seguir, setSeguir] = useState(false);
    const [mostrarBio, setMostrarBio] = useState(false);

    return (
        <Cartao>
            <Cabecalho name={name} position={position} color={color}/>
            {mostrarBio &&  <Text> {styles.bio} {bio}</Text>}
            <Text style={styles.contadorCurtidas}>❤️ {Curtidas} Curtidas</Text>
            <View style={styles.linhaBotoes}>
                <Botao text="Curtir" onPress={() => setCurtidas(Curtidas + 1)}/>
                <Botao text={Seguir ? 'Seguindo ✓' : 'Seguir'} onPress={() => setSeguir(!Seguir)}/>
                <Botao text={mostrarBio ? 'Ocultar Bio' : 'Ver Bio'} onPress={() => setMostrarBio(!mostrarBio)}/>
            </View>
        </Cartao>
    );
}