import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { added, edited } from '../../Actions/ToDoAction'

export default Input = ({ route }) => {
    const [title, setTitle] = useState(route?.params?.item?.title || '')
    const [description, setDescription] = useState(route?.params?.item?.description || '')

    const { data, editing } = useSelector(state => state)
    // console.log('data =======>>>>>>>', data.COMPLETE_SCHEDULES);
    const dispatch = useDispatch();

    const { nav } = route.params

    const onAddEditCheckTask = () => {
        if (editing) {
            const prevData = data[nav]
            const updateText = prevData.map((items) => {
                if (items.id === route?.params?.item?.id) {
                    return {
                        ...items,
                        title: title,
                       description : description 
                    }
                }
                else {
                    return items;
                }
            })
            dispatch(edited(updateText, nav))
        }
        else {
            dispatch(added([...data[nav], { id: +new Date(), title: title, description: description, isCheckbox : false}], nav))
        }
    }
    return (
        <View>
            <View style={styles.container}>

                <View style={styles.input}>
                    <TextInput
                        style={styles.inputText}
                        multiline={true}
                        placeholderTextColor="blue"
                        placeholder='Write Your Title Here!'
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                </View>

                <View style={styles.description} >
                    <TextInput
                        style={styles.descriptionTextInput}
                        multiline={true}
                        placeholderTextColor="blue"
                        placeholder='Write Your Description Here!'
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                </View>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={onAddEditCheckTask} >
                    <Text style={styles.buttonText}>
                        ADD TASK
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
      },
    container: {
        height: '60%',
    },
    input: {
        height: 60,
        width: '95%',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 4,
        padding: 8,
        margin: 10,
        marginTop: 20,
    },
    inputText: {
        fontSize: 15,
        borderRadius: 4,
        marginTop: 10,
        color: 'blue',
    },
    description: {
        height: 200,
        width: '95%',
        borderWidth: 1,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 4,
        padding: 10,
        margin: 10,
        marginTop: 20,
    },
    descriptionTextInput: {
        fontSize: 15,
        borderRadius: 4,
        marginTop: 10,
        color: 'blue',
    },
    buttonView: {
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        backgroundColor: 'rgb(236,81,91)',
        borderColor: 'rgb(231,231,231)',
        borderRadius: 30,
        borderWidth: 1,
        height: 65,
        width: 250,
        // padding: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
    },
})