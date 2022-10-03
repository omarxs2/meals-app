
import { useContext } from 'react';

import { FavoritesContext } from '../store/context/favorite-context';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const renderFlatListItem = (itemData) => {
        return <MealItem meal={itemData.item} />
    }
    return (
        <>
            {
                favoriteMealsCtx.ids.length > 0 ?
                    <View style={styles.flatContainer}>
                        <FlatList
                            data={MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id))}
                            keyExtractor={(item) => item.id + item.title}
                            renderItem={renderFlatListItem}
                        />
                    </View>
                    :
                    <View style={styles.container}>
                        <Text style={styles.text}>You have no favorite meals yet.</Text>
                    </View>


            }
        </>
    );
}


export default FavoritesScreen;

const styles = StyleSheet.create({
    flatContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ead9eb'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ead9eb'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#590b60'

    },
});
