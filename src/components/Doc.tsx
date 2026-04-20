import React from 'react'

import { Document, Font, Page, StyleSheet, View } from '@react-pdf/renderer'

import Header from './Header'
import Summary from './Summary'
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
    fontFamily: 'Lato',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
  },
})

Font.register({
  family: 'Lato',
  fonts: [
    { src: '/fonts/Lato/Lato-Regular.ttf' },
    { src: '/fonts/Lato/Lato-Bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/Lato/Lato-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/Lato/Lato-Light.ttf', fontWeight: 300 },
  ],
})

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: '/fonts/Open_Sans/OpenSans-Regular.ttf' },
  ],
})

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <Header />
    <Summary />
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
    {/* <Text style={styles.footer}>
      This resume was made using JavaScript, React & React PDF! Source:{' '}
      <Link>http://github.com/instrumaniak/resume</Link>
    </Text> */}
  </Page>
)

const Output = () => (
  <Document
    author="Raziur Rahaman"
    keywords="microservices, nodejs, javascript, typescript, express, nestjs, postgresql, mongodb, redis"
    subject="The resume of Raziur Rahman"
    title="Resume"
  >
    <Resume size="A4" />
  </Document>
)

//ReactPDF.render(<Output />, `${__dirname}/output.pdf`)

export default Output
