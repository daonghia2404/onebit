import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button from '@/components/Button';
import Select from '@/components/Select';
import ModalUpload from '@/containers/ModalUpload';

import './Id.scss';

const Id = ({ onNext }) => {
  const [form] = Form.useForm();
  const [visibleUploadIdCard, setVisibleUploadIdCard] = useState(false);
  const [visibleDriverLicense, setVisibleDriverLicense] = useState(false);
  const [visiblePassport, setVisiblePassport] = useState(false);

  const handleOpenUploadIdCardModal = () => {
    setVisibleUploadIdCard(true);
  };
  const handleCloseUploadIdCardModal = () => {
    setVisibleUploadIdCard(false);
  };

  const handleOpenDriverLicenseModal = () => {
    setVisibleDriverLicense(true);
  };
  const handleCloseDriverLicenseModal = () => {
    setVisibleDriverLicense(false);
  };

  const handleOpenPassportModal = () => {
    setVisiblePassport(true);
  };
  const handleClosePassportModal = () => {
    setVisiblePassport(false);
  };

  return (
    <div className="Id">
      <Form layout="vertical" form={form} className="Id-wrapper">
        <div className="Id-card">
          <Row gutter={12}>
            <Col span={24}>
              <Form.Item name="nationality" label="Country of Issue">
                <Select options={[]} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="fullName" label="Use a valid government-issued document">
                <Select options={[]} />
              </Form.Item>
            </Col>
          </Row>

          <div className="VerifyStep-list">
            <div className="VerifyStep-list-item description-01">Government-issued</div>
            <div className="VerifyStep-list-item description-01">Original full-size, unedited documents</div>
            <div className="VerifyStep-list-item description-01">
              Place documents against a single-coloured background
            </div>
            <div className="VerifyStep-list-item description-01">Readable, well-lit, coloured images</div>
            <div className="VerifyStep-list-item description-01 inactive">No black and white images</div>
            <div className="VerifyStep-list-item description-01 inactive">No edited or expired documents</div>
          </div>
        </div>

        <div className="Id-card">
          <Row gutter={12} align="middle">
            <Col span={12}></Col>
            <Col span={12}>
              <div className="flex justify-end">
                <Button title="Next" onClick={handleOpenUploadIdCardModal} />
              </div>
            </Col>
          </Row>
        </div>
      </Form>

      <ModalUpload
        visible={visibleUploadIdCard}
        onClose={handleCloseUploadIdCardModal}
        onSubmit={() => {
          handleCloseUploadIdCardModal();
          handleOpenDriverLicenseModal();
        }}
        title="Upload Government-Issued ID Card"
        data={[
          { label: 'Upload front your card.', name: 'frontCard' },
          { label: 'Update back your card.', name: 'backCard', showBackCard: true },
        ]}
      />

      <ModalUpload
        visible={visibleDriverLicense}
        onClose={handleCloseDriverLicenseModal}
        onSubmit={() => {
          handleCloseDriverLicenseModal();
          handleOpenPassportModal();
        }}
        title="Upload Driver's License"
        data={[{ label: 'Upload front your card.', name: 'frontCard' }]}
      />

      <ModalUpload
        visible={visiblePassport}
        onClose={handleClosePassportModal}
        onSubmit={() => {
          handleClosePassportModal();
          onNext?.();
        }}
        title="Upload Passport"
        data={[{ label: 'Upload front your card.', name: 'frontCard' }]}
      />
    </div>
  );
};

export default Id;
