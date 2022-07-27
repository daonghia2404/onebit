import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { dataPreStakeStatus } from './PreStake.data';
import './PreStake.scss';

const PreStake = ({ onNext }) => {
  const [isReadPolicy, setIsReadPolicy] = useState(false);

  return (
    <div className="PreStake">
      <div className="PreStake-wrapper flex flex-col">
        <div
          className="PreStake-card flex items-center justify-between info"
          style={{ width: '100%', maxWidth: '50%' }}
        >
          <div className="PreStake-info">
            <div className="PreStake-info-title subheading">CURRENT STAKING</div>
            <div className="PreStake-info-value big-title-02">2200</div>
          </div>
          <div className="PreStake-info">
            <div className="PreStake-info-title subheading">PENDING WITHDRAWAL</div>
            <div className="PreStake-info-value big-title-02">1200</div>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          {dataPreStakeStatus.map((item, index) => (
            <div key={index} className="PreStake-status flex items-center justify-between">
              <div className="PreStake-status-item body-01 flex items-center">
                <div className="PreStake-status-item-icon">
                  <Icon name={EIconName.CircleCheck} color={item.active ? EIconColor.SUCCESS_2 : EIconColor.DANGER_2} />
                </div>
                {item.title}
              </div>
              <div className="PreStake-status-item body-01 description">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="PreStake-card" style={{ width: '100%' }}>
          <Row gutter={12} align="middle">
            <Col span={24} lg={{ span: 18 }}>
              <Checkbox
                value={isReadPolicy}
                onChange={setIsReadPolicy}
                label={
                  <>
                    I fully understand and agree with the <a href="#">Ranking System</a> and{' '}
                    <a href="#">New Staking and Unstaking Policy</a>
                  </>
                }
              />
            </Col>
            <Col span={24} lg={{ span: 6 }}>
              <div className="flex justify-end">
                <Button title="Next" onClick={onNext} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default PreStake;
