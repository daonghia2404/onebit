import React from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import Comment from '@/components/Comment/Comment';

import './Comments.scss';

const Comments = ({ data = [] }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.resetFields();
    setVisibleReply(false);
  };

  return (
    <div className="Comments">
      <div className="Comments-list">
        {data.map((item, index) => {
          const isChild = item?.children && item?.children?.length > 0;
          return (
            <div className="Comments-list-item">
              <Comment key={index} {...item} />

              {isChild && (
                <div className="Comments-list-item-replies">
                  {item.children?.map((child, idxChild) => (
                    <div className="Comments-list-item">
                      <Comment key={idxChild} {...child} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Form layout="vertical" className="Comments-control" onFinish={handleSubmit}>
        <Form.Item name="message" label="Message">
          <TextArea />
        </Form.Item>
        <Button title="Submit" />
      </Form>
    </div>
  );
};

export default Comments;
