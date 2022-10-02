
import { StyleSheet, Text, View, Pressable, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'


function CategoryGridTile({ title, color, onPress }) {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('MealsOverview');
    }

    return (
        <View style={[styles.gridItem]}>
            <Pressable
                android_ripple={{ color: '#817f7f' }}
                style={({ pressed }) =>
                    [styles.buttonContainer, pressed ?
                        styles.pressed : null]}
                onPress={onPress} //or -> onPressHandler
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>

    );
}


export default CategoryGridTile;


const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 4,
        width: deviceWidth / 2,
        height: deviceWidth / 2,
        borderRadius: 8,
        elevation: 1, //android specific concept
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonContainer: {
        flex: 1,
    },
    pressed: {
        opacity: 0.7
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },


});
