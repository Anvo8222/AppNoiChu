import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const eggStyle = StyleSheet.create({
  eggs: {
    resizeMode: 'contain',
    width: 150,
    height: 250,
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 14,
    marginHorizontal: 12,
  },
  cart: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    color: '#fde7b6',
    fontWeight: 'bold',
    fontSize: 20,
  },
  result: {
    marginBottom: 10,
  },
  loseWin: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },

  panel: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    position: 'relative',
  },
  panelImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  panelText: {
    position: 'absolute',
    color: '#a35838',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  barLine: {
    width: '100%',
    height: 10,
    marginVertical: 25,
  },
  inputNormal: {
    height: 50,
    width: 270,
    borderColor: 'none',
    backgroundColor: '#9a8a7f',
    borderRadius: 8,
    opacity: 0.8,
    textAlign: 'center',
    color: '#3a1e0c',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Verdana',
  },
  inputFocus: {
    height: 50,
    width: 270,
    borderColor: 'none',
    backgroundColor: '#9a8a7f',
    borderRadius: 8,
    opacity: 1,
    textAlign: 'center',
    color: '#3a1e0c',
    fontSize: 20,
    position: 'relative',
    top: -170,
    fontFamily: 'Verdana',
  },
  pushBtn: {
    width: 230,
    height: 60,
    resizeMode: 'contain',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '10%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: `#fff`,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
