import { TouchableHighlight, View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');
const cardWidth = width / 2;
const cardHeight = height / 3 - 20;
import COLORS from '../const/colors';
import Icon from "react-native-vector-icons/Feather";

export const Card = ({ data }) => {
    return (

        <TouchableHighlight
            underlayColor="#FFF"
            activeOpacity={0.9}
        >
            <View style={styles.card}>
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <View>
                        {data}
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{"John Smith"}</Text>
                    <Text style={{ fontSize: 14, color: "red", marginTop: 2 }}>
                        {"3242-1232-1232-2312"}
                    </Text>
                </View>
                <View
                    style={{
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontSize: 18 }}>
                        last time scanned: 04/02/22
                    </Text>
                    <View style={styles.infobtn}>
                        <Icon name="add" size={15} color={"white"} />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    card: {
        height: cardHeight,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 30,
        borderRadius: 15,
        elevation: 13,
        shadowOffset: {
            width: 0,
            height: 5, // for iOS
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        backgroundColor: COLORS.white,
    },
    infobtn: {
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
})