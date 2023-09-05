import { Button, ScrollView, View } from "react-native";

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Button title="New" color="#841584" onPress={() => navigation.navigate('New')} />
            </View>
            <View>
                <Button title="Details1" onPress={() => navigation.navigate('Details', {id:1})} />
                <Button title="Details2" onPress={() => navigation.navigate('Details', {id:2})} />
                <Button title="Details3" onPress={() => navigation.navigate('Details', {id:3})} />
            </View>
        </ScrollView>
    );
}