import React from 'react';
import ReactDOM from 'react-dom';
import WxChartReact from './base.jsx';
import { WxDoughnut } from 'wx-chart';

class WxDoughnutReact extends WxChartReact {
    initChart(el) {
        return new WxDoughnut(el, this.props);
    }
}

export default WxDoughnutReact;