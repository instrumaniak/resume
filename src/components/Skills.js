import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'
import List, { Item } from './List'
import { techSkillsData } from '../data'

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    paddingLeft: 14,
    paddingTop: 10,
  },
  skillTitle: {
    marginBottom: 6,
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skillEntry: {
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
})

const SkillEntry = ({ name, skills }) => (
  <View style={styles.skillEntry}>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
)

const Skills = () => (
  <View style={styles.container}>
    <Title style={styles.skillTitle}>Tech Skills</Title>
    {techSkillsData.map((data) => (
      <SkillEntry name={data.category} skills={data.skills} />
    ))}
  </View>
)

export default Skills
