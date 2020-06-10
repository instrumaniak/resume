import React from 'react'

import Title from './Title'
import List, { Item } from './List'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
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

  companyPositionsContainer: {
    marginTop: 5,
    marginLeft: 2,
    paddingLeft: 8,
    paddingTop: 5,
    // borderLeftWidth: 1,
    // borderLeftColor: "lightgrey",
  },
  companyTitle: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Lato Bold',
    borderBottomWidth: 0.5,
    borderBottomColor: 'darkgrey',
    paddingBottom: 5,
  },
})

const CompanyEntry = ({ company, location, positions }) => {
  return (
    <View style={styles.companyContainer}>
      <Text style={styles.companyTitle}>
        {company} {`  `}
        <Text style={styles.date}>{location}</Text>
      </Text>
      <View style={styles.companyPositionsContainer}>
        {positions.map((position, idx) => (
          <ExperienceEntry
            company={company}
            location={location}
            date={position.date}
            details={position.details}
            position={position.title}
            key={idx}
            isLast={positions.length - 1 === idx}
          />
        ))}
      </View>
    </View>
  )
}

const ExperienceEntry = ({
  company,
  location,
  details,
  position,
  date,
  isLast,
}) => {
  return (
    <View style={[styles.entryContainer, isLast ? { marginBottom: 0 } : {}]}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{position}</Text>
          {/* <Text style={styles.date}>{location}</Text> */}
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
  )
}

const experienceData = [
  {
    company: 'Nascenia',
    location: 'Dhaka, Bangladesh',

    positions: [
      {
        title: 'Software Engineer',
        date: 'August, 2019 - Present',
        details: [
          `Building complex single page web application frontend (fuel tax calculations, reports, data visualization) for European clients (PWC, Preem) & local clients. \n\nOverall Tech stack: TypeScript, React with hooks, Redux, React Router, Material UI, React Final Form, React-PDF, React-Intl.`,
        ],
      },
    ],
  },
  {
    company: 'HiFi Digital Ltd.',
    location: 'Dhaka, Bangladesh',

    positions: [
      {
        title: 'Software Engineer',
        date: 'Jully, 2018 - Jully, 2019',
        details: [
          `Ported the React/Redux frontend of their news/media/blog site (https://hifipublic.com) to NextJS/React for full server side rendering with caching support in the Express/Node.js & improved SEO. Deployed it to AWS EC2.`,
          `Worked on some of their client's projects using these tech: React, Redux, React Native, Express, Node.js`,
        ],
      },
      {
        title: 'Apprentice Software Engineer',
        date: 'April - June, 2018',
        details: [
          `Ported their news/media/blog site (https://hifipublic.com) front end which was in Angular to React/Redux while keeping the old design the same.`,
          `Deployed the site on Amazon AWS EC2. Implemented dynamic meta data rendering from server side using Express/Node.js which was required for social media sharing.`,
        ],
      },
    ],
  },
]

const Experience = () => (
  <View style={styles.container}>
    <Title>Work Experience</Title>
    {experienceData.map(({ company, location, positions }, idx) => (
      <View
        style={experienceData.length - 1 === idx ? {} : { marginBottom: 10 }}
        key={idx}
      >
        <CompanyEntry
          company={company}
          location={location}
          positions={positions}
          key={company + location}
        />
      </View>
    ))}
  </View>
)

export default Experience
