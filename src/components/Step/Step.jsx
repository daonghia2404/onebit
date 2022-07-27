import React from 'react';
import classNames from 'classnames';

import './Step.scss';

const Step = ({ currentStep, data = [], onChange }) => {
  const checkAvaiableStep = (step) => {
    return step < currentStep;
  };

  const handleChangeStep = (step) => {
    if (checkAvaiableStep(step)) {
      onChange?.(step);
    }
  };

  return (
    <div className="Step">
      <div className="Step-wrapper">
        <div className="Step-header flex">
          {data.map((item) => (
            <div
              className={classNames('Step-header-item flex flex-col items-center justify-center', {
                active: currentStep === item.step,
                'cursor-pointer': checkAvaiableStep(item.step),
              })}
              onClick={() => handleChangeStep(item.step)}
            >
              <div className="Step-header-item-step big-title-02">{item.label}</div>
              <div className="Step-header-item-title">{item.title}</div>
              <div className="Step-header-item-line" />
            </div>
          ))}
        </div>

        <div className="Step-main">{data.find((item) => item.step === currentStep)?.children}</div>
      </div>
    </div>
  );
};

export default Step;
