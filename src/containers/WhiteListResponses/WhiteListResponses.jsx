import React from 'react';

import Comments from '@/components/Comments';

import { dataCommentsWhiteList } from './WhiteListResponses.data';
import './WhiteListResponses.scss';

const WhiteListResponses = () => {
  return (
    <div className="WhiteListResponses">
      <div className="container">
        <div className="WhiteListResponses-wrapper">
          <div className="WhiteListResponses-header">
            <div className="WhiteListResponses-title big-title-02">Responses</div>
          </div>

          <div className="WhiteListResponses-body">
            <Comments data={dataCommentsWhiteList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteListResponses;
