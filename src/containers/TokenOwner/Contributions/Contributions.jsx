import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import Progress from '@/components/Progress';

import './Contributions.scss';

const Contributions = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const renderContentContributionsItem = () => {
    return (
      <>
        <div className="Contributions-item-description headline">Soft/Hard</div>
        <div className="Contributions-item-price heading-02">
          <span>$6,000,000 - $10,000,000</span>
        </div>
        <div className="Contributions-item-progress">
          <div className="Contributions-item-progress-title heading-02">Progress (80%)</div>
          <div className="Contributions-item-progress-control">
            <Progress value={80} />
          </div>
          <div className="Contributions-item-progress-description button-label">$8,000,000/$10,000,000</div>
        </div>

        <div className="Contributions-item-text">
          <span className="body-01">Liquidity %:</span>
          <span className="body-01">70%</span>
        </div>

        <div className="Contributions-item-text">
          <span className="body-01">Lockup Time:</span>
          <span className="body-01">90 days</span>
        </div>
      </>
    );
  };

  return (
    <div className="Contributions">
      <Row gutter={64}>
        {[1, 2, 3].map((item) => (
          <Col key={item} xs={{ span: 24 }} lg={{ span: 8 }}>
            <div className="Contributions-item">
              <div className="Contributions-item-image"></div>
              <div className="Contributions-item-info">
                <div className="Contributions-item-title heading-03">XANA</div>
                {!isMobile && renderContentContributionsItem()}
              </div>
              {isMobile && <div className="Contributions-item-content">{renderContentContributionsItem()}</div>}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contributions;
