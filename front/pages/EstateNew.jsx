import { Button, ScrollView, View } from "react-native";

export default function Home() {
    return (
        <ScrollView>
            <View>
                <Button title="+" color="#8fce00" />
            </View>
            <View>
            <Button title="+" />
            </View>
        </ScrollView>
    );
}