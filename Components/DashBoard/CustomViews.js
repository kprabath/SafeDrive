import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Svg, Path } from 'react-native-svg'
import { BlurView } from '@react-native-community/blur';
const WiDTH = Dimensions.get('screen').width;
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

export const WaveView = () => {
  return <View style={{ backgroundColor: '#ff5500', height: 70 }}>
    <Svg
      height="100%"
      preserveAspectRatio='none'
      width="100%"
      viewBox="0 0 500 150"
      style={{ position: 'absolute', top: 45 }} >
      <Path
        fill="#ff5500"
        d="M-1.97,87.33 C64.05,5.44 441.58,210.69 501.41,78.45 L500.00,0.00 L0.00,0.00 Z" />
    </Svg>
  </View>
}


export const MyBlurView = () => {
  return (<BlurView
    style={Styles.BlurView}
    blurType="light"
    blurAmount={15}
    reducedTransparencyFallbackColor="white"
  />)
}


export const Remarks = () => {
  return <View style={Styles.Remarks}>
    <Text style={Styles.regular}>Driver's Last Remarks:</Text>
    <Text style={Styles.bold}>Gate Access Code is 8500000000 .Ask Mike</Text>
    <View
      style={Styles.Hr}
    />
  </View>
}

export const StarTray = (props) => {
  let tray = [];
  let { count } = props;
  for (let i = 0; i < 5; i++) tray.push(<Icon name='star' style={{ margin: 2 }} size={10} color={i < count ? 'gold' : 'lightgrey'} />);
  return (
    <>
      {
        tray.map(el => el)
      }
    </>
  )
}

export const TitleView = () => {
  return (
    <View style={Styles.TitleView}>
      <Icon name='book' size={30} color="white" />
      <Text style={[Styles.TitleViewText, Styles.bold]}>
        DriveTime
      </Text>

    </View>
  )
}

export const ItemView = (props) => {
  return (
    <View style={[Styles.ItemView, {
      ...props.customStyles
    }]}>

      {props.children}
    </View>
  )
}


export const Footer = () => {
  return (
    <View style={Styles.Footer}>
      <Icon name='truck' size={23} color='orange' />
      <Icon name='location-arrow' size={23} />
      <Icon name='book' size={23} />
      <Icon2 name='hammer-screwdriver' size={23} />

    </View>
  )
}

const DetailItem = (props) => {
  return (
    <View style={{
      flex: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Text style={[Styles.bold, { fontSize: 15 , textAlign:'center' }]} >{props.title}</Text>
      <Text style={[Styles.regular, { fontSize: 11 , textAlign:'center'  }]} >{props.value}</Text>
    </View>
  )
}

const DetailView = (props) => {
  return (

    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 28, paddingBottom: 28 }}>
      <DetailItem title='Time and Date ' value = {props.time} />
      <DetailItem title='Location'  value = {props.location}/>
      <DetailItem title='Hubo Reading'  value = {props.huboReading}/>
    </View>

  )
}

export const LargeTile = (props) => {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={[Styles.LargeTileContainer, {
        backgroundColor: props.color,
      }]}>
       { !props.isDetailView ?  <>
        <Image source={props.src} style={{
          height: 50,
          width: 50
        }} />
        <Text style={[{ fontSize: 26} , Styles.bold]}>{props.description}</Text>
        </> :
        <DetailView time = {props.time} location = {props.location} huboReading = {props.huboReading}/> 
        }
      </View>

    </TouchableOpacity>

  )
}

export const SmallTile = (props) => {
  return (

    <View style={[Styles.smallTileContainer, {
      backgroundColor: props.color,
      ...props.style
    }]}>
      <Image source={props.src} style={{
        height: 40,
        width: 40
      }} />
      <Text style={[{
        fontSize: 20
      }, Styles.regular]}>{props.title}</Text>

    </View>

  )
}

const Styles = StyleSheet.create({
  regular: {

    fontFamily: "PTSansNarrow-Regular"

  },
  bold: {
    fontFamily: 'PTSansNarrow-Bold'
  },
  smallTileContainer: {
    display: 'flex',
    flex: 6,
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  LargeTileContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center'

  },
  Footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 15,
    paddingLeft:20 , 
    paddingRight: 20 ,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ItemView: {
    display: 'flex',
    flex: 4,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    // padding:10 ,
    justifyContent: 'space-between',
  },
  TitleView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: WiDTH,
    alignItems: 'center',
    position: 'absolute',
    top: 20
  },
  TitleViewText: {
    marginLeft: 10,
    fontSize: 32,
    color: 'white',
  },
  Hr: {
    marginTop: 5,
    borderBottomColor: '#E8CACA',
    borderBottomWidth: 1,
  },
  Remarks: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8 , 
    paddingRight:7 , 
    paddingLeft:7 
  },
  BlurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})