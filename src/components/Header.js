import React from 'react'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import { headerData } from '../data'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailColumn: {},
  linkColumn: {},
  name: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Lato Light',
    paddingBottom: 0,
  },
  title: {
    fontSize: 12,
    justifySelf: 'flex-end',
    fontFamily: 'Lato Italic',
    paddingLeft: 2.5,
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato Italic',
  },
  link: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
})

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{headerData.name}</Text>
      <Text style={styles.title}>{headerData.tagLine}</Text>
    </View>
    <View style={styles.linkColumn}>
      {headerData.socialLinks.map((link) => (
        <Link style={styles.link}>{link}</Link>
      ))}
    </View>
    <View style={styles.linkColumn}>
      {headerData.links.map((link) => (
        <Link style={styles.link}>{link}</Link>
      ))}
    </View>
  </View>
)
