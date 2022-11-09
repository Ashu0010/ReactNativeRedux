import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleted, toggleCheck, toggleEditing } from '../../Actions/ToDoAction';

export default ParticularCategory = ({ route, navigation }) => {
  const { data } = useSelector((state) => state)
  const dispatch = useDispatch();
  const { nav } = route.params

  const onAddIcon = () => {
    navigation.navigate('USERINPUT', { nav })
  }

  const onDeleteIcon = (id) => {
    const prevData = data[nav];
    const newData = prevData.filter(items => items.id !== id);
    dispatch(deleted(newData, nav));
  }

  const onEditIcon = (item, index) => {
    dispatch(toggleEditing());
    navigation.navigate('USERINPUT', { nav, item, index })
  }

  const onCheckSelector = (item,index) =>{
    dispatch(toggleCheck());
  }

  return (
    <View style={styles.container}>


      <View>
        <ScrollView>
          {data && data[nav]?.map((item, index) => {
            return (
              <View style={styles.textInput}>

                <View style={styles.textView}>
                  <Text style={styles.textViewOne}>{item.title}</Text>
                  <Text style={styles.textViewTwo}>{item.description}</Text>
                </View>

                <View style={styles.imagesView}>

                  <TouchableOpacity onPress={() => onEditIcon(item, index)}>
                    <Image source={require('../../utils/icons/icons8-pencil-48.png')}
                      style={styles.images}
                      resizeMode='contain' />
                  </TouchableOpacity>

                  <CheckBox
                    onValueChange={()=>onCheckSelector(item,index)}
                    style={styles.checkbox}
                  />

                  <TouchableOpacity onPress={() => onDeleteIcon(item.id)}>
                    <Image source={require('../../utils/icons/icons8-remove-48.png')}
                      style={{ height: 30, width: 30 }}
                      resizeMode='contain' />
                  </TouchableOpacity>
                </View>

              </View>
            )
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.add}
        onPress={onAddIcon}>
        <Image
          source={require('../../utils/icons/icons8-add-new-48.png')}
          style={styles.image}
          resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'column'
  },
  imagesView: {
    justifyContent: 'space-between',
    alignItems:'center'
  },
  images: {
    height: 30,
    width: 30
  },
  textView: {
    borderRightWidth: 0.2,
    width: 320,
    height:'auto',
    borderRightColor: 'rgb(236,81,91)',
  },
  textViewOne: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight:'500',
  },
  textViewTwo: {
    marginBottom: 3,
    fontSize: 12,
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    borderWidth: 0.3,
    borderColor: 'rgb(236,8,10)',
    borderRadius: 8,
    margin: 3,
    padding: 5
  },
  add: {
    position: "absolute",
    right: -10,
    bottom: -11
  },
  image: {
    height: 80,
    width: 80,
  },
  checkbox:{
    height:30,
  },
})