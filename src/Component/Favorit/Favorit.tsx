import { View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faXmark, faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { toggleBasket, toggleFavorite } from '../../Store/Feature/fooddataSlice';

import favoritcss from './favoritcss'
import homecss from '../Home/homecss';

const Favorit = () => {
    const favoriteItems = useSelector((state: any) =>
    state.foodReducer.value.filter((item: any) => item.isFavorite)
  );
    const data = useSelector((state: any) => state.foodReducer.value)
    const dispatch = useDispatch()
    const handle = (data: any) => {
        dispatch(toggleFavorite(data.id))
    }
    const handle1 = (data: any) => {
        dispatch(toggleBasket(data.id))
    }
    const renderitem = (favoriteItems: any) => {
        return (
            <View style={homecss.flatlistview}>
                <View style={homecss.viewimge}>
                    <Image
                        source={favoriteItems.imge}
                        style={homecss.imge}
                    />
                </View>
                <Text style={homecss.text3}>{favoriteItems.name}</Text>
                <View style={homecss.toucview1}>
                    <TouchableOpacity style={homecss.touc3} onPress={() => handle(favoriteItems)}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={favoriteItems.isFavorite ? homecss.icon1 : homecss.icon1}
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={homecss.touc3} onPress={() => handle1(favoriteItems)}>
                        <FontAwesomeIcon
                            icon={faBasketShopping}
                            style={favoriteItems.isBasket ? homecss.icon1 : homecss.icon2}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View style={homecss.textview}>
                    <Text style={homecss.text4}>$ {favoriteItems.price}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={favoritcss.view}>
            <Text style={favoritcss.text}>Favorit Food</Text>
            <FlatList
                data={favoriteItems}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={(item: any) => item.id.toString()}
                numColumns={2}
            />
        </View >
    )
}

export default Favorit