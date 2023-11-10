import { StyleSheet } from 'react-native'
const colors = { primary: '#282534', white: '#ffff' }
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor:'#2C2F38'
  },
  flatlist: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    alignItems: 'center',
  },
  img: {
    width: 420,
    height: 500,
    marginTop: '5%',
    position: 'relative'
  },
  text: {
    fontSize: 25,
    marginTop: '170%',
    position: 'absolute',
    zIndex: 2,
    color: '#101623',
    fontWeight: 'bold'

  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  circle: {
    width: 20,
    height: 6,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: '#c5e5e2',
    marginTop: '15%'
  },
  activeCircle: {
    backgroundColor: '#FF7269',
  },
  nextButton: {
    backgroundColor: '#353842',
    borderRadius: 90,
    marginTop: 20,
    width: 70,
    height: 70,
    paddingTop: '5%',
    marginLeft: '30%',

  },
  icon: {
    color: '#FF7269',
    alignSelf: 'center',
    marginRight: 6,
    marginTop: -3

  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '28%',
  },

  textview: {
    alignItems: 'center',
    marginTop: 10


  },
  imge: {
    width: 150,
    height: 160,

  },
  text1: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30
  },
  text2: {
    width: 250,
    textAlign: 'center',
    marginTop: 10,
    color:'gray'
  },
  view3: {
    alignItems: 'center',
    marginTop: '-40%'
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:'2%'
  },
  text5:{
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop:'2%'
  },
  touc: {
    backgroundColor: '#FF7269',
    width: 250,
    height: 50,
    borderRadius:30
  },
  text4: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:'4%'
  },
  touc1: {
    width: 250,
    height: 50, 
    borderRadius:30,
    borderColor:'#FF7269',
    borderWidth:1,
    marginTop:'8%'
  },
  view4:{
    alignItems:'center',
    marginTop:'15%'
  }
})