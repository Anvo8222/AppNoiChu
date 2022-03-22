import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { images } from 'assets/images';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn, setInputCurren } from './actions';
import { makeInputCurren, makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function Play({ dispatch, turn, inputCurren }) {
  const [isFocus, setIsFocus] = useState(false);

  const isHandleFocusInput = () => {
    setIsFocus(true);
  };
  const isHandleBlurInput = () => {
    setIsFocus(false);
  };
  const [input, setInput] = useState('');
  const [isWin, setIsWin] = useState(false);

  // ham kiem tra ô input nhập vào có đúng 2 từ không?
  const isInput = () => {
    if (input.toLowerCase().trim().split(' ').length === 2) {
      return true;
    }
    return false;
  };
  const checkIsInput = isInput();

  const submitInput = () => {
    if (turn <= 0) return false;
    if (inputCurren === '') {
      if (checkIsInput === true) {
        dispatch(
          setInputCurren(
            input
              .toLowerCase()
              .trim()
              .split(' ')[1]
              .replace(/[^a-zA-Z ]/g, ''),
          ),
        );
        dispatch(decrementTurn(1));
        setInput('');
      } else {
        return Alert.alert('Warning!', 'Please enter two words.');
      }
    }
    if (input !== '' && checkIsInput === true) {
      if (inputCurren === input.trim().split(' ')[0]) {
        dispatch(
          setInputCurren(
            input
              .toLowerCase()
              .trim()
              .split(' ')[1]
              .replace(/[^a-zA-Z ]/g, ''),
          ),
        );
        setIsWin(true);
        setInput('');
      } else {
        setIsWin(false);
        dispatch(decrementTurn(1));
      }
      dispatch(decrementTurn(1));
    } else {
      return Alert.alert('Warning!', 'Please enter two words.');
    }
  };

  return (
    <>
      <View style={[homeStyle.container, homeStyle.result]}>
        <Image
          style={homeStyle.loseWin}
          source={isWin ? images.home.win : images.home.lose}
        />
      </View>
      <View style={homeStyle.container}>
        <View style={[homeStyle.container, homeStyle.panel]}>
          <Image style={homeStyle.panelImg} source={images.home.panel} />
          <Text style={homeStyle.panelText}>{inputCurren}</Text>
        </View>
      </View>
      <View>
        <Image style={homeStyle.barLine} source={images.home.barLine} />
      </View>
      <View style={homeStyle.container}>
        <TextInput
          value={input}
          onFocus={isHandleFocusInput}
          onBlur={isHandleBlurInput}
          onChangeText={text => setInput(text)}
          style={isFocus ? homeStyle.inputFocus : homeStyle.inputNormal}
        />
      </View>
      <View style={homeStyle.container}>
        <TouchableOpacity onPress={submitInput} onLongPress={submitInput}>
          <Image style={homeStyle.pushBtn} source={images.home.pushBtn} />
        </TouchableOpacity>
      </View>
    </>
  );
}

Play.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  inputCurren: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  inputCurren: makeInputCurren(),
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Play);
