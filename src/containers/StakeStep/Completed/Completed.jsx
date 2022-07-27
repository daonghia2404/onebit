import React, { useEffect } from 'react';
import { Col, Form, Row } from 'antd';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import Input from '@/components/Input';

import './Completed.scss';
import { copyText } from '@/utils/functions';

const Completed = ({}) => {
  const [form] = Form.useForm();
  const transaction = '0x66dd073c9db38a0b8371003b36fd800a910af61dff35belacbbl7ed382a5c65c';

  useEffect(() => {
    form.setFieldsValue({
      transaction,
    });
  }, [form]);
  return (
    <div className="Completed">
      <div className="Completed-wrapper">
        <div className="Completed-card flex flex-col items-center justify-center text-center">
          <div className="Completed-text heading-03">Stake Complete</div>
          <div className="Completed-icon">
            <Icon name={EIconName.VeritfyCompleted} color={EIconColor.WHITE} />
          </div>

          <div className="Completed-text">You will level up in 30 days</div>
          <Form style={{ width: '100%' }} form={form} layout="vertical">
            <Form.Item name="transaction" label="You can check the transaction hash below">
              <Input
                readOnly
                suffix={<Icon name={EIconName.Copy} color={EIconColor.WHITE} onClick={() => copyText(transaction)} />}
              />
            </Form.Item>
          </Form>
        </div>

        <div className="Completed-card">
          <Row gutter={12} align="middle">
            <Col lg={{ span: 12 }} span={24}>
              <div className="Completed-text body-01">You have successfully staked 1200 ONEB</div>
            </Col>
            <Col lg={{ span: 12 }} span={24}>
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

export default Completed;
