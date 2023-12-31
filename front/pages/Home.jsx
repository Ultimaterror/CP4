import { ScrollView, View } from "react-native";
import EstateCard from "../components/EstateCard";
import { useEffect, useState } from "react";
import { useReloadContext } from "../context/ReloadContext";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
    const [estates, setEstates] = useState([])
    const { reload } = useReloadContext()


    useEffect(() => {
        fetch("http://192.168.1.152:5000/estates")
            .then((res) => res.json())
            .then((data) => setEstates(data))
            .catch((err) => console.log(err))
    }, [reload])

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom:100 }}
            style={{ flex: 1, backgroundColor: '#fff', padding: 17 }}>
            <View>
                <Button mode="contained" onPress={() => navigation.navigate('Nouveau')} icon="plus-thick" >
                    Nouveau
                </Button>
            </View>
            <View style={{ width: "90%" }}>
                {estates.map(estate =>
                    <EstateCard key={estate.id} estate={estate} navigation={navigation} />
                )}
            </View>
        </ScrollView>
    );
}