
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem';

function MealsScreen({ route, navigation }) {

    // const route = useRoute();
    const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const title = CATEGORIES.find((cat => cat.id === catId)).title;
        navigation.setOptions({
            title
        });
    }, [catId, navigation])

    const renderFlatListItem = (itemData) => {
        return <MealItem meal={itemData.item} />
    }

    return (
        <FlatList
            data={MEALS.filter((meal) => meal.categoryIds.includes(catId))}
            // or retturn meal.categoryIds.indexOf(catId) >=0
            keyExtractor={(item) => item.id}
            renderItem={renderFlatListItem}
        />
    );
}


export default MealsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});