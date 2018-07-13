import React from 'react'
import ReactDOM from 'react-dom'

const requireTests = require.context('../lib', true, /\.screenshot\.js$/)
const tests = requireTests.keys().map(requireTests)

console.log(tests)
const Tests = () => (
  <div>
    {tests.map((TestCase, index) => {
      return (
        <div
          key={index}
          className="testCase"
          style={{display: 'inline-block'}}
          title={TestCase.displayName}
        >
          <TestCase />
        </div>
      )
    })}
  </div>
)

ReactDOM.render(<Tests />, document.getElementById('root'));
