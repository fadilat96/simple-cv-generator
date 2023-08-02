import React from 'react';

const Skills = ({ skills, setSkills }) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Enter your skills here..."
      />
    </div>
  );
};

export default Skills;
