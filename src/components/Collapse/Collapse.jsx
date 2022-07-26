import React from 'react';
import { Collapse as AntdCollapse } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Collapse.scss';

const { Panel } = AntdCollapse;

const Collapse = ({ className, accordion, defaultActiveKey, data = [], onChange }) => {
  return (
    <div className={classNames('Collapse', className)}>
      <AntdCollapse
        accordion={accordion}
        defaultActiveKey={defaultActiveKey}
        onChange={onChange}
        expandIcon={({ isActive }) => (
          <Icon
            className={classNames('Collapse-arrow', { active: isActive })}
            name={EIconName.ArrowUp}
            color={EIconColor.WHITE}
          />
        )}
      >
        {data.map((item, index) => (
          <Panel key={index} header={item.title}>
            {item.children}
          </Panel>
        ))}
      </AntdCollapse>
    </div>
  );
};

export default Collapse;
