import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


export default class ToDoApp extends Component {
  // constructor(props, {navigation}){
  //   super(props);

  // }

  // getCurrentDateFunction = () => {
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth() + 1;
  //   var year = new Date().getFullYear();
  //   //var day = new Date().getDay();
  //   return 'TUESDAY  ' + date + ' / ' + month + ' / ' + year;
  // };

  getCurrentDateFunction = () =>{
    var currentDate = new Date().toLocaleDateString('en-us',{
      weekday:'long',
      day:'numeric',
      month:'long',
      year:'numeric',
    })
    return currentDate;
  }

  onButtonClick = (nav) => {
    navigation = this.props.navigation
    navigation.navigate('CATEGORY', { nav, navigation })
  }

  render() {
    return (
      <View>

        <View style={styles.headerView}>

          <Text style={styles.headerTextOne}>Hello</Text>
          <Text style={styles.headerTextTwo}>Ashish</Text>
          <Text >{this.getCurrentDateFunction()}</Text>

        </View>

        <View style={styles.space} />

        <View style={styles.buttonOneView}>
          <TouchableOpacity style={styles.buttonOne} onPress={() => {
            this.onButtonClick("COMPLETE_SCHEDULES")
          }}>

            <Text style={styles.buttonText}>Complete</Text>
            <Text style={styles.buttonText}>Schedules</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOne} onPress={() => {
            this.onButtonClick("GROCERY_LIST")
          }}>
            <Text style={styles.buttonText}>Grocery</Text>
            <Text style={styles.buttonText}>Lists</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonTwoView}>
          <TouchableOpacity style={styles.buttonTwo} onPress={() => {
            this.onButtonClick("WORK_PROJECTS")
          }}>
            <Text style={styles.buttonText}>Work</Text>
            <Text style={styles.buttonText}>Projects</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerView: {
    marginHorizontal: 40,
    padding: 20,
  },
  space: {
    height: 20,
  },
  headerTextOne: {
    fontSize: 50,
  },
  headerTextTwo: {
    fontSize: 52,
    fontWeight: '500',
    color: '#561DD9',
  },
  buttonOneView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonTwoView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonOne: {
    marginTop: 30,
    backgroundColor: 'rgb(236,81,91)',
    borderColor: 'rgb(231,231,231)',
    borderRadius: 30,
    height: 65,
    borderWidth: 0.2,
    width: 190,
    justifyContent: 'center',
  },
  buttonTwo: {
    marginTop: 20,
    backgroundColor: 'rgb(236,81,91)',
    borderColor: 'rgb(231,231,231)',
    borderRadius: 30,
    height: 65,
    borderWidth: 0.2,
    justifyContent: 'center',
    borderWidth: 0.2,
    width: '98%',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255,255,255)'
  },
})
