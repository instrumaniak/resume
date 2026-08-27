import React from 'react'
import { parseMarkdown } from './parseMarkdown'

type Flat = { type: 'text' | 'bold' | 'italic'; value: string }

const flatten = (nodes: ReturnType<typeof parseMarkdown>): Flat[] =>
  nodes.map((node) => {
    if (typeof node === 'string') {
      return { type: 'text', value: node }
    }
    const el = node as React.ReactElement<{ children: string }>
    const type: Flat['type'] =
      el.props['data-markdown-type'] === 'bold' ? 'bold' : 'italic'
    return { type, value: el.props.children }
  })

describe('parseMarkdown', () => {
  it('return plain text unchanged when no markdown present', () => {
    expect(flatten(parseMarkdown('just plain text'))).toEqual([
      { type: 'text', value: 'just plain text' },
    ])
  })

  it('parses bold, and italic via both * and _ delimiters', () => {
    expect(
      flatten(parseMarkdown('**bold** *star-italic* _underscore-italic_')),
    ).toEqual([
      { type: 'bold', value: 'bold' },
      { type: 'text', value: ' ' },
      { type: 'italic', value: 'star-italic' },
      { type: 'text', value: ' ' },
      { type: 'italic', value: 'underscore-italic' },
    ])
  })

  it('handles multiple mixed segments with surrounding text', () => {
    expect(
      flatten(parseMarkdown('**bold1** normal *italic1* normal **bold2**')),
    ).toEqual([
      { type: 'bold', value: 'bold1' },
      { type: 'text', value: ' normal ' },
      { type: 'italic', value: 'italic1' },
      { type: 'text', value: ' normal ' },
      { type: 'bold', value: 'bold2' },
    ])
  })

  it('handles markdown flush against string boundaries (no leading/trailing text)', () => {
    expect(flatten(parseMarkdown('**start**middle*end*'))).toEqual([
      { type: 'bold', value: 'start' },
      { type: 'text', value: 'middle' },
      { type: 'italic', value: 'end' },
    ])
  })

  it('returns an empty array for an empty string', () => {
    expect(parseMarkdown('')).toEqual([])
  })

  it('produces unique React keys across all element nodes', () => {
    const keys = parseMarkdown('**a** *b* _c_ **d**')
      .filter((n): n is React.ReactElement => typeof n !== 'string')
      .map((el) => el.key)
    expect(new Set(keys).size).toBe(keys.length)
  })
})
