import React from 'react';
import { Col, Row } from 'antd';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Pending.scss';

const Pending = ({ onNext }) => {
  return (
    <div className="Pending">
      <div layout="vertical" className="Pending-wrapper">
        <div className="Pending-card flex flex-col items-center justify-center text-center">
          <div className="Pending-icon">
            <Icon name={EIconName.HouseGlass} color={EIconColor.WHITE} />
          </div>

          <div className="Pending-text">
            We are currently processing your verification. You can check your verification status in the Verification
            Center or in the email you received from us.
          </div>
        </div>

        <div className="Pending-card">
          <Row gutter={12} align="middle">
            <Col span={12}></Col>
            <Col span={12}>
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

export default Pending;
