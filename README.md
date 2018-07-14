# react-circos

A React wrapper for CircosJS

## Usage

```bash
yarn add react-circos
```

```javascript
import React from 'react';
import Circos, { HEATMAP } from 'react-circos';
import layout from 'examples/fixtures/months.json';
import heatmap from 'examples/fixtures/heatmap.json';

const size = 800;

const HeatmapTest = () => (
  <Circos
    size={800}
    layout={layout}
    config={{
      innerRadius: size / 2 - 80,
      outerRadius: size / 2 - 30,
      ticks: {
        display: false,
      },
      labels: {
        position: 'center',
        display: true,
        size: 14,
        color: '#000',
        radialOffset: 15,
      },
    }}
    tracks={[{
      type: HEATMAP,
      data: heatmap,
      config: {
        innerRadius: 0.8,
        outerRadius: 0.98,
        logScale: false,
        color: 'YlOrRd',
      },
    }]}
  />
);

```

More examples [here](https://github.com/plotly/react-circosJS/tree/master/examples).
The config and data of each track should follow the specification of [circosJS](https://github.com/nicgirault/circosJS)

## Contribute

Useful commands & tips:

```bash
yarn test --watch
yarn build --watch
```

Read about [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/)
