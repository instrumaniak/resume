import React from 'react'

import { Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Light',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
})

const Title = ({ children, style }) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

export default Title
