import React, { useState } from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import TextArea from '@/components/TextArea';

import './Comment.scss';

const Comment = ({ name, time, content, likesCount, isReply }) => {
  const [form] = Form.useForm();
  const [visibleReply, setVisibleReply] = useState(false);

  const handleSubmit = () => {
    form.resetFields();
    setVisibleReply(false);
  };

  return (
    <div className="Comment">
      <div className="Comment-name heading-03">{name}</div>
      <div className="Comment-time body-02">{time}</div>
      <div className="Comment-content body-01">{content}</div>
      <div className="Comment-actions flex flex-wrap items-center">
        <div className="Comment-actions-item body-hightlight">Like</div>
        {isReply && (
          <div className="Comment-actions-item body-hightlight" onClick={() => setVisibleReply(!visibleReply)}>
            Reply
          </div>
        )}

        <div className="Comment-actions-item flex items-center">
          <Icon name={EIconName.Heart} color={EIconColor.WHITE} />
          <span className="body-hightlight">{likesCount}</span>
        </div>
      </div>

      {visibleReply && (
        <div className="Comment-control">
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name="message" label="Message">
              <TextArea />
            </Form.Item>
            <Button htmlType="submit" title="Submit" />
          </Form>
        </div>
      )}
    </div>
  );
};

export default Comment;
