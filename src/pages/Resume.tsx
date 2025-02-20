import React from 'react';
import { projects } from './Portfolio';
import { formatProficiency } from '../components/FormatProficiencyList';

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
      <div className="resume-header-container">
        <h2>Interested in working together?</h2>
        <a href="/src/assets/resumePdf/Resume-Alexander-Poborka.pdf" download className="download-link">Download My Resume</a>
      </div>
      <div className="proficiencies-container">
        <div className="proficiencies-list-container">
          <h3 className="split-header">
            <span>Web Development</span>
            <span>Bootcamp</span>
            <span>Proficiencies</span>
          </h3>
          <ul className="proficiencies-list">
            {webProficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
        <div className="proficiencies-list-container">
          <h3 className="split-header">
            <span>Other Professional</span>
            <span>Proficiencies</span>
          </h3>
          <ul className="proficiencies-list">
            {professionalProficiencies.map((proficiency, index) => (
              <li key={index}>{formatProficiency(proficiency)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;