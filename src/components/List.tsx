import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer'

interface ListProps {
  children: React.ReactNode
}

interface ItemProps {
  children: React.ReactNode
  style?: any
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 12,
    //fontFamily: 'Lato',
  },
  itemContent: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

const List = ({ children }: ListProps) => children

export const Item = ({ children, style }: ItemProps) => (
  <View style={[styles.item, style]}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
