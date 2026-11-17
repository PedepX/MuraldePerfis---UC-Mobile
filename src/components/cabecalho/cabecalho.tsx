import {View, Text} from 'react-native'

export default function cabecalho({ name, position, color}: any) {
    return (
        <View>
            <View>
                <Text> {name[0]} </Text>
            </View>
            <View>
                <Text> {name} </Text>
                <Text> {position} </Text>
            </View>
        </View>
    );
}