/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'

export type Props = { text: string }

const ExampleComponent: React.FC<Props> = props => {
  const {
    text
  } = props

  const [counter, setCounter] = React.useState(0)

  return (
    <div className={styles.test}>
      Example Component: {text}
      <button onClick={() => setCounter(counter + 1)}>Click!</button>
      {counter}
    </div>
  )
}

export default ExampleComponent
