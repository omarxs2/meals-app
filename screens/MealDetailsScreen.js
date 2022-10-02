
import { useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';

function MealDetailScreen({ route, navigation }) {

    const meal = route.params.meal;
    const [color, setColor] = useState('#fff')

    const onPressHandler = () => {
        if (color == '#fff') {
            setColor('#eacf26');
        } else {
            setColor('#fff');
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <IconButton color={color} icon={'star'} onPress={onPressHandler} />
            }
        });


    }, [navigation, color])

    return (
        <ScrollView>
            <MealDetails meal={meal} />
        </ScrollView>
    );
}


export default MealDetailScreen;
