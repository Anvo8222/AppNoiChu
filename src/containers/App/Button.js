import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyle } from './style';

function Button({ type, item, onClick }) {
  const onPressButton = () => {
    onClick(item.sku);
  };

  return item?.value ? (
    <View style={buttonStyle.button}>
      <View style={buttonStyle.buttonText}>
        <TouchableOpacity onPress={onPressButton} onLongPress={onPressButton}>
          <>
            <Text style={buttonStyle.text}>{`${item?.value} ${type}`}</Text>
            <Text style={buttonStyle.textSmall}>{item?.localizedPrice}</Text>
          </>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
}

Button.propTypes = {
  type: PropTypes.oneOf(['TURN', 'SUB']),
  item: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
