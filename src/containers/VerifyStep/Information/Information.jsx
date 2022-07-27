import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

import './Information.scss';

const Information = ({ onNext }) => {
  const [form] = Form.useForm();
  const [isReadPolicy, setIsReadPolicy] = useState(false);

  return (
    <div className="Information">
      <Form layout="vertical" form={form} className="Information-wrapper">
        <div className="Information-card">
          <Row gutter={12}>
            <Col span={24}>
              <Form.Item name="nationality" label="Nationality">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="fullName" label="Full name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="birthDay" label="Date of Birth">
                <DatePicker placeholder=" " />
              </Form.Item>
            </Col>
            <Col lg={{ span: 12 }} span={24}>
              <Form.Item name="phone" label="Phone">
                <Input suffix={<div className="Information-send">Send</div>} />
              </Form.Item>
            </Col>
            <Col lg={{ span: 12 }} span={24}>
              <Form.Item name="sms" label="Code SMS">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="Information-card">
          <Row gutter={12} align="middle">
            <Col lg={{ span: 12 }} span={18}>
              <Checkbox
                value={isReadPolicy}
                onChange={setIsReadPolicy}
                label={
                  <>
                    I fully understand and agree with the <a href="#">Policy</a>
                  </>
                }
              />
            </Col>
            <Col lg={{ span: 12 }} span={6}>
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

export default Information;
