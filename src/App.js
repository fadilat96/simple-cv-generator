import React, { useState } from 'react';
import './styles.css'; // Import the custom CSS file
import PersonalInfo from './PersonalInfo';
/**
 * 
 * Similarly, you can create separate files for Education.js, 
 * WorkExperience.js, Skills.js, and CVPreview.js components, 
 * and customize their functionalities to collect user input and display the CV preview.
 */
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import CVPreview from './CVPreview';


const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState('');

  return (
    <div className="cv-generator">
      <h1>CV Generator</h1>
      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Education education={education} setEducation={setEducation} />
      <WorkExperience
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
      <Skills skills={skills} setSkills={setSkills} />
      <CVPreview
        personalInfo={personalInfo}
        education={education}
        workExperience={workExperience}
        skills={skills}
      />
    </div>
  );
};

export default App;
