import React, { PropTypes } from 'react';
import createG2 from 'g2-react';
import G2 from 'g2';

const Chart = createG2((chart) => {
  const Stat = G2.Stat;
  chart.legend({
    position: 'right',
    title: '调配任务统计',
  });
  chart.coord('theta', {
    radius: 1,
    inner: 0.55,
  });
  chart.tooltip({
    title: 'jiguo',
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
class UpgradeSchemeDetailForthStaticData extends React.Component {
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
      height: 300,
      width: 300,
    };
  }
  render() {
    return (
      <div style={{ paddingBottom: 10, borderBottom: '1px solid #ccc', height: 300 }}>
        <h2 style={{ margin: '20px 20px' }}>调配任务统计</h2>
        <div style={{ width: 500 }}>
          <div style={{ fontSize: 50, textAlign: 'center' }} >{this.state.totalNum}</div>
          <div style={{ marginBottom: 30, textAlign: 'center' }}>
            <div className="OutputDetailSixthData_num_wrap">
              <span className="OutputDetailSixthData_passdot" />
              <span className="OutputDetailSixthData_passnum">通过数量</span>
              <span>{this.state.passNum}</span>
            </div>
            <div className="OutputDetailSixthData_num_wrap">
              <span className="OutputDetailSixthData_unpassdot" style={{ left: -3 }} />
              <span className="OutputDetailSixthData_passnum">不通过数量</span>
              <span>{this.state.unPassNum}</span>
            </div>
            <div className="OutputDetailSixthData_num_wrap">
              <span className="OutputDetailSixthData_unAcceptdot" style={{ left: 1 }} />
              <span className="OutputDetailSixthData_passnum">未验收数量</span>
              <span>{this.state.unAcceptNum}</span>
            </div>
          </div>
        </div>
        <div style={{ width: 400, position: 'relative', top: -250, left: 600 }}>
          <Chart
            data={this.state.data}
            height={this.state.height}
            width={this.state.width}
            forceFit={this.state.forceFit}
          />
        </div>
      </div>
    );
  }
}
UpgradeSchemeDetailForthStaticData.propTypes = {
  showTable: PropTypes.func.isRequired,
};
export default UpgradeSchemeDetailForthStaticData;
