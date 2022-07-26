import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import './ProjectCard.scss';

const ProjectCard = ({ className, title, tags = [], description, total, soldOut }) => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const projectListRender = () => {
    return (
      <div className="ProjectCard-info-list flex flex-wrap">
        {total && (
          <div className="ProjectCard-info-list-item">
            <span className="heading-03">Total Raise</span>
            <span className="heading-01">{total}</span>
          </div>
        )}

        {soldOut && (
          <div className="ProjectCard-info-list-item">
            <span className="heading-03">Sold Out</span>
            <span className="heading-01">{soldOut}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={classNames('ProjectCard', className)}>
      <div className="ProjectCard-wrapper flex">
        <div className="ProjectCard-image"></div>
        <div className="ProjectCard-info">
          <div className="ProjectCard-info-title heading-03">{title}</div>
          {isMobile && <div className="ProjectCard-info-description headline">{description}</div>}
          <div className="ProjectCard-info-tags flex flex-wrap">
            {tags?.map((tag, tagInx) => (
              <div key={tagInx} className="ProjectCard-info-tags-item">
                {tag}
              </div>
            ))}
          </div>
          {!isMobile && projectListRender()}
        </div>
        {isMobile && projectListRender()}
      </div>
    </div>
  );
};

export default ProjectCard;
