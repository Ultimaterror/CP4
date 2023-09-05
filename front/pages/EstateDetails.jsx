import { Button, ScrollView, Text, View } from "react-native";

export default function EstateDetails({navigation, route}) {
    const { id } = route.params;
    return (
        <ScrollView>
            <View>
                <Button title="Modify" color="#ef2c2c" onPress={() => navigation.navigate('Modify', {id})} />
            </View>
            <View>
            <Button title="+" />
            <Text>{id}</Text>
            </View>
        </ScrollView>
    );
}