import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { added } from '../../Actions/ToDoAction'

export default function UserInput() {
    const [title, setTitle] = useState('')
    const [subTitle, setSubtitle] = useState('')
    const {data} = useSelector(state => state)
    console.log('data =======>',data.COMPLETE_SCHEDULES);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(added([...data['COMPLETE_SCHEDULES'], {id: +new Date(), title: title, subTitle: subTitle,}], 'COMPLETE_SCHEDULES'))
    }
  return (
    <View>
      <TextInput value= {title} onChangeText={(text) => setTitle(text)} placeholder='enter the title'></TextInput>
      <TextInput value= {subTitle} onChangeText={(text) => setSubtitle(text)} placeholder='enter subtitle'></TextInput>
      <TouchableOpacity onPress={handleAddTodo}><Text>ADD NEW TODO</Text></TouchableOpacity>
    </View>
  )
}