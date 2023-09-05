import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const EstateCard = ({ navigation, estate }) => (
    <Card onPress={() => navigation.navigate('Details', { id: estate.id })} style={{margin:10}}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={{ paddingTop: 10 }}>
            <Text variant="titleLarge">{estate.price} €</Text>
            <Text variant="bodyMedium">{estate.type} - {estate.size}m²</Text>
            <Text variant="bodyMedium">{estate.room} pièces - {estate.bedroom} chambres</Text>
        </Card.Content>
    </Card>
);

export default EstateCard;