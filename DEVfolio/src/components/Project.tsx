import React from 'react';

interface ProjectProps {
  title: string;
  imageUrl: string;
  deployedUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <a href={deployedUrl}>Deployed Application</a>
      <a href={repoUrl}>GitHub Repository</a>
    </div>
  );
};

export default Project;