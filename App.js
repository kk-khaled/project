import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends Component {
     state = {col:1}

     componentDidMount(){
        if(this.state.col==1)
        {
        this.setState({col:2})
        }
    if(this.state.col==2)
    {
        this.setState({col:3})
    }
    if(this.state.col==3)
    {
        this.setState({col:4})
    }
    if(this.state.col==4)
    {
        this.setState({col:1})
    }
     }
  render() {
    if(this.state.col==1)
    {
    return (
      <View style={styles.container}>
          <Counter color={'red'} size={140} />   
       </View>
    )
   }
   else if(this.state.col==2)
    {
    return (
      <View style={styles.container}>
          <Counter color={'blue'} size={140} />   
      </View>
    )
   }
    else if(this.state.col==3)
    {
    return (
      <View style={styles.container}>
          <Counter color={'yellow'} size={140} />   
      </View>
    )
   }
    else if(this.state.col==4)
    {
    return (
      <View style={styles.container}>
          <Counter color={'black'} size={140} />   
      </View>
    )
   }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('App', () => App)
