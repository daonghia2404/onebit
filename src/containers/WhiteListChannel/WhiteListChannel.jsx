import React, { useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import { useSelector } from 'react-redux';

import Select from '@/components/Select';
import BgNews from '@/assets/images/bg-news.png';
import BgWhiteListChannel from '@/assets/images/bg-whitelist-channel.png';
import { dataSocials } from '@/containers/Footer/Footer.data';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageContract from '@/assets/images/image-contract.png';
import { copyText } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import Input from '@/components/Input';
import Progress from '@/components/Progress';

import { dataOptionsContractAddress } from './WhiteListChannel.data';
import './WhiteListChannel.scss';

const WhiteListChannel = ({ isBuy, isClaim, isDetail, isJoin }) => {
  const [form] = Form.useForm();
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const renderFormContract = () => {
    return (
      <div className="WhiteListChannel-actions flex flex-col items-end">
        <div>
          <div className="WhiteListChannel-contract-label">Contract address</div>
          <div className="WhiteListChannel-contract flex items-center">
            <div className="WhiteListChannel-contract-icon">
              <img src={ImageContract} alt="" />
            </div>
            <Form.Item name="contract">
              <Select placement="bottomRight" options={dataOptionsContractAddress} borderless />
            </Form.Item>

            <div className="WhiteListChannel-contract-copy">
              <Icon
                name={EIconName.Copy}
                color={EIconColor.WHITE}
                onClick={() => copyText(form.getFieldValue('contract')?.value)}
              />
            </div>
          </div>
        </div>
        {isDetail && (
          <div className="WhiteListChannel-progress">
            <div className="WhiteListChannel-progress-subtitle heading-02">Token Claim start with your rank in</div>
            <div className="WhiteListChannel-progress-hour heading-01">1h 24m 56s</div>
            <div className="WhiteListChannel-progress-title heading-02">Progress (80%)</div>
            <div className="WhiteListChannel-progress-control">
              <Progress value={80} />
            </div>
            <div className="WhiteListChannel-progress-description button-label">$8,000,000/$10,000,000</div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    form.setFieldsValue({
      contract: dataOptionsContractAddress[0],
    });
  }, [form]);

  return (
    <div className="WhiteListChannel">
      <div className="WhiteListChannel-bg">
        <img src={BgNews} alt="" />
      </div>
      <div className="container">
        <Form form={form} layout="vertical" className="WhiteListChannel-wrapper">
          <div className="WhiteListChannel-channel">
            <div className="WhiteListChannel-channel-bg">
              <img src={BgWhiteListChannel} alt="" />
            </div>
            <Row justify="space-between">
              <Col span={24} lg={{ span: 12 }}>
                <div className="WhiteListChannel-channel-info">
                  <div className="WhiteListChannel-channel-info-tags flex flex-wrap">
                    {['IDO', 'NFT'].map((tag, tagInx) => (
                      <div key={tagInx} className="WhiteListChannel-channel-info-tags-item">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="WhiteListChannel-channel-info-title big-title-01">XANA</div>
                  <div className="WhiteListChannel-channel-info-socials flex items-center justify-between">
                    {dataSocials.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="WhiteListChannel-channel-info-socials-item"
                        target="_blank"
                      >
                        <Icon name={item.icon} color={EIconColor.WHITE} />
                      </a>
                    ))}
                  </div>
                  <div className="WhiteListChannel-channel-info-description description-02">
                    Several creative people gather in the same place - that's Collosal. We collaborate to produce the
                    best results, loved by clients and comfortable for users. Here we maintain togetherness even though
                    with different backgrounds, all the people here are already experts in their respective fields.
                  </div>

                  {isMobile && renderFormContract()}

                  <div className="WhiteListChannel-channel-info-requirement">
                    <div className="WhiteListChannel-channel-info-requirement-title heading-02">REQUIREMENTS</div>
                    <table>
                      <tr>
                        <td>
                          <span className="heading-03">IGO Network</span>
                        </td>
                        <td>
                          <span className="heading-03">BNB Chain</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="heading-03">Min Rank</span>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <span className="heading-03">Level 1</span>
                            <Button title="Level up" link={Paths.User} size={isMobile ? 'small' : 'middle'} />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="heading-03">Whitelist</span>
                        </td>
                        <td>
                          <span className="heading-03" style={{ color: EIconColor.DANGER_2 }}>
                            You aren't whitelist
                          </span>
                        </td>
                      </tr>
                    </table>
                    {isBuy && (
                      <div className="WhiteListChannel-buy">
                        <Row gutter={16} align="bottom">
                          <Col span={24} lg={{ span: 18 }}>
                            <Form.Item name="amount" label="Amount">
                              <Input suffix={<div className="WhiteListChannel-buy-suffix">MAX</div>} />
                            </Form.Item>
                          </Col>
                          <Col span={24} lg={{ span: 6 }}>
                            <Button title="Buy" />
                          </Col>
                        </Row>
                      </div>
                    )}
                    {isClaim && (
                      <div className="WhiteListChannel-claim">
                        <div className="WhiteListChannel-claim-text body-02">
                          This pool will start 17h July 26, 2022 UTC
                        </div>
                        <div className="flex">
                          <Button title="Claim (3000/9000)" />
                        </div>
                      </div>
                    )}
                    {isJoin && (
                      <Button
                        title="Join Whitelist"
                        link={Paths.WhiteListDetail}
                        size={isMobile ? 'small' : 'middle'}
                      />
                    )}
                  </div>
                </div>
              </Col>
              <Col>{!isMobile && renderFormContract()}</Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default WhiteListChannel;
