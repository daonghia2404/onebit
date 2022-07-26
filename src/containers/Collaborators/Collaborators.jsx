import React from 'react';

import ImageCollaborator1 from '@/assets/images/image-collaborator-1.png';
import ImageCollaborator2 from '@/assets/images/image-collaborator-2.png';
import Carousels from '@/components/Carousels';

import './Collaborators.scss';

const Collaborators = () => {
  const dataCollaborators = [ImageCollaborator1, ImageCollaborator2, ImageCollaborator1, ImageCollaborator2];

  return (
    <div className="Collaborators">
      <div className="container">
        <div className="Collaborators-wrapper">
          <Carousels className="Collaborators-list" infinite slidesToShow={2} autoplay dots={false} arrows={false}>
            {dataCollaborators.map((item, index) => (
              <div key={index} className="Collaborators-list-item">
                <img src={item} alt="" />
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
