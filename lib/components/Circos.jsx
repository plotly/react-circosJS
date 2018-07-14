import React from 'react';
import PropTypes from 'prop-types';
import CircosJS from 'circos';

class Circos extends React.Component {
  componentDidMount() {
    const { size, data, config } = this.props;
    const circos = new CircosJS({
      container: this.ref,
      width: size,
      height: size,
    });
    circos.layout(data, config || {});
    circos.render();
  }

  render() {
    return <div ref={(ref) => { this.ref = ref; }} />;
  }
}

Circos.defaultProps = {
  config: {},
  size: 800,
};
Circos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    len: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  config: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  size: PropTypes.number,
};

module.exports = Circos;
