import React from 'react';
import { projects } from './Portfolio';

const Resume: React.FC = () => {
  const webProficiencies = Array.from(new Set(projects.flatMap(project => project.technologiesUsed.split(', ')))).sort();

  const professionalProficiencies = [
    'Postman',
    'Insomnia',
    'Selenium IDE',
    'JIRA',
    'Confluence',
    'Microsoft Office',
    'Pro Tools',
    'Ableton Live',
    'Logic',
    'Dale Carnegie Professional Development Certification',
    'Google Ads Creative Certification',
    'Google Ads Display Certification',
    'Google Ads Search Certification',
    'The Ohio State University Full-Stack Development Bootcamp Certification (In progress until May 2025)'
  ].sort();

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/src/assets/resumePdf/Resume-Alexander-Poborka.pdf" download className="download-link">Download Resume</a>
      <h3>Web Development Proficiencies</h3>
      <ul className="proficiencies-list">
        {webProficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
      <h3>Professional Proficiencies</h3>
      <ul className="proficiencies-list">
        {professionalProficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;