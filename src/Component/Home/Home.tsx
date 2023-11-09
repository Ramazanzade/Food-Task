import { View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import homecss from './homecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown'

const Home = () => {
    const [search, setsearch] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [price, setprice] = useState('')
    const food = ["Egypt", "Canada", "Australia", "Ireland"]
    const [loading, setLoading] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };

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
                <View style={homecss.iconview}>
                    <TouchableOpacity onPress={openModal}>
                        <FontAwesomeIcon icon={faFilter} style={homecss.icon} color='#FF7269' size={20} />
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={homecss.modalContainer}>
                        <TouchableOpacity onPress={closeModal}>
                            <FontAwesomeIcon icon={faXmark} style={homecss.modealicon} color='#FF7269' size={30} />
                        </TouchableOpacity>
                        <View>
                            <View style={homecss.modelview}>
                                <Text style={homecss.text2}>Price</Text>
                                <TextInput
                                    style={homecss.modalinput}
                                    onChangeText={setprice}
                                    value={price}
                                    placeholder='Price'
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={homecss.view2}>
                                <Text style={homecss.text2}> Food Name</Text>
                                <SelectDropdown
                                    data={food}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    buttonStyle={{ backgroundColor: '#353842', marginHorizontal: '5%', width: '90%', borderRadius: 10 }}
                                    buttonTextStyle={{ color: 'gray', marginRight: '50%' }}
                                    defaultButtonText='Food name'
                                    rowStyle={{ backgroundColor: '#353842', marginBottom: '0%', borderRadius: 10 }}
                                    rowTextStyle={{ color: 'gray' }}
                                    dropdownStyle={{ backgroundColor: '#353842', borderRadius: 10, marginTop: 10 }}
                                />
                            </View>
                            <View style={homecss.toucview}>
                                <TouchableOpacity style={homecss.touc} onPress={handleSearch}>
                                    {loading ? (
                                        <ActivityIndicator size='small' color="white" style={{ marginTop: '5%' }} />
                                    ) : (
                                        <Text style={homecss.touctext}>Search</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Home