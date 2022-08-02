import React from 'react';
import { Col, Form, Row } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import { dataSocials } from '@/containers/Footer/Footer.data';

import './Contact.scss';

const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="Contact">
      <div className="container">
        <div className="Contact-wrapper flex justify-between">
          <div className="Contact-wrapper-item">
            <h3 className="Contact-subtitle subheading">CONTACT</h3>
            <h4 className="Contact-text heading-03">Join Our Community</h4>
            <div className="Contact-socials flex items-center justify-between">
              {dataSocials.map((item, index) => (
                <a key={index} href={item.link} className="Contact-socials-item" target="_blank">
                  <Icon name={item.icon} color={EIconColor.WHITE} />
                </a>
              ))}
            </div>

            <div className="Contact-contacts">
              <div className="Contact-contacts-item flex items-center">
                <div className="Contact-contacts-item-icon">
                  <Icon name={EIconName.PhoneCall} color={EIconColor.WHITE} />
                </div>
                <div className="Contact-contacts-item-info">
                  <div className="Contact-contacts-item-info-subtitle description-01">Phone</div>
                  <a href="tel: 012348921" className="Contact-contacts-item-info-title heading-03">
                    +84 1234 8921
                  </a>
                </div>
              </div>

              <div className="Contact-contacts-item flex items-center">
                <div className="Contact-contacts-item-icon">
                  <Icon name={EIconName.Mail} color={EIconColor.WHITE} />
                </div>
                <div className="Contact-contacts-item-info">
                  <div className="Contact-contacts-item-info-subtitle description-01">Email</div>
                  <a href="mailto: info@blockstartup.vn" className="Contact-contacts-item-info-title heading-03">
                    info@blockstartup.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="Contact-wrapper-item">
            <Form form={form} layout="vertical" className="Contact-form" onFinish={handleSubmit}>
              <Row gutter={16}>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <Form.Item label="Name" name="name" rules={[validationRules.required()]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Subject" name="subject" rules={[validationRules.required()]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Message" name="message" rules={[]}>
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button title="Submit" htmlType="submit" />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
