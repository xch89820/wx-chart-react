import React from 'react';
import ReactDOM from 'react-dom';
import WxChartReact from './base.jsx';
import { WxBar } from 'wx-chart';

class WxBarReact extends WxChartReact {
    initChart(el) {
        return new WxBar(el, this.props);
    }
}

export default WxBarReact;