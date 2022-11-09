import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'


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

  getCurrentDateFunction = () => {
    var currentDate = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return currentDate;
  }

  onButtonClick = (nav) => {
    navigation = this.props.navigation
    navigation.navigate('CATEGORY', { nav, navigation })
  }

  render() {
    return (

      <View style={styles.container}>

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
            <View style={styles.iconsView}>
              <Image source={require('../../utils/icons/icons8-person-64.png')}
                style={styles.icons}
                resizeMode='contain' />
              <View>
                <Text style={styles.buttonText}>Complete</Text>
                <Text style={styles.buttonText}>Schedules</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOne} onPress={() => {
            this.onButtonClick("GROCERY_LIST")
          }}>
            <View style={styles.iconsView}>
              <Image source={require('../../utils/icons/icons8-person-64.png')}
                style={styles.icons}
                resizeMode='contain' />
              <View>
                <Text style={styles.buttonText}>Grocery</Text>
                <Text style={styles.buttonText}>Lists</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonTwo} onPress={() => {
            this.onButtonClick("WORK_PROJECTS")
          }}>
            <View style={styles.iconsView}>
              <Image source={require('../../utils/icons/icons8-person-64.png')}
                style={styles.icons}
                resizeMode='contain' />
              <View>
                <Text style={styles.buttonText}>Work</Text>
                <Text style={styles.buttonText}>Projects</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonTwo} />

          <TouchableOpacity style={styles.buttonTwo} />


          <TouchableOpacity style={styles.buttonTwo} />

        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  buttonOne: {
    marginTop: 20,
    backgroundColor: 'rgb(231,231,231)',
    borderColor: '#868383',
    borderRadius: 2,
    height: 140,
    borderWidth: 0.2,
    width: 189,
    justifyContent: 'center',

  },
  buttonTwo: {
    marginTop: 2.2,
    backgroundColor: 'rgb(231,231,231)',
    borderColor: '#868383',
    borderRadius: 5,
    height: 140,
    borderWidth: 0.2,
    width: 189,
    justifyContent: 'center',
    // marginLeft:3
  },
  buttonText: {
    textAlign: 'center',
    // justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    paddingRight: 20,
  },
  icons: {
    height: 30,
    // width:10,
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center'
  },
})
