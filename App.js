/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Svg, Path, Ellipse } from 'react-native-svg'
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
const WiDTH = Dimensions.get('screen').width;

const MyBlurView = () => {
  return (<BlurView
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }}
    blurType="light"
    blurAmount={15}
    reducedTransparencyFallbackColor="white"
  />)
}

const WaveView = () => {
  return <View style={{ backgroundColor: '#ff5500', height: 60 }}>
    <Svg
      height="100%"
      width="100%"
      viewBox="0 0 1440 200"
      style={{ position: 'absolute', top: 35 }} >
      <Path
        fill="#ff5500"
        d="M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
    </Svg>
  </View>
}

const StarTray = (props) => {
  let tray = [];
  let { count } = props;
  for (let i = 0; i < 5; i++) tray.push(<Icon name='star' size={10} color={i < count ? 'gold' : 'lightgrey'} />);
  return (
    <>
      {
        tray.map(el => el)
      }
    </>
  )
}

const TitleView = () => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: WiDTH,
      alignItems: 'center',
      position: 'absolute',
      top: 20
    }}>
      <Icon name='book' size={30} color="white" />
      <Text style={{
        marginLeft: 10,
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
      }}>
        DriveTime
      </Text>

    </View>
  )
}



const Footer = () => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 15,
      left: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>

      <Icon name='truck' size={25} color='orange' />
      <Icon name='location-arrow' size={25} />

      <Icon name='book' size={25} />
      <Icon2 name='hammer-screwdriver' size={25} />

    </View>
  )
}

const LargeTile = (props) => {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props.color,
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        justifyContent: 'center'
      }}>
        <Image source={props.src} style={{
          height: 50,
          width: 50
        }} />
        <Text style={{
          fontWeight: 'bold',
          fontSize: 24
        }}>{props.description}</Text>

      </View>

    </TouchableOpacity>

  )
}

const SmallTile = (props) => {
  return (

    <View style={{
      display: 'flex',
      flex: 6,
      padding: 12,
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.color,
      borderRadius: 10,
      ...props.style
    }}>
      <Image source={props.src} style={{
        height: 40,
        width: 40
      }} />
      <Text style={{
        fontSize: 18
      }}>{props.title}</Text>

    </View>

  )
}

class App extends React.Component {

  state = {
    isModelVisible: false
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
      <View style={{
        flexDirection: 'column',
        flex: 1
      }}>
        <WaveView />
        <TitleView />
        <View style={{
          padding: 15,
          flexDirection: 'column',
          flex: 1,
          marginTop: 20,
          // backgroundColor: 'yellow'

        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>

            <View style={{
              display: 'flex',
              flex: 4,
              padding: 5,
              paddingRight: 10,
              flexDirection: 'column',
              alignItems: 'center',
              // padding:10 ,
              justifyContent: 'space-between'
            }}>

              <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                //justifyContent:'center' , 
                marginBottom: 5
              }}>

                <Text style={{
                  marginRight: 5,
                  color: 'grey'
                }}>Select Vehicle</Text>
                <Icon name='caret-down' size={18} color='grey' />
              </View>
              <Text style={{
                fontWeight: 'bold'
              }}>114,000km</Text>
              <Text style={{
                fontSize: 10
              }}>Hubometer</Text>


            </View>
            <View style={{
              display: 'flex',
              flex: 4,
              padding: 5,
              flexDirection: 'column',
              alignItems: "center",
              borderColor: 'lightgray',
              borderRightWidth: 1,
              borderLeftWidth: 1,
              justifyContent: 'space-between'
            }}>

              <Text style={{
                fontWeight: 'bold',
                fontSize: 28
              }}>Idle</Text>
              <Text>Current Status</Text>
              <View style={{
                display: 'flex',
                flexDirection: 'row'
              }}>

                <StarTray count={4} />
              </View>


            </View>
            <View style={{
              display: 'flex',
              flex: 4,
              padding: 6,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>

              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}>3h</Text>

              <Text>Next Break Due</Text>

            </View>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
            justifyContent: 'space-between'

          }}>

            <LargeTile color={'#CCFFE5'} src={require('./images/click.png')} description={"START DRIVING"} click={this.changeModalVisibilty} />
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10,

            }}>
              <SmallTile src={require('./images/economy.png')} color='#FFFFCC' title='Start Other Work' style={{
                marginRight: 7,
              }} />

              <SmallTile src={require('./images/break-time.png')} color='#CCFFFF' title='Start Rest' style={{
                marginLeft: 7,
              }} />
            </View>
            <LargeTile color="#FFE5CC" src={require('./images/time.png')} description={"END OF DAY"} />



          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 8
          }}>

            <Text>Drivers Last Remarks:</Text>
            <Text style={{
              fontWeight: 'bold'
            }}>Gate Access Code is 8500000000 .Ask Mike</Text>
            <View
              style={{
                marginTop: 5,
                borderBottomColor: '#E8CACA',
                borderBottomWidth: 1,
              }}
            />
          </View>


        </View>


        <Footer />
        {
          this.state.isModelVisible ? <MyBlurView /> : null
        }

      </View>
    )




  }
}



export default App;
