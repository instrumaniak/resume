import React from 'react'

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //borderBottomWidth: 0.5,
    //borderBottomColor: "darkgrey",
    //borderBottomStyle: "solid",
    alignItems: 'stretch',
    //paddingBottom: 10,
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Lato Light',
    paddingBottom: 0,
  },
  title: {
    fontSize: 12,
    justifySelf: 'flex-end',
    //textTransform: 'uppercase',
    fontFamily: 'Lato Italic',
    paddingLeft: 2.5,
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    //textTransform: 'uppercase',
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
      <Text style={styles.name}>Raziur Rahman</Text>
      <Text style={styles.title}>React / JavaScript developer</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>+880 167 226 3414</Link>
      <Link style={styles.link}>raziur.eee@gmail.com</Link>
      <Text style={styles.link}>Dhaka, Bangladesh</Text>
      <Link style={styles.link}>{` `}</Link>
      <Link style={styles.link}>https://instrumaniak.github.io</Link>
      <Link style={styles.link}>https://github.com/instrumaniak</Link>
      {/* <Link style={styles.link}>https://codepen.io/instrumaniak</Link> */}
    </View>
  </View>
)
