import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Input, Radio, Icon } from 'antd';
import './Query.css';

const Search = Input.Search;
const RadioGroup = Radio.Group;
class QueryDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log('query', this.props.location);
    const { location } = this.props;
    let current;
    if (location && location.query) {
      current = location.query.value;
    } else {
      current = '';
    }
    this.state = {
      current,
      value: '全部',
      maindata: [
        { picSrc: '/images/unit.jpg',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/software.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '软件',
        }, { picSrc: '/images/develop.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/unit.jpg',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/manege.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/software.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '软件',
        }, { picSrc: '/images/develop.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/unit.jpg',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，',
          process: '134',
          type: '单位',
        }, { picSrc: '/images/software.png',
          title: '远程目标判断软件',
          developUnit: '中船重工研究所',
          detail: '在水中进行观察和测量，具有得天独厚条件的只有声波。这是由于其他探测手段的作用距离都很短，。',
          time: '2017-4-26 16:08',
          fault: '23',
          software: '200',
          process: '134',
          type: '软件',
        },
      ],
      currentdata: [],
    };
  }
  componentWillMount() {
    const mainContent = this.state.maindata;
    this.setState({ currentdata: mainContent });
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    }, () => {
      console.log(this.state.value);
      if (this.state.value === '全部') {
        const mainContent = this.state.maindata;
        this.setState({ currentdata: mainContent });
      }
      if (this.state.value === '单位') {
        const mainContent = this.state.maindata.filter((item) => {
          return item.type === '单位';
        });
        this.setState({ currentdata: mainContent });
      }
      if (this.state.value === '软件') {
        const mainContent = this.state.maindata.filter((item) => {
          return item.type === '软件';
        });
        this.setState({ currentdata: mainContent });
      }
    });
  }
  render() {
    const routerSoftware = '/main/SoftwareInfo/SoftwareInfoDetail/1';
    const routerUnit = '/main/SoftwareInfo/UnitDetail/1';
    const cards = this.state.currentdata.map((item, index) => {
      return (
        <Link to={item.type === '软件' ? routerSoftware : routerUnit} className="QueryDetail_container" key={index} style={{ color: '#000' }}>
          <div className="QueryDetail_content_left">
            <div className={item.type === '软件' ? 'QueryDetail_content_left_unit' : 'QueryDetail_content_left_software'} >
              <span>{item.type}</span>
            </div>
            <div className="QueryDetail_content_left_detail">
              <h3 style={{ marginBottom: 10 }} >{item.title}</h3>
              <div>
                <span style={{ marginRight: 20 }}>研发单位：</span>
                <span>{item.developUnit}</span>
              </div>
              <div className="QueryDetail_content_left_context">{item.detail}</div>
            </div>
          </div>
          <div className="QueryDetail_content_right">
            <div><time>{item.time}</time></div>
            <div className="QueryDetail_content_Icon"><Icon type="exclamation-circle-o" /><span>故障</span><span>{item.fault}</span></div>
            <div className="QueryDetail_content_Icon"><Icon type="appstore-o" /><span>软件</span><span>{item.software}</span></div>
            <div className="QueryDetail_content_Icon"><Icon type="sync" /><span>流程</span><span>{item.process}</span></div>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <div>
          <Search style={{ width: '30%', height: 40, marginRight: 20 }} value={this.state.current} />
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio value="全部" defaultValue>全部</Radio>
            <Radio value="单位">单位</Radio>
            <Radio value="软件">软件</Radio>
          </RadioGroup>
        </div>
        {cards}
      </div>
    );
  }
}
QueryDetail.propTypes = {
  location: PropTypes.object.isRequired,
};
export default QueryDetail;
