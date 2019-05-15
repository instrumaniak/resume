import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Doc from './components/Doc'

// Renders PDF on browser
const App = () => (
  <PDFViewer
    style={{
      width: '100%',
      height: '100vh'
    }}>
    <Doc/>
  </PDFViewer>
)

export default App