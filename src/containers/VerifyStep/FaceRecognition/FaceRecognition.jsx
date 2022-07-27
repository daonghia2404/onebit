import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Upload from '@/components/Upload';
import Button from '@/components/Button';
import ImageAvatarCover from '@/assets/images/image-avatar-cover.png';
import ModalUpload from '@/containers/ModalUpload';

import './FaceRecognition.scss';

const FaceRecognition = ({ onNext }) => {
  const [form] = Form.useForm();
  const [visibleUploadAvatar, setVisibleUploadAvatar] = useState(false);

  const handleOpenUploadAvatarModal = () => {
    setVisibleUploadAvatar(true);
  };

  const handleCloseUploadAvatarModal = () => {
    setVisibleUploadAvatar(false);
  };

  return (
    <div className="FaceRecognition">
      <Form layout="vertical" form={form} className="FaceRecognition-wrapper">
        <div className="FaceRecognition-card flex items-center">
          <Form.Item label="Upload Selfie Photo" onClick={handleOpenUploadAvatarModal}>
            <Upload disabled cover={ImageAvatarCover} />
          </Form.Item>

          <div className="VerifyStep-list">
            <div className="VerifyStep-list-item description-01">
              Take a selfie of yourself with a neutral expression
            </div>
            <div className="VerifyStep-list-item description-01">
              Make sure your whole face is visible, centred, and your eyes are open
            </div>
            <div className="VerifyStep-list-item description-01 inactive">
              Do not crop your ID or use screenshots of your ID
            </div>
            <div className="VerifyStep-list-item description-01 inactive">
              Do not hide or alter parts of your face No hats/beauty images/filters/headgear)
            </div>
          </div>
        </div>

        <div className="FaceRecognition-card">
          <Row gutter={12} align="middle">
            <Col span={12}></Col>
            <Col span={12}>
              <div className="flex justify-end">
                <Button title="Next" onClick={onNext} />
              </div>
            </Col>
          </Row>
        </div>
      </Form>

      <ModalUpload
        visible={visibleUploadAvatar}
        onClose={handleCloseUploadAvatarModal}
        onSubmit={handleCloseUploadAvatarModal}
        title="Upload Selfie Photo"
        data={[{ label: '', name: 'avatar' }]}
      />
    </div>
  );
};

export default FaceRecognition;
