import { View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMinus, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBasket, toggleFavorite } from '../../Store/Feature/fooddataSlice';
import homecss from '../Home/homecss';
import basketcss from './basketcss';
import SelectDropdown from 'react-native-select-dropdown'

const Basket = ({ initialQuantity }: any) => {
    const BaketItems = useSelector((state: any) =>
        state.foodReducer.value.filter((item: any) => item.isBasket)
    );
    const dispatch = useDispatch()
    const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({});
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState<any>('');
    const [expirationDate, setExpirationDate] = useState<any>('');
    const [cvv, setCvv] = useState<any>('');
    const [cardNumbererror, setCardNumbererror] = useState(false);
    const [expirationDateerror, setExpirationDateerror] = useState(false)
    const [cvverror, setCvverror] = useState(false);
    const handlecart = (text: string) => {
        setCardNumber(text)
        setCardNumbererror(text.trim() === '')
    }
    const handleexpir = (text: string) => {
        setExpirationDate(text)
        setExpirationDateerror(text.trim() === '')
    }
    const handlecvv = (text: string) => {
        setCvv(text)
        setCvverror(text.trim() === '')
    }
    const data1 = [
        'VISA',
        'MASTER PAY',
    ]

    const handle = (itemId: string) => {
        setItemCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            if (newCounts[itemId] > 1) {
                newCounts[itemId] -= 1;
            }
            return newCounts;
        });
    }
    const handle1 = (itemId: string) => {
        setItemCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            newCounts[itemId] = (newCounts[itemId] || 1) + 1;
            return newCounts;
        });

    }
    const delet = (data: any) => {
        dispatch(toggleBasket(data.id))
    }

    const calculateTotal = () => {
        let total = 0;
        for (const itemId in itemCounts) {
            const item = BaketItems.find((item: any) => item.id.toString() === itemId);
            const count = itemCounts[itemId] || 1;
            if (item) {
                total += item.price * count;
            }
        }

        return total;
    };
    const renderitem = (BaketItems: any) => {
        const itemId = BaketItems.id.toString();
        const count = itemCounts[itemId] || 1;
        const total = BaketItems.price * count;
        return (
            <View style={[homecss.flatlistview, { display: 'flex', flexDirection: 'row' }]}>
                <View style={homecss.viewimge}>
                    <Image
                        source={BaketItems.imge}
                        style={homecss.imge}
                    />
                </View>
                <View>
                    <Text style={[homecss.text3, { marginTop: '15%' }]}>{BaketItems.name}</Text>
                    <View style={homecss.toucview1}>
                        <TouchableOpacity style={homecss.touc3} onPress={() => handle(itemId)}>
                            <FontAwesomeIcon
                                icon={faMinus}
                                style={homecss.icon2}
                                size={25}
                            />
                        </TouchableOpacity>
                        <Text>{itemCounts[itemId] || 1}</Text>
                        <TouchableOpacity style={homecss.touc3} onPress={() => handle1(itemId)}>
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={homecss.icon1}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[homecss.textview, { marginTop: '10%' }]}>
                        <Text style={[homecss.text4]}>$ {total}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={[homecss.touc3, { marginLeft: 50, marginTop: '40%' }]} onPress={() => delet(BaketItems)}>
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={homecss.icon2}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    const closeModal = () => {
        setModalVisible(false);
    };

    const handelbook = () => {
        if (cardNumbererror == cardNumber || cvverror == cvv || expirationDateerror == expirationDate) {
          setCardNumbererror(true)
          setExpirationDateerror(true)
          setCvverror(true)
    
        } else {
          setLoading1(true);
          setTimeout(() => {
            setLoading1(false);
            setModalVisible(false)
          }, 2000);
        }
      }
    const handleBuy = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalVisible(true);
        }, 2000);

    };

    return (
        <View style={basketcss.view}>
            <Text style={basketcss.text}>Basket</Text>
            <FlatList
                data={BaketItems}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={(item: any) => item.id.toString()}
            />
            <View style={basketcss.toucview}>
                <View>
                    <Text style={basketcss.text1}>Total: $ {calculateTotal()}</Text>
                </View>
                <View >
                    <TouchableOpacity style={[basketcss.touc]} onPress={handleBuy}>
                        {loading ? (
                            <ActivityIndicator size='small' color="white" style={{ marginTop: '13%' }} />
                        ) : (
                            <Text style={basketcss.text2}>Buy</Text>
                        )}
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={basketcss.view8}>
                        <TouchableOpacity onPress={closeModal}>
                            <FontAwesomeIcon icon={faXmark} style={[homecss.modealicon, { marginTop: '5%' }]} color='#353842' size={30} />
                        </TouchableOpacity>
                        <View style={basketcss.selectview}>
                            <SelectDropdown
                                data={data1}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonStyle={{ backgroundColor: '#353842', marginHorizontal: '5%', width: '90%', borderRadius: 10 }}
                                buttonTextStyle={{ color: 'gray', marginRight: '50%' }}
                                defaultButtonText='Peyment Metod'
                                rowStyle={{ backgroundColor: '#353842', marginBottom: '0%', borderRadius: 10 }}
                                rowTextStyle={{ color: 'gray' }}
                                dropdownStyle={{ backgroundColor: '#353842', borderRadius: 10, marginTop: 10 }}
                            />
                        </View>
                        <View style={basketcss.view17}>
                            <TextInput
                                onChangeText={handlecart}
                                value={cardNumber}
                                placeholder='Card Number'
                                style={[basketcss.input, cardNumbererror && { borderColor: 'red' }]}
                                maxLength={16}
                                keyboardType='numeric'

                            />
                            <View style={basketcss.view16}>
                                <TextInput
                                    onChangeText={handleexpir}
                                    value={expirationDate}
                                    placeholder='Expiration'
                                    style={[basketcss.input1, expirationDateerror && { borderColor: 'red' }]}
                                    maxLength={16}
                                    keyboardType='numeric'

                                />
                                <TextInput
                                    onChangeText={handlecvv}
                                    value={cvv}
                                    placeholder='CVV'
                                    style={[basketcss.input1, cvverror && { borderColor: 'red' }]}
                                    maxLength={3}
                                    keyboardType='numeric'

                                />
                            </View>
                        </View>
                        <TouchableOpacity style={[basketcss.touc,{backgroundColor:'#353842', alignSelf:'flex-end',margin:'5%'}]} onPress={handelbook}>
                        {loading1 ? (
                            <ActivityIndicator size='small' color="white" style={{ marginTop: '13%' }} />
                        ) : (
                            <Text style={basketcss.text2}>Buy</Text>
                        )}
                    </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </View >
    )
}

export default Basket