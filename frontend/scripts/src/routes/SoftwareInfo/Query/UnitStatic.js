import React, { PropTypes } from 'react';
import { Col, Row } from 'antd';

class UnitStatic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRight: [
        { num: '1,242', percent: '25%' },
        { num: '567', percent: '35%' },
        { num: '678', percent: '15%' },
        { num: '345', percent: '45%' },
        { num: '25', percent: '35%' },
      ],
      numLeft: [
        { num: '1242', percent: '10%' },
      ],
    };
  }
  render() {
    const { basic } = this.props;
    const unitArr = this.state.numRight.map((item, index) => {
      // let className = 'Unit' + index;
      const className = `Unit${index}`;
      return (
        <div className={className} key={index} >
          <div className="cont">
            <p>{ basic[index].title }</p>
            <p className="number">{item.num}</p>
          </div>
          <div className="UnitStatic_rate" >
            <img src="../../images/unit11.png" alt="" />
            <span>{item.percent}</span>
            <span className="UnitStatic_last">同比上年度</span>
          </div>
        </div>
      );
    });
    const unitHead = (
      <div className="softStatic" >
        <div className="content">
          <img src="../../images/unit1.png" alt="" style={{ display: 'inline-block' }} />
          <div className="text">
            <p>单位数量</p>
            <p className="number">{ this.state.numLeft[0].num }</p>
            <div className="UnitStatic_rate" >
              <img src="../../images/unit11.png" alt="" />
              <span>{ this.state.numLeft[0].percent }</span>
              <span className="UnitStatic_last">同比上年度</span>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="unitstatic">
        <div className="unitTitle" >
          <h2>
            单位统计
          </h2>
        </div>
        <Row type="flex" gutter={8} style={{ paddingLeft: 30 }} >
          <Col style={{ flex: 2 }}>
            {unitHead}
          </Col>
          <Col style={{ flex: 1 }}>
            {unitArr[0]}
          </Col>
          <Col style={{ flex: 1 }}>
            {unitArr[1]}
          </Col>
          <Col style={{ flex: 1 }}>
            {unitArr[2]}
          </Col>
          <Col style={{ flex: 1 }}>
            {unitArr[3]}
          </Col>
          <Col style={{ flex: 1 }}>
            {unitArr[4]}
          </Col>
        </Row>
      </div>
    );
  }
}
UnitStatic.propTypes = {
  basic: PropTypes.array,
};
UnitStatic.defaultProps = {
  basic: [
    { title: '使用部门' },
    { title: '研发单位' },
    { title: '代表室' },
    { title: '日常管理部门' },
    { title: '管理机关' },
  ],
};

export default UnitStatic;
