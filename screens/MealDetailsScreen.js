
import { useContext, useLayoutEffect } from 'react';
import { ScrollView,Alert } from 'react-native';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';
import { useSelector, useDispatch } from 'react-redux'
import { removeFav, addFav } from '../store/redux/favorite'
// import { FavoritesContext } from '../store/context/favorite-context';

function MealDetailScreen({ route, navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favMeals = useSelector((state) => state.favMeals.ids)
    const dispach = useDispatch();

    const meal = route.params.meal;
    const mealIsFav = favMeals.includes(meal.id);

    const onPressHandler = () => {
        if (mealIsFav) {
            dispach(removeFav({ id: meal.id }));
            Alert.alert('Removed from favorites');
        }
        else {
            dispach(addFav({ id: meal.id }));
            Alert.alert('Added to favorites');

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
