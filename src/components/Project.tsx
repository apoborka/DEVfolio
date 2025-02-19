import React from 'react';

export interface ProjectProps {
  title: string;
  dateCompleted: string;
  imageUrl: string;
  deployedUrl: string;
  repoUrl: string;
  technologiesUsed: string;
  projectDescription: string;
}

const Project: React.FC<ProjectProps> = ({ title, dateCompleted, imageUrl, deployedUrl, repoUrl, technologiesUsed, projectDescription }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p className="date-completed">{dateCompleted}</p>
      <hr className="divider" />
      <h4>Project Description:</h4>
      <p>{projectDescription}</p>
      <h4>Technologies Used:</h4>
      <p>{technologiesUsed}</p>
      <hr className="divider" />
      <div className="links">
        {deployedUrl && (
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a>
        )}
        {deployedUrl && repoUrl && <span className="separator"></span>}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;