import React from 'react';
import { Col, Form, Row } from 'antd';

import Button from '@/components/Button';
import Upload from '@/components/Upload';
import Modal from '@/components/Modal';

import './ModalUpload.scss';

const ModalUpload = ({ title, visible, onClose, onSubmit, data = [] }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSubmit?.();
  };

  return (
    <Modal width={870} visible={visible} closeable={false} onClose={onClose} className="ModalUpload">
      <div className="ModalUpload-wrapper">
        <div className="ModalUpload-title heading-03">{title}</div>
        <Form layout="vertical" form={form} className="ModalUpload-main" onFinish={handleSubmit}>
          <Row gutter={16}>
            {data.map((item) => (
              <Col key={item.name} lg={{ span: 12 }} span={24}>
                <Form.Item name={item.name} label={item.label}>
                  <Upload showBackCard={item.showBackCard} />
                </Form.Item>
              </Col>
            ))}
          </Row>
          <br />
          <div className="ModalUpload-submit">
            <Row gutter={12}>
              <Col lg={{ span: 12 }} span={24}>
                <Button title="Canncel" onClick={onClose} />
              </Col>
              <Col lg={{ span: 12 }} span={24}>
                <Button htmlType="submit" title="Submit" />
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalUpload;
