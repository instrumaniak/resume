import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 30,
    paddingLeft: 15
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
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
    marginBottom: 10,
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
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
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

const experienceData = [
  {
    company: 'HiFi Digital Ltd.',
    date: 'Jully, 2018 - Present',
    details: [
      `Ported the React/Redux frontend of their news/media/blog site (https://www.hifipublic.com) to NextJS/React for full server side rendering with caching support in the Express/Node.js & improved SEO. Deployed it to AWS EC2. `,
      `Worked on some of their client's projects using these tech: React, Redux, React Native, Express, Node.js`
    ],
    position: 'Software Engineer',
  },
  {
    company: 'HiFi Digital Ltd.',
    date: 'April - June, 2018',
    details: [
      `Ported their news/media/blog site (https://hifipublic.com) front end which was in Angular to React/Redux while keeping the old design the same.`,
      `Deployed the site on Amazon AWS EC2. Implemented dynamic meta data rendering from server side using Express/Node.js which was required for social media sharing.`
    ],
    position: 'Apprentice',
  },
];

const Experience = () => (
  <View style={styles.container}>
    <Title>Experience</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default Experience;
