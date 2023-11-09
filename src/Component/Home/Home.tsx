import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import homecss from './homecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [search, setsearch] = useState('')
    return (
        <View style={homecss.view}>
            <View style={homecss.view1}>
                <Text style={homecss.text}>Good morning</Text>
                <Text style={homecss.text1}>User name</Text>
            </View>
            <View style={homecss.inputview}>
                <View>
                    <TextInput
                        style={homecss.input}
                        onChangeText={setsearch}
                        value={search}
                        placeholder='Find you dishes'
                    />
                </View>
                <View>
                    <FontAwesomeIcon icon={faFilter} style={homecss.icon} color='#FF7269' size={20}/>
                </View>
            </View>
        </View>
    )
}

export default Home