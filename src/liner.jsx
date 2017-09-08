import React from 'react';
import ReactDOM from 'react-dom';
import WxChartReact from './base.jsx';
import { WxLiner } from 'wx-chart';

class WxLinerReact extends WxChartReact {
    initChart(el) {
        return new WxLiner(el, this.props);
    }
}

export default WxLinerReact;