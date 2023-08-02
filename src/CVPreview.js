import React from 'react';

const CVPreview = ({ personalInfo, education, workExperience, skills }) => {
    return (
        <div className="cv-preview">
            <h2>CV Preview</h2>
            <div>
                <h3>Personal Information</h3>
                <p>Name: {personalInfo.name}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
                <p>Address: {personalInfo.address}</p>
            </div>
            <div>
                <h3>Education</h3>
                <ul>
                    {education.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu.school}</strong> - {edu.degree} ({edu.date})
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Work Experience</h3>
                <ul>
                    {workExperience.map((exp, index) => (
                        <li key={index}>
                            <strong>{exp.company}</strong> - {exp.jobTitle} ({exp.date})
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Skills</h3>
                <p>{skills}</p>
            </div>
        </div>
    );
};

export default CVPreview;
