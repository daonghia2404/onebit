import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor } from '@/components/Icon';
import Select from '@/components/Select';

import { dataProjects, dataProjectsFilter } from './Projects.data';
import './Projects.scss';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <div className="Projects-wrapper">
          <div className="Projects-header">
            <div className="Projects-subtitle subheading">Projects</div>
            <div className="Projects-title big-title-02">
              All past IDOs/SHO offerings that were hosted on launchpad.
            </div>
          </div>

          <div className="Projects-filters flex items-center">
            <div className="Projects-filters-line"></div>
            <div className="Projects-filters-control">
              <Select
                borderless
                placement="bottomRight"
                defaultValue={dataProjectsFilter[0]}
                options={dataProjectsFilter}
              />
            </div>
          </div>

          <div className="Projects-body">
            {dataProjects.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>

          <div className="Projects-load-more flex justify-center">
            <Button title="Load More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
