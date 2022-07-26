import React from 'react';

import BgWhiteListChannel from '@/assets/images/bg-lauchpad.png';

import { dataWhiteListInfo } from './WhiteListDetailInfo.data';
import './WhiteListDetailInfo.scss';

const WhiteListDetailInfo = () => {
  return (
    <section className="WhiteListDetailInfo">
      <div className="container">
        <div className="WhiteListDetailInfo-wrapper">
          <div className="WhiteListDetailInfo-body flex items-center justify-around">
            {dataWhiteListInfo.map((item, index) => (
              <div key={index} className="WhiteListDetailInfo-body-item flex items-center">
                <div className="WhiteListDetailInfo-body-item-info text-center">
                  <h4 className="WhiteListDetailInfo-body-item-info-title heading-03">{item.label}</h4>
                  <div className="WhiteListDetailInfo-body-item-info-value heading-01">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="WhiteListDetailInfo-title big-title-01 text-center">XANA</h2>
          <div className="WhiteListDetailInfo-image">
            <img src={BgWhiteListChannel} alt="" />
          </div>
          <p className="WhiteListDetailInfo-description description-02">
            Several creative people gather in the same place - that's Collosal. We collaborate to produce the best
            results, loved by clients and comfortable for users. Here we maintain togetherness even though with
            different backgrounds, all the people here are already experts in their respective fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhiteListDetailInfo;
