import React from 'react';
import { Tooltip as AntdTooltip } from 'antd';
import classNames from 'classnames';

import './Tooltip.scss';

const Tooltip = ({ title, placement, className, overlayClassName, children }) => {
  return (
    <AntdTooltip
      className={classNames('Tooltip', className)}
      title={title}
      placement={placement}
      getPopupContainer={(trigger) => trigger}
      overlayClassName={classNames('Tooltip-overlay', overlayClassName)}
    >
      <div className="Tooltip-wrapper">{children}</div>
    </AntdTooltip>
  );
};

export default Tooltip;
