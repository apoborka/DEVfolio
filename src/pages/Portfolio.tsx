import React, { useState } from 'react';
import Project from '../components/Project';
import { sortProjects } from '../components/ProjectSorting';
import osuSeal from '../assets/projectImages/osuSeal.png';

export const projects = [
  {
    title: 'E.M.S. Database',
    dateCompleted: 'Feb 3, 2025',
    imageUrl: 'assets/projectImages/emsViewAllRoles.jpg',
    deployedUrl: '',
    repoUrl: 'https://github.com/apoborka/Employee-Management-System',
    technologiesUsed: 'TypeScript, Node.js, Inquirer, postgresSQL, dotenv',
    projectDescription: 'A system to manage employee data and roles within a company.'
  },
  {
    title: 'Weather Dashboard',
    dateCompleted: 'Jan 27, 2025',
    imageUrl: 'assets/projectImages/wdMainPage.jpg',
    deployedUrl: 'https://weather-dashboard-fv9t.onrender.com',
    repoUrl: 'https://github.com/apoborka/Weather-Dashboard',
    technologiesUsed: 'TypeScript, HTML, CSS, OpenWeather API',
    projectDescription: 'A dashboard to display weather information for various cities.'
  },
  {
    title: 'Vehicle-Builder',
    dateCompleted: 'Jan 16, 2025',
    imageUrl: 'assets/projectImages/vbMain.jpg',
    deployedUrl: '',
    repoUrl: 'https://github.com/apoborka/Vehicle-Builder',
    technologiesUsed: 'TypeScript, Inquirer, Node.js',
    projectDescription: 'A tool to build and customize new and existing vehicles based on user input.'
  },
  {
    title: 'Workday Tasklist (Group)',
    dateCompleted: 'Dec 17, 2024',
    imageUrl: 'assets/projectImages/wdtModal.jpg',
    deployedUrl: 'https://codergeek081.github.io/Project-1/',
    repoUrl: 'https://github.com/apoborka/YourWorkdayTasklist',
    technologiesUsed: 'JavaScript, HTML, CSS, Bootstrap',
    projectDescription: 'A collaborative project to manage daily tasks and schedules.'
  },
  {
    title: 'Pro-README Generator',
    dateCompleted: 'Jan 9, 2025',
    imageUrl: 'assets/projectImages/Pro-README-Result.jpg',
    deployedUrl: '',
    repoUrl: 'https://github.com/apoborka/Pro-README',
    technologiesUsed: 'JavaScript, Node.js, Inquirer',
    projectDescription: 'A tool to generate professional README files with minimal effort.'
  },
  {
    title: 'DEVfolio',
    dateCompleted: 'Feb 19, 2025',
    imageUrl: 'assets/projectImages/dfPortfolio.jpg',
    deployedUrl: '',
    repoUrl: 'https://github.com/apoborka/DEVfolio',
    technologiesUsed: 'TypeScript, React, CSS, HTML',
    projectDescription: 'A single-page application containing a digital portfolio of my progress toward full-stack development.'
  },
];

const Portfolio: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  const sortedProjects = sortProjects(projects, sortOrder);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  };

  return (
    <section>
      <div className="portfolio-header">
        <img src={osuSeal} alt="OSU Seal" className="osu-seal" />
        <h2>The Ohio State University</h2>
        <h3>Full-Stack Bootcamp Projects</h3>
        <button onClick={toggleSortOrder}>
          Sort By Date Completed: {sortOrder === 'ASC' ? 'Least Recent' : 'Most Recent'}
        </button>
      </div>
      <div className="project-grid">
        {sortedProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;