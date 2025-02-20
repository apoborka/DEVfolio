import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <img src="/assets/projectImages/devImg.jpg" alt="Developer photo" className="dev-img" />
      <p className="about-me-text">
        Hello, and welcome! My name is Alexander ("Alex") Poborka, and I am currently a QA Lead on the road to becoming a full-stack developer. I have over 15 years of experience across various diverse industries such as entertainment, service, automotive manufacturing, and technology. I thrive in fast-paced environments and love tackling complex challenges by finding creative solutions. I hold a Bachelor's degree in Business Administration from Middle Tennessee State University and am currently enrolled in The Ohio State University's Full-Stack Bootcamp.
        <br>
        </br>
        <br>
        </br>
        I have an unbreakable habit of throwing myself head-long into my work, a passion for continuously improving myself and my processes, and a knack for effective communication. When I'm not coding or leading QA, you can find me writing and recording various styles of music, stuffing my face with sushi, or finding ways to learn something new! Let's connect and create something great!
        </p>
    </section>
  );
};

export default AboutMe;