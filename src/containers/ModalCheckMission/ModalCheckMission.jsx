import React from 'react';
import { Col, Row } from 'antd';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import FollowChannel from '@/containers/FollowChannel';

import './ModalCheckMission.scss';

const ModalCheckMission = ({ visible, onClose, onSubmit }) => {
  return (
    <Modal width={870} visible={visible} closeable={false} onClose={onClose} className="ModalCheckMission">
      <div className="ModalCheckMission-wrapper">
        <div className="ModalCheckMission-title heading-03">Mission</div>
        <div className="ModalCheckMission-description description-02">
          Required quests that you need to complete before you can rank up.
        </div>
        <FollowChannel />
        <div className="ModalCheckMission-submit">
          <Row gutter={12}>
            <Col span={12}>
              <Button title="Canncel" onClick={onClose} />
            </Col>
            <Col span={12}>
              <Button title="Submit" onClick={onSubmit} />
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCheckMission;
