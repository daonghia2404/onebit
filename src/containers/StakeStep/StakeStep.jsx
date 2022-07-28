import React, { useState } from 'react';

import Step from '@/components/Step';
import PreStake from '@/containers/StakeStep/PreStake';
import EnterAmount from '@/containers/StakeStep/EnterAmount';
import Completed from '@/containers/StakeStep/Completed';

import './StakeStep.scss';

const StakeStep = () => {
  const [currentStep, setCurrentSTep] = useState(1);

  const handleNextStep = () => {
    setCurrentSTep(currentStep + 1);
  };

  const dataStakeStep = [
    {
      step: 1,
      label: '01',
      title: 'Pre-Stake',
      children: <PreStake onNext={handleNextStep} />,
    },
    {
      step: 2,
      label: '02',
      title: 'Enter Amount',
      children: <EnterAmount onNext={handleNextStep} />,
    },
    {
      step: 3,
      label: '03',
      title: 'Completed',
      children: <Completed />,
    },
  ];

  return (
    <div className="StakeStep">
      <div className="StakeStep-wrapper">
        <Step currentStep={currentStep} data={dataStakeStep} onChange={setCurrentSTep} />
      </div>
    </div>
  );
};

export default StakeStep;
