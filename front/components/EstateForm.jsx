import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button as PaperButton, Card, RadioButton, Text, TextInput, IconButton } from 'react-native-paper';
import { useReloadContext } from '../context/ReloadContext';
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

const EstateForm = ({ navigation, id = null }) => {
    const { reload, setReload } = useReloadContext()
    const [estateData, setEstateData] = useState({
        price: "",
        room: 0,
        bedroom: 0,
        size: "",
        type: "",
        place: "YYY",
        picture: "X"
    })

    useEffect(() => {
        if (id !== null) {
            fetch(`http://192.168.1.152:5000/estates/${id}`)
                .then((res) => res.json())
                .then((data) => setEstateData({...data, size: String(data.size)}))
                .catch((err) => console.log(err))
        }
    }, [])

    const handleSubmit = async (e) => {
        let method = "POST"
        let url = `http://192.168.1.152:5000/estates/`
        if (id !== null) {
            method = "PUT"
            url += `${id}`
        }
        fetch(url, { method, body: JSON.stringify(estateData), headers: { "Content-type": "application/json" } })
            .then(() => {
                setReload(!reload)
                navigation.dispatch(popAction);
            })
            .catch((err) => console.log(err))
    }

    return (
        <View style={{ width: "90%", gap: 15 }}>
            <RadioButton.Group onValueChange={newValue => setEstateData({ ...estateData, type: newValue })} value={estateData.type}>
                <RadioButton.Item value="Maison" label='Maison' />
                <RadioButton.Item value="Appartement" label='Appartement' />
            </RadioButton.Group>
            <TextInput
                label="Prix (en €)"
                inputMode='numeric'
                value={estateData.price}
                onChangeText={newValue => setEstateData({ ...estateData, price: newValue })}
            />
            <TextInput
                label="Taille (en m²)"
                inputMode='numeric'
                value={estateData.size}
                onChangeText={newValue => setEstateData({ ...estateData, size: newValue })}
            />
            <TextInput
                label="Lieu"
                value={estateData.place}
                onChangeText={newValue => setEstateData({ ...estateData, place: newValue })}
            />
            <View>
                <Text style={{ textAlign: "center", fontSize: 16 }}>Nombre de pièces</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    <IconButton
                        icon="minus-thick"
                        mode='contained'
                        iconColor="white"
                        containerColor="red"
                        onPress={() => estateData.room > 0 && setEstateData({ ...estateData, room: estateData.room - 1 })}
                        disabled={estateData.room === 0}
                    />
                    <Text style={{ fontSize: 20 }}>{estateData.room}</Text>
                    <IconButton
                        icon="plus-thick"
                        mode='contained'
                        iconColor="white"
                        containerColor="green"
                        onPress={() => setEstateData({ ...estateData, room: estateData.room + 1 })}
                    />
                </View>
            </View>
            <View>
                <Text style={{ textAlign: "center", fontSize: 16 }}>Nombre de chambres</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    <IconButton
                        icon="minus-thick"
                        mode='contained'
                        iconColor="white"
                        containerColor="red"
                        onPress={() => estateData.bedroom > 0 && setEstateData({ ...estateData, bedroom: estateData.bedroom - 1 })}
                        disabled={estateData.bedroom === 0}
                    />
                    <Text style={{ fontSize: 20 }}>{estateData.bedroom}</Text>
                    <IconButton
                        icon="plus-thick"
                        mode='contained'
                        iconColor="white"
                        containerColor="green"
                        onPress={() => setEstateData({ ...estateData, bedroom: estateData.bedroom + 1 })}
                    />
                </View>
            </View>
            <PaperButton mode="contained" onPress={() => handleSubmit()}>Ajouter</PaperButton>
        </View>
    )
};

export default EstateForm;