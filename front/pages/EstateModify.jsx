import { Button, ScrollView, Text, View } from "react-native";

export default function EstateModify({route}) {
    const { id } = route.params;

    return (
        <ScrollView>
            <View>
                <Button title="+" color="#ffc512" />
            </View>
            <View>
            <Button title="+" />
            <Text>{id}</Text>

            </View>
        </ScrollView>
    );
}