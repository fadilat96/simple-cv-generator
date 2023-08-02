import React, { useState } from 'react';

const WorkExperience = ({ workExperience, setWorkExperience }) => {
    const [company, setCompany] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [date, setDate] = useState('');

    const handleAddExperience = () => {
        if (company && jobTitle && date) {
            setWorkExperience((prevExperience) => [
                ...prevExperience,
                { company, jobTitle, date },
            ]);
            setCompany('');
            setJobTitle('');
            setDate('');
        }
    };

    return (
        <div className="work-experience">
            <h2>Work Experience</h2>
            <div className="experience-form">
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company"
                />
                <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Job Title"
                />
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date (e.g., 2014 - 2018)"
                />
                <button onClick={handleAddExperience}>Add</button>
            </div>
            <ul>
                {workExperience.map((exp, index) => (
                    <li key={index}>
                        <strong>{exp.company}</strong> - {exp.jobTitle} ({exp.date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;
