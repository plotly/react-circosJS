import React from 'react';
import ReactDOM from 'react-dom';

const requireTests = require.context('../examples', true, /\.jsx$/);

const tests = requireTests.keys().reduce((agg, path) => {
  const parts = path.replace('.jsx', '').split('/');

  return [...agg, {
    name: parts[parts.length - 1],
    Component: requireTests(path),
  }];
}, []);

const Tests = () => (
  <div>
    {tests.map(({ name, Component }) => (
      <div
        key={name}
        className="testCase"
        style={{ display: 'inline-block' }}
        title={name}
      >
        <Component />
      </div>
    ))}
  </div>
);

ReactDOM.render(<Tests />, document.getElementById('root'));
