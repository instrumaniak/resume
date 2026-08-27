/**
 * Basic markdown support for bold, italic inside <Text /> components
 */

import { type ReactNode } from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

export type MarkdownNode = string | ReactNode
// Pattern for **bold**, *italic* and _italic_
const MD_PATTERN = /\*\*([^*]+)\*\*|\*([^*]+)\*|_([^_]+)_/g

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
})

export const parseMarkdown = (input: string): MarkdownNode[] => {
  const nodes: MarkdownNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of input.matchAll(MD_PATTERN)) {
    const [full, bold, italicStar, italicUnderscore] = match
    const start = match.index

    if (start === undefined) continue

    if (start > lastIndex) {
      nodes.push(input.slice(lastIndex, start))
    }

    if (bold !== undefined) {
      nodes.push(
        <Text key={key++} style={styles.bold} data-markdown-type="bold">
          {bold}
        </Text>,
      )
    }

    const italicContent = italicStar ?? italicUnderscore
    if (italicContent) {
      nodes.push(
        <Text key={key++} style={styles.italic} data-markdown-type="italic">
          {italicContent}
        </Text>,
      )
    }

    lastIndex = start + full.length
  }

  if (lastIndex < input.length) {
    nodes.push(input.slice(lastIndex))
  }

  return nodes
}
