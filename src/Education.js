import React, { useState } from 'react';

const Education = ({ education, setEducation }) => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [date, setDate] = useState('');

    const handleAddEducation = () => {
        if (school && degree && date) {
            setEducation((prevEducation) => [
                ...prevEducation,
                { school, degree, date },
            ]);
            setSchool('');
            setDegree('');
            setDate('');
        }
    };

    return (
        <div className="education">
            <h2>Education</h2>
            <div className="education-form">
                <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="School/University"
                />
                <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="Degree"
                />
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date (e.g., 2010 - 2014)"
                />
                <button onClick={handleAddEducation}>Add</button>
            </div>
            <ul>
                {education.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.school}</strong> - {edu.degree} ({edu.date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
