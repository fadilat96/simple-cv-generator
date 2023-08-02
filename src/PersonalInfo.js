import React from 'react';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    return (
        <div className="personal-info">
            <h2>Personal Information</h2>
            <input
                type="text"
                name="name"
                value={personalInfo.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="tel"
                name="phone"
                value={personalInfo.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <input
                type="text"
                name="address"
                value={personalInfo.address}
                onChange={handleChange}
                placeholder="Address"
            />
        </div>
    );
};

export default PersonalInfo;
