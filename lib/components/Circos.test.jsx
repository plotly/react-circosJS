import React from 'react';
import { shallow } from 'enzyme';
import CircosJS from 'circos';
import Circos from './Circos';

jest.mock('circos');

const layoutMock = jest.fn();
const renderMock = jest.fn();
CircosJS.mockImplementation(() => ({
  layout: layoutMock,
  render: renderMock,
}));

describe('Circos', () => {
  beforeEach(() => {
    layoutMock.mockReset();
    renderMock.mockReset();
  });
  it('should call circos.layout with expected props', () => {
    const data = [];
    const config = {};
    shallow(<Circos data={data} config={config} />);
    expect(layoutMock.mock.calls.length).toEqual(1);
    expect(layoutMock.mock.calls[0][0]).toBe(data);
    expect(layoutMock.mock.calls[0][1]).toBe(config);
  });
  it('should use {} as default config for circos.layout', () => {
    shallow(<Circos data={[]} />);
    expect(layoutMock.mock.calls.length).toEqual(1);
    expect(layoutMock.mock.calls[0][1]).toEqual({});
  });
  it('should call circos.render', () => {
    shallow(<Circos data={[]} />);
    expect(renderMock.mock.calls.length).toEqual(1);
  });
});
