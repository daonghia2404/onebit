import React from 'react';
import { Col, Form, Row } from 'antd';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';
import Input from '@/components/Input';

import './EnterAmount.scss';

const EnterAmount = ({ onNext }) => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);
  const [form] = Form.useForm();

  return (
    <div className="EnterAmount">
      <Form form={form} layout="vertical" className="EnterAmount-wrapper">
        <div className="EnterAmount-card">
          <Form.Item
            name="amount"
            label={
              <span style={{ width: '100%' }} className="flex items-center justify-between">
                <span>Enter the amount of $ONEB you want to stake</span>
                {!isMobile && <span>Current Balance: 1200 ONEB</span>}
              </span>
            }
          >
            <Input suffix={<div className="EnterAmount-suffix">MAX</div>} />
            {isMobile && <span className="EnterAmount-label">Current Balance: 1200 ONEB</span>}
          </Form.Item>
        </div>
        <div className="EnterAmount-card">
          <Row gutter={12} align="middle" justify="space-between">
            <Col></Col>
            <Col>
              <div className="flex justify-end">
                <Button title="Next" onClick={onNext} />
              </div>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default EnterAmount;
