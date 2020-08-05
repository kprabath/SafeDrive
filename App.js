/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet , 
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MyModal from './Components/DashBoard/Modal'
import * as CustomViews from './Components/DashBoard/CustomViews'

class App extends React.Component {

  state = {
    isModelVisible: false,
    timeWithDate: '',
    location: '',
    huboReading: '',
    isDetailView: false
  }
  setFormData = (args) => {
    this.setState({
      ...args,
      isDetailView: true
    })
  }
  changeModalVisibilty = () => {
    this.setState(prevState => {
      return {
        isModelVisible: !prevState.isModelVisible
      }
    })
  }
  render() {
    return (
      <View style={[Styles.Column, { flex: 1 }]}>
        <CustomViews.WaveView />
        <CustomViews.TitleView />
        <View style={Styles.Container}>
          <View style={Styles.DescriptionContainer}>
            <CustomViews.ItemView customStyles={{
              paddingRight: 10,
            }}>
              <View style={[Styles.Row, { alignItems: 'center', marginBottom: 5 }]}>
                <Text style={[Styles.margin("marginRight", 5), Styles.regular]}>Select Vehicle</Text>
                <Icon name='caret-down' size={18} color='grey' />
              </View>
              <Text style={Styles.bold}>114,000km</Text>
              <Text style={[Styles.margin("marginTop", -5), Styles.fontSize(10), Styles.regular]}>Hubometer</Text>
            </CustomViews.ItemView>
            <CustomViews.ItemView customStyles={{ borderRightWidth: 1, borderLeftWidth: 1, alignItems: "center", borderColor: 'lightgray' }}>
              <Text style={[Styles.fontSize(28), Styles.margin("marginTop", -10), Styles.bold]}>Idle</Text>
              <Text style={Styles.regular}>Current Status</Text>
              <View style={Styles.Row}>
                <CustomViews.StarTray count={4} />
              </View>
            </CustomViews.ItemView>
            <CustomViews.ItemView
              customStyles={{
                justifyContent: 'center'
              }}>
              <Text style={[Styles.bold, Styles.fontSize(20)]}>3h</Text>
              <Text style={Styles.regular}>Next Break Due</Text>
            </CustomViews.ItemView>
          </View>
          <View style={Styles.MainContentContainer}>
            <CustomViews.LargeTile

              isDetailView={this.state.isDetailView}
              time={this.state.timeWithDate}
              location={this.state.location}
              huboReading={this.state.huboReading}
              color={'#BCFDEC'}
              src={require('./images/click.png')}
              description={"START DRIVING"}
              click={this.changeModalVisibilty}

            />
            <View style={Styles.ContentContainer}>

              <CustomViews.SmallTile

                src={require('./images/economy.png')}
                color='#F0EFC7' title='Start Other Work'
                style={Styles.margin("marginRight", 7)}
              />
              <CustomViews.SmallTile

                src={require('./images/break-time.png')}
                color='#D9DFF9' title='Start Rest'
                style={Styles.margin("marginLeft", 7)}
              />
            </View>
            <CustomViews.LargeTile

              isDetailView={false}
              color="#EEDCF7"
              src={require('./images/time.png')}
              description={"END OF DAY"}
            />
          </View>

          <CustomViews.Remarks />

        </View>


        <CustomViews.Footer />
        {
          this.state.isModelVisible && <CustomViews.MyBlurView />
        }
        <MyModal formDataListner={this.setFormData} time={this.state.timeWithDate} location={this.state.location} huboReading={this.state.huboReading} change={this.changeModalVisibilty} visible={this.state.isModelVisible} />

      </View>
    )




  }
}

const Styles = StyleSheet.create({
  Column: {
    flexDirection: 'column',
  },
  regular: {

    fontFamily: "PTSansNarrow-Regular"

  },
  bold: {
    fontFamily: 'PTSansNarrow-Bold'
  },
  Row: {
    flexDirection: 'row'
  },

  margin: (key, val) => {
    return {
      [key]: val
    }
  },
  fontSize: (val) => {
    return {
      fontSize: val
    }
  },
  Container: {
    padding: 15,
    flexDirection: 'column',
    flex: 1,
    marginTop: 18,
  },
  MainContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    paddingRight:8 , 
    paddingLeft:8 ,
    justifyContent: 'space-between'
  },
  ContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,

  },
  DescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default App;
