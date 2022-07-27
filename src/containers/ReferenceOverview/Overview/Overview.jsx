import React, { useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';

import { dataFilterOverview, EKeyFilterOverview } from './Overview.data';
import './Overview.scss';

const Overview = () => {
  const [activeKeyFilter, setActiveKeyFilter] = useState(EKeyFilterOverview.ALL);

  const handleChangeKeyFilter = (key) => {
    setActiveKeyFilter(key);
  };

  return (
    <div className="Overview">
      <div className="Overview-filter flex">
        {dataFilterOverview.map((item) => (
          <div
            key={item.value}
            className={classNames('Overview-filter-item button-label', { active: activeKeyFilter === item.value })}
            onClick={() => handleChangeKeyFilter(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="Overview-main">
        <Row gutter={32}>
          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
            <div className="Overview-main-item">
              <div className="Overview-main-title subheading">Your income</div>
              <div className="Overview-main-value big-title-02">0.05BTC</div>
            </div>
          </Col>
          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
            <div className="Overview-main-item">
              <div className="Overview-main-title subheading">friends already started trading</div>
              <div className="Overview-main-value big-title-02">28</div>
            </div>
          </Col>
          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
            <div className="Overview-main-item">
              <div className="Overview-main-title subheading">FRIENDS</div>
              <div className="Overview-main-value big-title-02">300</div>
            </div>
          </Col>
          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
            <div className="Overview-main-item">
              <div className="Overview-main-title subheading">
                <span>Rewards for top people </span>

                <a className="description-02" href="#">
                  Xem quy định giới thiệu
                </a>
              </div>
              <div className="Overview-main-value big-title-02">25.07BTC</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
