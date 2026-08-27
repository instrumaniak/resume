import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { summaryText } from '../data'
import { parseMarkdown } from '../utils/parseMarkdown'

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 10,
    lineHeight: 1.2,
    color: '#333',
  },
})

const Summary = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{parseMarkdown(summaryText)}</Text>
  </View>
)

export default Summary
