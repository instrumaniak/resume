import React from 'react'

import { Text, StyleSheet } from '@react-pdf/renderer'

interface TitleProps {
  children: React.ReactNode
  style?: any
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato',
    fontWeight: 300,
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
})

const Title = ({ children, style }: TitleProps) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

export default Title
