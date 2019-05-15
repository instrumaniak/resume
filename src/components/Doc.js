import React from 'react'
import { Document, Page, View, Text } from '@react-pdf/renderer'

const Doc = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Hello world!</Text>
      </View>
    </Page>
  </Document>
)

export default Doc