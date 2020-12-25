import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'
import { educationData } from '../data'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 5,
  },
  degree: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
    marginBottom: 5,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
})

export default () => (
  <View style={styles.container}>
    <Title>Formal Education</Title>
    {educationData.map(({ degree, school, duration }) => (
      <>
        <Text style={styles.degree}>{degree}</Text>
        <Text style={styles.school}>{school}</Text>
        <Text style={styles.candidate}>{duration}</Text>
      </>
    ))}
  </View>
)
