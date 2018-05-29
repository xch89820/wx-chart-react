import React from 'react';

class WxChartReact extends React.Component {
    constructor(props) {
        super(props);

        this._wxChart = null;
        this.state = {
            datasets: []
        };
    }

    initChart() {
        throw new Error('Should be override!');
    }

    render() {
        return <canvas id={this.props.id}
                       style={{width:this.props.width, height:this.props.height, border: '1px solid #ffffff'}}
                       ref={el => this.el = el}></canvas>;
    }
    componentDidMount() {
        let el = this.el;
        let wxChart = this.initChart(el);
        let tipEvent = this.props.tooltipEvent || 'mousemove';

        wxChart.once('draw',(views) => {
            let handler = wxChart.mouseoverTooltip(views);
            wxChart.canvas.canvasInstance.addEventListener(tipEvent, handler);
        });

        this._wxChart = wxChart;
    }

    componentWillUnmount() {
        this._wxChart.destroy();
        this._wxChart = null;
    }

    componentDidUpdate(prevProps, prevState) {
        let datasets = this.state.datasets;
        let wxChart = this._wxChart;
        wxChart.update(datasets);
    }

    update(datasets) {
        this.setState({ datasets: datasets });
    }

    clear() {
        let wxChart = this._wxChart;
        wxChart.clear();
    }
}

export default WxChartReact;