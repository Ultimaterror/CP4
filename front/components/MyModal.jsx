import { View, Text, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons/"

export default function MyModal({ children, title, modalVisibility, setModalVisibility }) {
    // const [modalVisibility, setModalVisibility] = useState<boolean>(false)

    return (
        <Modal
            visible={modalVisibility}
            animationType="fade"
            transparent={true}
            onRequestClose={() => { setModalVisibility(false) }}
            style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
        >
            <TouchableWithoutFeedback onPress={() => { setModalVisibility(false) }} >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0,0,0,0.3)",
                    }}
                >
                </View>
            </TouchableWithoutFeedback>
            <View style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                // padding: 35,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                marginTop: "auto"
            }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: "lightgrey", padding: 25 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                    <Pressable onPress={() => setModalVisibility(false)}>
                        <MaterialIcons name='close' color="black" size={22} />
                    </Pressable>
                </View>
                <View style={{ padding: 25 }}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}