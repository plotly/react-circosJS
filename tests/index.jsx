import React from 'react';
import ReactDOM from 'react-dom';

const requireTests = require.context('../lib', true, /\.screenshot\.jsx$/);
const tests = requireTests.keys().map(requireTests);

const Tests = () => (
  <div>
    {tests.map(TestCase => (
      <div
        key={TestCase.displayName}
        className="testCase"
        style={{ display: 'inline-block' }}
        title={TestCase.displayName}
      >
        <TestCase />
      </div>
    ))}
  </div>
);

ReactDOM.render(<Tests />, document.getElementById('root'));
