import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import ContactThum from "./ContactThump";
import ContactListItem from "./ContactListItem";

const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { avatar, name, email, phone, cell, favorite } = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <ContactListItem title="Email" subtitle={email} />
                <ContactListItem title="Work" subtitle={phone} />
                <ContactListItem title="Personal" subtitle={cell} />
                <View style={{ alignItems: 'center' }}>
                    <IconButton
                        icon={favorite ? "star" : "star-outline"}
                        color="#663399"
                        size={20}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ProfileContact;
