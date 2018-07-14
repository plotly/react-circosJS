# react-circos

A React wrapper for [CircosJS](https://github.com/nicgirault/circosJS)

<p align="center">
  <img src="https://github.com/nicgirault/circosJS/raw/faa7f64c6075ee543f43979a1801884b286150f0/doc/temperatures.png" width="60%" alt="temperatures">
  <br/>
  <i>Average temperatures in Paris from 2007 (inner) to 2014 (outer). The circular layout highlights seasonal effect.</i>
</p>

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
