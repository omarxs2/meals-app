
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

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
            <View style={styles.innerView}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <View >
                    <View style={styles.innerTextContainer}>
                        <Text style={styles.innerText}>DURATION</Text>
                        <Text style={styles.innerText}>{meal.duration}</Text>
                    </View>
                    <View style={styles.innerTextContainer}>
                        <Text style={styles.innerText}>COMPLEXITY</Text>
                        <Text style={styles.innerText}>{meal.complexity}</Text>
                    </View>
                    <View style={styles.innerTextContainer}>
                        <Text style={styles.innerText}>AFFORDABILITY</Text>
                        <Text style={styles.innerText}>{meal.affordability}</Text>
                    </View>


                    <View style={{ alignItems: 'center' }}>


                        <View style={styles.innerTextContainer}>
                            <Text style={styles.innerText}>
                                {` isGlutenFree `}
                                {meal.isGlutenFree ?
                                    <Ionicons name="md-shield-checkmark"
                                        size={16} color="green" />
                                    :
                                    <Ionicons name="close-circle"
                                        size={16} color="red"
                                    />
                                }
                            </Text>
                            <Text style={styles.innerText}>{` isVegan `}

                                {meal.isVegan ?
                                    <Ionicons name="md-shield-checkmark"
                                        size={16} color="green" />
                                    :
                                    <Ionicons name="close-circle"
                                        size={16} color="red"
                                    />
                                }
                            </Text>
                            <Text style={styles.innerText}>{` isVegetarian `}

                                {meal.isVegetarian ?
                                    <Ionicons name="md-shield-checkmark"
                                        size={16} color="green" />
                                    :
                                    <Ionicons name="close-circle"
                                        size={16} color="red"
                                    />
                                }</Text>
                            <Text style={styles.innerText}>{` isLactoseFree `}

                                {meal.isLactoseFree ?
                                    <Ionicons name="md-shield-checkmark"
                                        size={16} color="green" />
                                    :
                                    <Ionicons name="close-circle"
                                        size={16} color="red"
                                    />
                                }</Text>
                        </View>

                        <Text style={styles.title}>Ingredients:</Text>
                        <View style={styles.listContainer}>

                            {
                                meal.ingredients.map((ing, i) => {
                                    return (
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemText} key={i}>{ing}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <Text style={styles.title}>Steps:</Text>
                        <View style={styles.listContainer}>

                            {
                                meal.steps.map((stp, i) => {
                                    return (
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemText} key={i}>{i + 1}- {stp}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>

            </View>
        </View>

    );
}


export default MealItem;


const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        marginBottom: 20

    },
    textContainer: {
        flex: 1,
        padding: 4,
    },
    innerTextContainer: {
        padding: 4,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    innerText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff'
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: 200,
    },
    innerView: {
        overflow: 'hidden'
    },
    listItem: {
        backgroundColor: '#8aa0b4',
        margin: 4,
        padding: 4,
        borderRadius: 8,
    },
    listItemText: {
        textAlign: 'left'
    },
    listContainer: {
        flex: 1,
    }

});
