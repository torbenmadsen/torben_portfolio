import React from 'react';

function Skills() {
  const skills = [
    'Generative AI',
    'Lean Management',
    'Agile Methodologies',
    'Digital Transformation',
    'Process Optimization',
    'Team Leadership',
    'Training & Mentoring',
    'Strategic Consulting',
    'Innovation Management',
    'Change Management'
  ];

  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
