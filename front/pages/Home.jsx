import { Button, ScrollView, View } from "react-native";
import EstateCard from "../components/EstateCard";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch("http://192.168.1.152:5000/estates")
            .then((res) => res.json())
            .then((data) => setEstates(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom:100 }}
            style={{ flex: 1, backgroundColor: '#fff', padding: 17 }}>
            <View>
                <Button title="New" color="#841584" onPress={() => navigation.navigate('New')} />
            </View>
            <View style={{ width: "90%" }}>
                {estates.map(estate =>
                    <EstateCard key={estate.id} estate={estate} navigation={navigation} />
                )}
            </View>
        </ScrollView>
    );
}