import { ScrollView, Text, View } from "react-native";
import { useReloadContext } from "../context/ReloadContext";
import { useEffect, useState } from "react";
import EstateCard from "../components/EstateCard";
import { StackActions } from '@react-navigation/native';
import { Button } from "react-native-paper";
import MyModal from "../components/MyModal";

const popAction = StackActions.pop(1);

export default function EstateDetails({ navigation, route }) {
    const [modalDelete, setModalDelete] = useState(false)
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
        fetch(`http://192.168.1.152:5000/estates/${id}`, { method: "DELETE" })
            .then(() => {
                setReload(!reload)
                navigation.dispatch(popAction);
            })
            .catch((err) => console.log(err))
    }

    return (
        <ScrollView>
            <EstateCard key={estate.id} estate={estate} navigation={navigation} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Button mode="contained" onPress={() => navigation.navigate('Modifier', { id })} >
                    Modifier
                </Button>
                <Button mode="contained" buttonColor="red" onPress={() => setModalDelete(true)}>
                    Supprimer
                </Button>
            </View>
            <MyModal title='Supprimer définitivement ?' modalVisibility={modalDelete} setModalVisibility={setModalDelete}>
                <Button textColor="white" buttonColor="red" onPress={() => onDelete()}>
                    Supprimer
                </Button>
            </MyModal>
        </ScrollView>
    );
}