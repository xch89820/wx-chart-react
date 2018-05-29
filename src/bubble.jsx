import React from 'react';
import WxChartReact from './base.jsx';
import { WxBubble } from 'wx-chart';

class WxBubbleReact extends WxChartReact {
    initChart(el) {
        return new WxBubble(el, this.props);
    }
}

export default WxBubbleReact;