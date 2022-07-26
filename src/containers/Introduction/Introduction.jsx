import React, { useState } from 'react';

import IntroductionCircle from './IntroductionCircle';
import IntroductionPlan from '@/containers/Introduction/IntroductionPlan';
import IntroductionRocket from '@/containers/Introduction/IntroductionRocket';
import ImagePlan from '@/assets/images/image-plane.svg';
import ImageArrows from '@/assets/images/image-arrows.svg';

import './Introduction.scss';

const Introduction = () => {
  const [visible, setVisible] = useState(0);

  const handleChangeVisible = () => {
    setVisible((visible + 1) % 3);
  };

  return (
    <section className="Introduction">
      <div className="container">
        <div className="Introduction-wrapper flex items-start justify-between">
          <div className="Introduction-wrapper-item">
            <h1 className="Introduction-title big-title-01">
              Invest to create
              <br />
              <span>real values</span>
            </h1>

            <p className="Introduction-description description-02">
              Onebit Ventures hoạt động với tư cách quỹ chuyên đầu tư, tư vấn, ươm tạo và hỗ trợ sự phát triển của các
              công ty và dự án mới thành lập.
            </p>

            <ul className="Introduction-list">
              <li className="Introduction-list-item description-01">ONEBIT Startup Launchpad</li>
              <li className="Introduction-list-item description-01">Onebit Crypto Insurance</li>
              <li className="Introduction-list-item description-01">ONEBIT Incubator</li>
              <li className="Introduction-list-item description-01">Onebit Crypto advertising</li>
            </ul>
          </div>
          <div className="Introduction-wrapper-item">
            <IntroductionRocket />
            {/* <IntroductionCircle /> */}
            {/* {visible === 0 && <IntroductionRocket />}
            {visible === 1 && <IntroductionPlan image={ImagePlan} />}
            {visible === 2 && <IntroductionPlan image={ImageArrows} isArrow />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
