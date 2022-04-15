import React from 'react'

import {
  Text,
  Link,
  Document,
  Font,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer'

import Header from './Header'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
// import Projects from './Projects'

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingHorizontal: 35,
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flexDirection: 'column',
    width: 180,
    paddingTop: 30,
    paddingRight: 15,
  },
  rightColumn: {
    flexDirection: 'column',
    flex: 1,
  },
  footer: {
    fontSize: 8,
    fontFamily: 'Lato Italic',
    textAlign: 'center',
    color: '#666',
  },
})

Font.register({
  family: 'Open Sans',
  src: `/fonts/Open_Sans/OpenSans-Regular.ttf`,
})
Font.register({
  family: 'Lato',
  src: `/fonts/Lato/Lato-Regular.ttf`,
})
Font.register({
  family: 'Lato Italic',
  src: `/fonts/Lato/Lato-Italic.ttf`,
})
Font.register({
  family: 'Lato Bold',
  src: `/fonts/Lato/Lato-Bold.ttf`,
})
Font.register({
  family: 'Lato Light',
  src: `/fonts/Lato/Lato-Light.ttf`,
})

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Skills />
        <Education />
      </View>
      <View style={styles.rightColumn}>
        <Experience />
        {/* <Projects /> */}
      </View>
    </View>
    <Text style={styles.footer}>
      This resume was made using JavaScript, React & React PDF! Source:{' '}
      <Link>http://github.com/instrumaniak/resume</Link>
    </Text>
  </Page>
)

const Output = () => (
  <Document
    author="Raziur Rahaman"
    keywords="javascript, react, redux, express, nodejs, mongodb"
    subject="The resume of Raziur Rahman"
    title="Resume"
  >
    <Resume size="A4" />
  </Document>
)

//ReactPDF.render(<Output />, `${__dirname}/output.pdf`)

export default Output
