import React from 'react';

import Tab from '@/components/Tab';
import TokenOwned from '@/containers/TokenOwner/TokenOwned';
import Contributions from '@/containers/TokenOwner/Contributions';

import { EKeyTabTokenOwner } from './TokenOwner.data';
import './TokenOwner.scss';

const TokenOwner = () => {
  const dataTabsTokenOwner = [
    { value: EKeyTabTokenOwner.TOKENS_OWNED, label: 'Tokens Owned', children: <TokenOwned /> },
    { value: EKeyTabTokenOwner.CONTRIBUTIONS, label: 'Contributions', children: <Contributions /> },
    { value: EKeyTabTokenOwner.INSURANCE, label: 'Insurance', children: <></> },
  ];

  return (
    <section className="TokenOwner">
      <div className="container">
        <div className="TokenOwner-wrapper">
          <Tab defaultActiveKey={EKeyTabTokenOwner.TOKENS_OWNED} data={dataTabsTokenOwner} />
        </div>
      </div>
    </section>
  );
};

export default TokenOwner;
