
import { useContext, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorite-context';

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const meal = route.params.meal;
    const mealIsFav = favoriteMealsCtx.ids.includes(meal.id);

    const onPressHandler = () => {
        if (mealIsFav) {
            favoriteMealsCtx.removeFav(meal.id)
        }
        else {
            favoriteMealsCtx.addFav(meal.id)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <IconButton color={mealIsFav ? '#eacf26' : '#fff'} icon={'star'} onPress={onPressHandler} />
            }
        });


    }, [navigation, onPressHandler])

    return (
        <ScrollView>
            <MealDetails meal={meal} />
        </ScrollView>
    );
}


export default MealDetailScreen;
