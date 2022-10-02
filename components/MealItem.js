
import { StyleSheet, Text, View, Pressable, Platform, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native'


function MealItem({ meal, onPress }) {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('MealDetails', {
            meal
        });
    }

    return (
        <View style={[styles.mealItem]}>
            <Pressable
                android_ripple={{ color: '#817f7f' }}
                style={({ pressed }) =>
                    [styles.buttonContainer, pressed ?
                        styles.pressed : null]}
                onPress={onPressHandler} //onPress
            >
                <View style={styles.innerView}>
                    <View>
                        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>
                    <View style={[styles.textContainer]}>
                        <View style={styles.innerTextContainer}>
                            <Text>DURATION</Text>
                            <Text>{meal.duration}</Text>
                        </View>
                        <View style={styles.innerTextContainer}>
                            <Text>COMPLEXITY</Text>
                            <Text>{meal.complexity}</Text>
                        </View>
                        <View style={styles.innerTextContainer}>
                            <Text>AFFORDABILITY</Text>
                            <Text>{meal.affordability}</Text>
                        </View>
                    </View>

                </View>
            </Pressable>
        </View>

    );
}


export default MealItem;


const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10,
        elevation: 1, //android specific concept
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonContainer: {
        flex: 1,
    },
    pressed: {
        opacity: 0.7
    },
    textContainer: {
        flex: 1,
        padding: 4,
    },
    innerTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200,
    },
    innerView: {
        borderRadius: 8,
        overflow: 'hidden'
    }
});
