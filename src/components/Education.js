import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title';

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
});

export default () => (
  <View style={styles.container}>
    <Title>Formal Education</Title>
    <Text style={styles.degree}>Electrical and Electronic Engineering</Text>
    <Text style={styles.school}>Ahsanullah University of Science and Technology, Dhaka, Bangladesh</Text>
    <Text style={styles.candidate}>BSc | 2009</Text>
  </View>
);
