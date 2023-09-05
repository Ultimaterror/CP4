import { Button, ScrollView, Text, View } from "react-native";
import { useReloadContext } from "../context/ReloadContext";
import { useEffect, useState } from "react";
import EstateCard from "../components/EstateCard";
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

export default function EstateDetails({ navigation, route }) {
    const { reload, setReload } = useReloadContext()
    const [estate, setEstate] = useState({})
    const { id } = route.params;

    useEffect(() => {
        fetch(`http://192.168.1.152:5000/estates/${id}`)
            .then((res) => res.json())
            .then((data) => setEstate(data))
            .catch((err) => console.log(err))
    }, [reload])

    function onDelete() {
        fetch(`http://192.168.1.152:5000/estates/${id}`, { method: "DELETE"})
        .then(() => {
            setReload(!reload)
            navigation.dispatch(popAction);
        })
        .catch((err) => console.log(err))
    }

    return (
        <ScrollView>
            <EstateCard key={estate.id} estate={estate} navigation={navigation} />
            <View>
                <Button title="Modifier" onPress={() => navigation.navigate('Modifier', { id })} />
            </View>
            <View>
                <Button title="Supprimer" color="#ef2c2c" onPress={() => onDelete()}/>
            </View>
        </ScrollView>
    );
}