import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import stayle from './stayle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Onboarding = ({ navigation }: any) => {
    const item = useSelector((state: any) => state.OnboardingReducer.value);
    const [currentIndex, setCurrentIndex] = useState<any>(0);

    const onNextPress = () => {
        if (currentIndex < item.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Onboarding2');
        }

    };

    const circles = item.map((_: any, index: any) => (
        <View
            key={index}
            style={[
                stayle.circle,
                index === currentIndex ? stayle.activeCircle : null,
            ]}
        />
    ));

    const renderitem = (item: any, index: number) => {
        return (
            <View style={stayle.view}>
                {index === currentIndex && (
                    <View style={stayle.view1}>
                        <Image source={item.imge} style={stayle.img} />
                        <Text style={stayle.text}>{item.title}</Text>
                    </View>
                )}
            </View>
        );
    };


    return (
        <View style={stayle.container}>
            <FlatList
                data={item}
                renderItem={({ item, index }) => renderitem(item, index)}
                keyExtractor={(item: any) => item.id.toString()}
                style={stayle.flatlist}
            />
            <View style={stayle.view2}>
                <View style={stayle.circlesContainer}>{circles}</View>
                <TouchableOpacity
                    style={stayle.nextButton}
                    onPress={onNextPress}
                >
               <FontAwesomeIcon icon={faArrowRight} style={stayle.icon} size={35} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding;
