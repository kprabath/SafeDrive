import React, { useState } from 'react'
import { Modal, Text, TextInput, View, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import RadioBtn from 'react-native-vector-icons/MaterialIcons'
const MyInput = (props) => {
    return (
        <View style={Styles.MyInputContainer}>
            <Text style={[Styles.MyInputTitle, Styles.regular]}>{props.title}</Text>
            <TextInput editable={props.editable} onChangeText={text => {
                props.click(text)
            }} style={[Styles.MyInputInput, Styles.regular]} value={props.value} />
            {props.isActive && <View style={Styles.MyInputRadioView}>
                <RadioBtn name='radio-button-checked' size={25} color='grey' />
            </View>}
        </View>

    )
}
const Loader = () => {
    return (<View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center'

    }}>
        <ActivityIndicator size={40} color='red' />
    </View>)
}
const MyModal = (props) => {

    function loadData() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setbtnDes("LETS START DRIVING")
        }, 2000)
    }
    let [time, setTime] = useState("3:25 pm , 20 Feb 2020")
    let [location, setLocation] = useState("Queen St , 123");
    let [huboReading, setHuboReading] = useState("123456");
    let [isLoading, setLoading] = useState(false)
    let [btnDes, setbtnDes] = useState("CONFIRM AND LOG");
    return (<Modal
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
            setbtnDes("CONFIRM AND LOG")
            props.change()
        }}>
        <ScrollView style={{
            flex: 1,
            backgroundColor: 'rgba(0 , 0 , 0 , 0.5)',
        }}
            keyboardShouldPersistTaps='always'
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center'
            }}>
            <View style={Styles.ModalContainer}>
                <Text style={[Styles.ModalTitle, Styles.bold]}>
                    Start Driving
         </Text>

                <MyInput
                    editable={!isLoading}
                    click={setTime}
                    title='Time and Date'
                    value={time} />
                <MyInput
                    editable={!isLoading}
                    click={setLocation}
                    title='Location'
                    value={location} isActive />
                <MyInput
                    editable={!isLoading}
                    click={setHuboReading}
                    title='Current Hubo Reading'
                    value={huboReading} />
                {isLoading && <Loader />}
                <TouchableOpacity style={Styles.ModalButton} onPress={loadData}>
                    <Text style={[Styles.ModalButtonText, { color: '#fff', }, Styles.regular]}>{btnDes}</Text>
                </TouchableOpacity>
                <Text onPress={() => {
                    setbtnDes("CONFIRM AND LOG")
                    props.change()
                }} style={[Styles.ModalButtonText, { color: '#ff5500' }, Styles.regular]}>CANCEL</Text>
            </View>
        </ScrollView>
    </Modal>)

}

const Styles = StyleSheet.create({
    regular: {

        fontFamily: "PTSansNarrow-Regular"

    },
    bold: {
        fontFamily: 'PTSansNarrow-Bold'
    },
    MyInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20

    },
    MyInputTitle: {
        color: 'grey',
        fontSize: 12,
        fontFamily: 'Open Sans'

    },
    MyInputRadioView: {
        position: 'absolute',
        right: 5,
        bottom: 2
    },
    MyInputInput: {
        fontSize: 18,
        paddingBottom: -2,
        paddingLeft: -1,
        paddingTop: 5,
        textAlign: 'left',
        borderBottomColor: '#E8CACA',
        borderBottomWidth: 1

    },
    ModalContainer: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ModalTitle: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center'
    },
    ModalButton: {
        backgroundColor: '#ff5500',
        borderRadius: 30,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 5
    },
    ModalButtonText: {
        textAlign: 'center',
        fontSize: 18,
    }


})

export default MyModal;