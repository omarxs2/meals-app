
import { useLayoutEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route, navigation }) {

    const meal = route.params.meal;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <Text style={{ color: 'white' }}>Hi</Text>
            }
        });
    }, [navigation])

    return (
        <ScrollView>
            <MealDetails meal={meal} />
        </ScrollView>
    );
}


export default MealDetailScreen;
