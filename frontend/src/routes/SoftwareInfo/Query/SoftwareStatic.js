import React from 'react';
import { Row, Col } from 'antd';
import './Query.css';

const SoftwareStatic = () => {
  const softcards = [
    { image: '../../images/soft1.png', title: '软件数量', num: '12,345' },
    { image: '../../images/soft2.png', title: '活跃版本', num: '54,345' },
    { image: '../../images/soft3.png', title: '此库中软件版本', num: '1,345' },
    { image: '../../images/soft4.png', title: '升级完善中软件', num: '6,345' },
    { image: '../../images/soft5.png', title: '技术保障中软件', num: '613' },
  ];
  const softarrs = softcards.map((item, index) => {
    return (
      <Col className="softStatic content" key={index} style={{ flex: 1 }}>
        <img src={item.image} alt="" style={{ display: 'inline-block' }} />
        <div className="text">
          <p>{item.title}</p>
          <p className="number">{item.num}</p>
        </div>
      </Col>
    );
  });
  return (
    <div>
      <div className="software">
        <div className="softwareTitle" >
          <h2>
            软件统计
          </h2>
        </div>
        <Row type="flex" gutter={8} style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
          {softarrs}
          {/*
          <Col style={{ flex: 1 }}>
            {softarrs[0]}
          </Col >
          <Col style={{ flex: 1 }}>
            {softarrs[1]}
          </Col>
          <Col style={{ flex: 1 }}>
            {softarrs[2]}
          </Col>
          <Col style={{ flex: 1 }}>
            {softarrs[3]}
          </Col>
          <Col style={{ flex: 1 }}>
            {softarrs[4]}
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
export default SoftwareStatic;
