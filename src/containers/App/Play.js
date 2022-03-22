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
import { checkEnoughWords, getLastWord } from 'utils/string';
import { decrementTurn, setInputCurrent } from './actions';
import { makeInputCurrent, makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function Play({ dispatch, turn, inputCurrent }) {
  const [input, setInput] = useState('');
  const [isWin, setIsWin] = useState(false);
  const [isShowStatusBar, setIsShowStatusBar] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const onFocusInput = () => {
    setIsFocus(true);
  };
  const onBlurInput = () => {
    setIsFocus(false);
  };

  const onSetInput = text => {
    setInput(text);
    setIsShowStatusBar(false);
  };

  const onSubmitInput = () => {
    if (turn <= 0) return false;
    if (input !== '' && checkEnoughWords(input) === true) {
      dispatch(
        setInputCurrent(
          input
            .toLowerCase()
            .trim()
            .split(' ')[1]
            .replace(/[^a-zA-Z ]/g, ''),
        ),
      );
      dispatch(decrementTurn(1));
      setInput('');
      setIsWin(inputCurrent === getLastWord(input));
      setIsShowStatusBar(inputCurrent !== '');
    } else {
      return Alert.alert('Warning!', 'Please enter two words.');
    }
  };

  return (
    <>
      <View style={[homeStyle.container, homeStyle.result]}>
        {isShowStatusBar && (
          <Image
            style={homeStyle.loseWin}
            source={isWin ? images.home.win : images.home.lose}
          />
        )}
      </View>
      <View style={homeStyle.container}>
        <View style={[homeStyle.container, homeStyle.panel]}>
          <Image style={homeStyle.panelImg} source={images.home.panel} />
          <Text style={homeStyle.panelText}>{inputCurrent}</Text>
        </View>
      </View>
      <View>
        <Image style={homeStyle.barLine} source={images.home.barLine} />
      </View>
      <View style={homeStyle.container}>
        <TextInput
          value={input}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChangeText={text => onSetInput(text)}
          style={isFocus ? homeStyle.inputFocus : homeStyle.inputNormal}
        />
      </View>
      <View style={homeStyle.container}>
        <TouchableOpacity onPress={onSubmitInput} onLongPress={onSubmitInput}>
          <Image style={homeStyle.pushBtn} source={images.home.pushBtn} />
        </TouchableOpacity>
      </View>
    </>
  );
}

Play.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  inputCurrent: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  inputCurrent: makeInputCurrent(),
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Play);
