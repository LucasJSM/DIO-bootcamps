import React from "react";
import { Text, View } from "react-native";
import styles from './style';

const Card = ( { title, children } ) => {
  return(
    <View style={[styles.card]}>
    <View style={[styles.card_header]}>
      <Text style={[styles.defaultText, styles.card_title]}>
        {title}
      </Text>
    </View>
    <View style={[styles.card_content]}>
      {children}
    </View>
  </View>
  )
};

export default Card;