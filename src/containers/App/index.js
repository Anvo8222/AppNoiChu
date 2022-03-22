import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Buttons from './Buttons';
import Play from './Play';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(false);
  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };

  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.background}>
      <View style={[homeStyle.container, homeStyle.header]}>
        <TouchableOpacity
          onPress={onSetShowButtons}
          onLongPress={onSetShowButtons}>
          <Image style={homeStyle.cart} source={images.home.cart} />
        </TouchableOpacity>
        <Text style={homeStyle.title}>{`Turn: ${turn}`}</Text>
      </View>

      {isShowButtons ? <Buttons /> : <Play />}
    </ImageBackground>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
