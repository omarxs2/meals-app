
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {

    const renderFlatListItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={onPressHandler}
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderFlatListItem}
            numColumns={2}
        />
    );
}


export default CategoriesScreen;
