import React, { useState } from 'react';

import Step from '@/components/Step';
import Information from '@/containers/VerifyStep/Information';
import Id from '@/containers/VerifyStep/Id';
import FaceRecognition from '@/containers/VerifyStep/FaceRecognition';
import Pending from '@/containers/VerifyStep/Pending';
import VeritfyCompleted from '@/containers/VerifyStep/VeritfyCompleted';

import './VerifyStep.scss';

const VerifyStep = () => {
  const [currentStep, setCurrentSTep] = useState(1);

  const handleNextStep = () => {
    setCurrentSTep(currentStep + 1);
  };

  const dataVerifyStep = [
    {
      step: 1,
      label: '01',
      title: 'Information',
      children: <Information onNext={handleNextStep} />,
    },
    {
      step: 2,
      label: '02',
      title: 'ID',
      children: <Id onNext={handleNextStep} />,
    },
    {
      step: 3,
      label: '03',
      title: 'Face recognition',
      children: <FaceRecognition onNext={handleNextStep} />,
    },
    {
      step: 4,
      label: '04',
      title: 'Pending',
      children: <Pending onNext={handleNextStep} />,
    },
    {
      step: 5,
      label: '05',
      title: 'Completed',
      children: <VeritfyCompleted />,
    },
  ];

  return (
    <section className="VerifyStep">
      <div className="container">
        <div className="VerifyStep-wrapper">
          <Step currentStep={currentStep} data={dataVerifyStep} onChange={setCurrentSTep} />
        </div>
      </div>
    </section>
  );
};

export default VerifyStep;
