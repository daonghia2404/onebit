import React from 'react';
import { Col, Row } from 'antd';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';

import './VeritfyCompleted.scss';

const VeritfyCompleted = ({}) => {
  return (
    <div className="VeritfyCompleted">
      <div className="VeritfyCompleted-wrapper">
        <div className="VeritfyCompleted-card flex flex-col items-center justify-center text-center">
          <div className="VeritfyCompleted-text heading-03">Verification Complete</div>
          <div className="VeritfyCompleted-icon">
            <Icon name={EIconName.VeritfyCompleted} color={EIconColor.WHITE} />
          </div>

          <div className="VeritfyCompleted-text">Let's experience it now</div>
        </div>

        <div className="VeritfyCompleted-card">
          <Row gutter={12} align="middle">
            <Col span={12}></Col>
            <Col span={12}>
              <div className="flex justify-end">
                <Button title="Home" link={Paths.Home} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default VeritfyCompleted;
