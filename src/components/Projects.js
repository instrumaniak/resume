import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
  },
  entryContainer: {
    marginBottom: 10,
  },
  url: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
    marginBottom: 5
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
    //marginBottom: 10,
  }
});

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
        <View style={styles.rightColumn}>
        </View>
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
  );
};

const projectsData = [
  {
    title: 'Personal website/Blog',
    url: 'https://github.com/instrumaniak/instrumaniak.github.io',
    tech: 'Gatsby.js, React, GraphQL',
    details: [
      'A static site that uses markdown files for posts & hosted on github pages.',
    ]
  },
  {
    title: 'Local Library',
    url: 'https://github.com/instrumaniak/local-library',
    tech: 'React, Express, Mongoose, MongoDB',
    details: [
      'Book management web app for small libraries'
    ]
  },
  {
    title: 'WikiSearch',
    url: 'https://github.com/instrumaniak/wikiSearch',
    tech: 'React Native, React Navigation',
    details: [
      `A little mobile app to search Wikipedia using it's public search API.`
    ]
  }
];

const Projects = () => (
  <View style={styles.container}>
    <Title>Selected Projects</Title>
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
);

export default Projects;
