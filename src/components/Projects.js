import React from 'react'

import Title from './Title'
import List, { Item } from './List'
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'
import { projectsData } from '../data'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 2.5,
  },
  url: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  tech: {
    fontSize: 10,
    fontFamily: 'Lato Italic',
  },
})

const ProjectEntry = ({ title, tech, details, url }) => {
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>
            {title}
            <Text style={styles.tech}> | {tech}</Text>
          </Text>
        </View>
        <View style={styles.rightColumn}></View>
      </View>
      <Link style={styles.url}>{url}</Link>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  )
}

const Projects = () => (
  <View style={styles.container}>
    <Title>Selected Personal Projects</Title>
    {projectsData.map(({ title, url, tech, details }) => (
      <ProjectEntry
        title={title}
        url={url}
        tech={tech}
        details={details}
        key={title + url}
      />
    ))}
  </View>
)

export default Projects
