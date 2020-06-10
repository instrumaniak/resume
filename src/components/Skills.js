import React from 'react'

import Title from './Title'
import List, { Item } from './List'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingTop: 10,
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
    <Title>Tech Skills</Title>
    <SkillEntry
      name="Frontend"
      skills={['HTML5/CSS3', 'Modern JS/ES6+', 'React/React Router/Redux']}
    />
    <SkillEntry name="Backend" skills={['Node.js/Express', 'MongoDB/MySQL']} />
    <SkillEntry name="Mobile" skills={['React Native']} />
    <SkillEntry
      name="Others"
      skills={['Git/Bitbucket/Github', 'Linux/Ubuntu', 'AWS(EC2/S3)/Heroku']}
    />
  </View>
)

export default Skills
