import React from 'react';

import Comments from '@/components/Comments';

import { dataCommentsWhiteList } from './WhiteListResponses.data';
import './WhiteListResponses.scss';

const WhiteListResponses = () => {
  return (
    <section className="WhiteListResponses">
      <div className="container">
        <div className="WhiteListResponses-wrapper">
          <div className="WhiteListResponses-header">
            <h2 className="WhiteListResponses-title big-title-02">Responses</h2>
          </div>

          <div className="WhiteListResponses-body">
            <Comments data={dataCommentsWhiteList} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteListResponses;
