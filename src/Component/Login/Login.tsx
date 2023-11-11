import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, Modal, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';
import loginstayle from './loginstayle';
const Login = ({ navigation }: any) => {
    const [email, setemail] = useState<any>('')
    const [paswword, setpaswword] = useState<any>('')
    const [emaierror, seteamilerror] = useState(false)
    const [paswworderror, setpaswworderror] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const [backgroundRed, setBackgroundRed] = useState(false);
    const [hasContent1, setHasContent1] = useState<any>(false);
    const [hasContent2, setHasContent2] = useState<any>(false);
    const [loading1, setLoading1] = useState(false);

    const handlePasswordChange = (text: string) => {
        setpaswword(text);
        setpaswworderror(text.trim() === '')
        setHasContent2(text.trim() !== '');

    };
    const handleEmailChange = (text: string) => {
        setemail(text);
        seteamilerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
        setHasContent1(text.trim() !== '');

    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const handleLogin = () => {
        if (emaierror == email || paswworderror == paswword) {
            seteamilerror(true)
            setpaswworderror(true)

        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setBackgroundRed(true);
                setSuccessModalVisible(true);
            }, 2000);
        }
    };


    const closeSuccessModal = () => {
        setLoading1(true);
        setTimeout(() => {
            setSuccessModalVisible(false);
            setBackgroundRed(false)
            navigation.navigate('Tabbar', { screen: 'HomeScreen' })
        }, 2000);
    };

    return (
        <ScrollView style={[loginstayle.viewd, backgroundRed && { backgroundColor: '#2C2F38' }]}>
            <View style={loginstayle.view}>
                <TouchableOpacity onPress={() => navigation.navigate('OnboardinScreen', { screen: 'Onboarding2' })}>
                    <FontAwesomeIcon icon={faChevronLeft} style={loginstayle.icon} size={25} />
                </TouchableOpacity>
                <Text style={loginstayle.text}>Login</Text>
            </View>
            <View style={loginstayle.inputview}>
                <FontAwesomeIcon icon={faEnvelope} style={[loginstayle.icon1, hasContent1 && { color: '#FF7269' }]} size={25} />
                <TextInput
                    onChangeText={handleEmailChange}
                    value={email}
                    placeholder='Enter your email'
                    style={[loginstayle.input1, emaierror && { borderColor: 'red' }]}
                />
                <View>
                    <FontAwesomeIcon icon={faLock} style={[loginstayle.icon1, hasContent2 && { color: '#FF7269' }]} size={25} />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={loginstayle.toucicon}>
                        {passwordVisible
                            ? <FontAwesomeIcon icon={faEye} style={[loginstayle.icon1, hasContent2 && { color: '#FF7269' }]} size={25} />
                            : <FontAwesomeIcon icon={faEyeSlash} style={[loginstayle.icon1, hasContent2 && { color: '#FF7269' }]} size={25} />
                        }
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={handlePasswordChange}
                        value={paswword}
                        placeholder='Enter your password'
                        secureTextEntry={!passwordVisible}
                        style={[loginstayle.input1, paswworderror && { borderColor: 'red' }]}
                    />
                    <TouchableOpacity style={loginstayle.touc}>
                        <Text style={loginstayle.text1}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginstayle.toucview}>
                <TouchableOpacity style={loginstayle.touc1} onPress={handleLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size='large' color="white" style={{ marginTop: '4%' }} />
                    ) : (
                        <Text style={loginstayle.text2}>Login</Text>
                    )}
                </TouchableOpacity>
                <Modal
                    visible={successModalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={loginstayle.modal}>
                        <View style={loginstayle.view5}>
                            <View style={loginstayle.iconview}>
                                <FontAwesomeIcon icon={faCheck} style={loginstayle.icon3} size={55} />
                            </View>
                        </View>
                        <View style={loginstayle.textview1}>
                            <Text style={loginstayle.text7}>Yeay! Welcome Back</Text>
                            <Text style={loginstayle.text8}>Once again you login successfully into medidoc app</Text>
                        </View>
                        <View style={loginstayle.toucview1}>
                            <TouchableOpacity style={loginstayle.touc3} onPress={closeSuccessModal}>
                                {loading1 ? (
                                    <ActivityIndicator size='small' color="white" style={{ marginTop: '10%' }} />
                                ) : (<Text style={loginstayle.text9}>Go to home</Text>)}

                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={loginstayle.textview}>
                    <Text style={loginstayle.text4}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={loginstayle.text3}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginstayle.view4}>
                <View style={loginstayle.view2}></View>
                <Text style={loginstayle.text5}>OR</Text>
                <View style={loginstayle.view3}></View>
            </View>
            <View>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../Main/Google.png')}
                        style={loginstayle.img}
                    />
                    <Text style={loginstayle.text6}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../Main/Apple.png')}
                        style={loginstayle.img1}
                    />
                    <Text style={loginstayle.text6}>Sign in with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../Main/Facebook.png')}
                        style={loginstayle.img}
                    />
                    <Text style={loginstayle.text6}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login