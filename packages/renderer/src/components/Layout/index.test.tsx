import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Layout } from './index'

const Panel: React.FC = () => {
  return <div>panel</div>
}

const Editor: React.FC = () => {
  return <div>Editor</div>
}

test('renders 2 columns with a resize handle', () => {
  const { getByRole } = render(
    <Layout width={1000} panel={<Panel />} editor={<Editor />} />
  )
  const handle = getByRole('handle', { exact: true })
  expect(handle).toBeInTheDocument()

  const panel = getByRole('panel', { exact: true })
  expect(panel).toBeInTheDocument()

  const editor = getByRole('editor', { exact: true })
  expect(editor).toBeInTheDocument()
})

test('renders 200 width of panel', () => {
  const { getByRole } = render(
    <Layout width={1000} panel={<Panel />} editor={<Editor />} />
  )
  const handle = getByRole('handle', { exact: true })
  fireEvent.mouseDown(handle)
  fireEvent.mouseMove(handle, { clientX: 100 })
  fireEvent.mouseUp(handle)

  const panel = getByRole('panel', { exact: true })
  // @ts-ignore
  expect(panel.style.flexGrow).toBe('200')

  const editor = getByRole('editor', { exact: true })
  // @ts-ignore
  expect(editor.style.flexGrow).toBe('800')
})

test('renders 400 width of editor', () => {
  const { getByRole } = render(
    <Layout width={1000} panel={<Panel />} editor={<Editor />} />
  )
  const handle = getByRole('handle', { exact: true })
  fireEvent.mouseDown(handle)
  fireEvent.mouseMove(handle, { clientX: 800 })
  fireEvent.mouseUp(handle)
  const panel = getByRole('panel', { exact: true })
  // @ts-ignore
  expect(panel.style.flexGrow).toBe('600')

  const editor = getByRole('editor', { exact: true })
  // @ts-ignore
  expect(editor.style.flexGrow).toBe('400')
})
