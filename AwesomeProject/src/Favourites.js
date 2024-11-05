import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ContactThum from './ContactThum';

const Favourites = ({ navigation }) => {
    const contacts = useSelector(state => state.contacts);
    const favourites = contacts.filter(contact => contact.favorite);

    const renderFavouriteThumbnail = ({ item }) => (
        <ContactThum
            avatar={item.avatar}
            name={item.name}
            phone={item.phone}
            onPress={() => navigation.navigate("ProfileContact", { contact: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={favourites}
                keyExtractor={(item) => item.phone}
                renderItem={renderFavouriteThumbnail}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: 'center',
        flex: 1,
    },
});

export default Favourites;
