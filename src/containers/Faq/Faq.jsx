import React, { useState } from 'react';

import Collapse from '@/components/Collapse';

import { dataQuestionsAnswer, dataQuestionsType, EKeyQuestionType } from './Faq.data';
import './Faq.scss';
import classNames from 'classnames';

const Faq = () => {
  const [keyQuestionType, setKeyQuestionType] = useState(EKeyQuestionType.GENERAL);

  const handleSetKeyQuestionType = (key) => {
    setKeyQuestionType(key);
  };

  return (
    <section className="Faq">
      <div className="container">
        <div className="Faq-wrapper">
          <div className="Faq-header">
            <h3 className="Faq-subtitle subheading">Faq</h3>
            <h2 className="Faq-title big-title-02">Frequently asked questions, maybe the same as yours</h2>
          </div>

          <div className="Faq-body flex flex-wrap">
            <div className="Faq-body-col">
              <div className="Faq-questions-type">
                {dataQuestionsType.map((item) => (
                  <div
                    key={item.value}
                    className={classNames('Faq-questions-type-item body-01', {
                      active: keyQuestionType === item.value,
                    })}
                    onClick={() => handleSetKeyQuestionType(item.value)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="Faq-body-col">
              <div className="Faq-questions-answer">
                <Collapse accordion defaultActiveKey={[0]} data={dataQuestionsAnswer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
