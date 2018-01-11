import React, { PropTypes } from 'react';
import { Button } from 'antd';
import createG2 from 'g2-react';
import G2 from 'g2';

const Chart = createG2((chart) => {
  const Stat = G2.Stat;
  chart.legend({
    title: '验收结果统计',
    position: 'right',
  });
  chart.coord('theta', {
    radius: 0.8,
    inner: 0.4,
  });
  chart.tooltip({
    title: null,
  });
  chart.intervalStack().position(Stat.summary.percent('value'))
    .color('name')
    .label('..percent', {
      offset: -2,
    })
    .style({
      lineWidth: 1,
    });
  chart.render();
});
class OutputDetailSixthData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
      totalNum: 321,
      passNum: 123,
      unPassNum: 34,
      unAcceptNum: 199,
      data: [
        { name: '通过', value: 38 },
        { name: '未验收', value: 12 },
        { name: '不通过', value: 20 },
      ],
      forceFit: true,
      height: 200,
      width: 200,
      plotCfg: {
        margin: [0, 50, 6, 15],
      },
    };
  }
  render() {
    return (
      <div className="OutputDetailSixthData_container">
        <h4 style={{ display: 'inline-block' }}>软件出库验收</h4>
        <Button type="primary" style={{ float: 'right' }} onClick={() => { this.props.showTable(); }} >验收结果统计表</Button>
        <div className="OutputDetailSixthData_totalNum">{this.state.totalNum}</div>
        <div style={{ marginBottom: 30 }}>
          <div className="OutputDetailSixthData_num_wrap">
            <span className="OutputDetailSixthData_passdot" />
            <span className="OutputDetailSixthData_passnum">通过数量</span>
            <span>{this.state.passNum}</span>
          </div>
          <div className="OutputDetailSixthData_num_wrap">
            <span className="OutputDetailSixthData_unpassdot" />
            <span className="OutputDetailSixthData_passnum">不通过数量</span>
            <span>{this.state.unPassNum}</span>
          </div>
          <div className="OutputDetailSixthData_num_wrap">
            <span className="OutputDetailSixthData_unAcceptdot" />
            <span className="OutputDetailSixthData_passnum">未验收数量</span>
            <span>{this.state.unAcceptNum}</span>
          </div>
        </div>
        <h4>验收结果分布</h4>
        <div>
          <Chart
            data={this.state.data}
            height={this.state.height}
            width={this.state.width}
            plotCfg={this.state.plotCfg}
            forceFit={this.state.forceFit}
          />
        </div>
      </div>
    );
  }
}
OutputDetailSixthData.propTypes = {
  showTable: PropTypes.func.isRequired,
};
export default OutputDetailSixthData;
