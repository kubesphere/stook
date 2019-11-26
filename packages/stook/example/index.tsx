import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Counter } from './Counter'
import { Counter2 } from './Counter2'
import { mutate } from './src'
import { devtools } from './devtools'

mutate('COUNTER', 520)

devtools.init()

const App = () => {
  return (
    <div>
      <Counter></Counter>
      <Counter2></Counter2>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
