import { Button, ScrollView, Text, View } from "react-native";
import EstateForm from "../components/EstateForm";

export default function EstateModify({route, navigation}) {
    const { id } = route.params;

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom:100 }}
        style={{ flex: 1, backgroundColor: '#fff', padding: 17 }}>
            <EstateForm navigation={navigation} id={id}/>
        </ScrollView>
    );
}