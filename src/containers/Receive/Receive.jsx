import React, { useEffect } from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { copyText } from '@/utils/functions';

import './Receive.scss';

const Receive = () => {
  const [form] = Form.useForm();
  const id = '22365117';
  const refer = 'https://accounts...f=22365117';

  useEffect(() => {
    form.setFieldsValue({
      id,
      refer,
    });
  }, [form]);

  return (
    <div className="Receive">
      <div className="container">
        <div className="Receive-wrapper">
          <Row gutter={32}>
            <Col lg={{ span: 15 }} xs={{ span: 24 }}>
              <div className="Receive-info flex items-center justify-around">
                <div className="Receive-info-item">
                  <div className="Receive-info-item-title subheading">You receive</div>
                  <div className="Receive-info-item-value big-title-02">20%</div>
                </div>
                <div className="Receive-info-item">
                  <div className="Receive-info-item-title subheading">Friends receive</div>
                  <div className="Receive-info-item-value big-title-02">0%</div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 9 }} xs={{ span: 24 }}>
              <div className="Receive-control">
                <Form form={form} layout="vertical">
                  <Form.Item name="id" label="ID">
                    <Input
                      size="small"
                      readOnly
                      suffix={
                        <Icon
                          className="cursor-pointer"
                          name={EIconName.Copy}
                          color={EIconColor.WHITE}
                          onClick={() => copyText(id)}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item name="refer" label="Link refer">
                    <Input
                      size="small"
                      readOnly
                      suffix={
                        <Icon
                          className="cursor-pointer"
                          name={EIconName.Copy}
                          color={EIconColor.WHITE}
                          onClick={() => copyText(refer)}
                        />
                      }
                    />
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Receive;
