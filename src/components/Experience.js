import React from 'react'

import Title from './Title'
import List, { Item } from './List'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { experienceData } from '../data'

const styles = StyleSheet.create({
  container: {
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
  },
  companyTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'darkgrey',
    paddingBottom: 5,
  },
  companyTitle: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Lato Bold',
  },
  totalDuration: {
    fontSize: 12,
    fontFamily: 'Lato Italic',
  },
})

const CompanyEntry = ({ company, location, totalDuration, positions }) => {
  return (
    <View style={styles.companyContainer}>
      <View style={styles.companyTitleContainer}>
        <Text style={styles.companyTitle}>
          {company} {`  `}
          <Text style={styles.date}>{location}</Text>
        </Text>
        <Text style={styles.totalDuration}> {totalDuration}</Text>
      </View>
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

const Experience = () => (
  <View style={styles.container}>
    <Title>Work Experience</Title>
    {experienceData.map(
      ({ company, location, totalDuration, positions }, idx) => (
        <View
          style={experienceData.length - 1 === idx ? {} : { marginBottom: 10 }}
          key={idx}
        >
          <CompanyEntry
            company={company}
            location={location}
            positions={positions}
            totalDuration={totalDuration}
            key={company + location}
          />
        </View>
      )
    )}
  </View>
)

export default Experience
