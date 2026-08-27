import React from 'react'

import type { ExperienceItem, ExperienceEntryProps } from '../types'
import Title from './Title'
import List, { Item } from './List'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { experienceTitle, experienceData } from '../data'
import { parseMarkdown } from '../utils/parseMarkdown'

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
    fontFamily: 'Lato',
    fontStyle: 'italic',
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
  expTitle: {
    marginBottom: 14,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  companyPositionsContainer: {
    marginTop: 5,
    marginLeft: 2,
    paddingLeft: 8,
    paddingTop: 5,
  },
  companyContainer: {
    marginBottom: 10,
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
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  totalDuration: {
    fontSize: 12,
    fontFamily: 'Lato',
    fontStyle: 'italic',
  },
})

const CompanyEntry = ({
  company,
  location,
  totalDuration,
  positions,
}: ExperienceItem) => {
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
            title={position.title}
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
}: ExperienceEntryProps) => {
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
            {parseMarkdown(detail)}
          </Item>
        ))}
      </List>
    </View>
  )
}

const Experience = () => (
  <View style={styles.container}>
    <Title style={styles.expTitle}>{experienceTitle}</Title>
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
      ),
    )}
  </View>
)

export default Experience
