import { Button, ScrollView, View } from "react-native";
import EstateForm from "../components/EstateForm";

export default function EstateNew({navigation}) {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom:100 }}
        style={{ flex: 1, backgroundColor: '#fff', padding: 17 }}>
            <EstateForm navigation={navigation} />
        </ScrollView>
    );
}