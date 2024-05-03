'use client';
import React, { useState } from 'react';
import { serialize } from 'v8';

function Section({ children }: { children: React.ReactNode }) {
    return (
        <div className='border border border-blue-600 m-1 h-64 flex justify-center'>
            <div className="flex flex-col justify-end">
                {children}
            </div>
        </div>
    )
}

// Section to add name, email, and phone number
export function GeneralSection() {

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('None');
    const [email, setEmail] = useState('None');
    const [phone, setPhone] = useState('None');

    const [inputValues, setInputValues] = useState(['', '', '']);

    const editToggle = () => {
        setEditMode(!editMode);
    }

    const handleInputChange = (e, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValues[0]);
        setEmail(inputValues[1]);
        setPhone(inputValues[2]);
        editToggle();
    }

    return (
        <Section>

            {/* Text or text edit is displayed based on edit mode */}
            {!editMode && 
                <div className='flex flex-col justify-center'>
                    <p className='text-center m-4'><strong>Name: </strong>{name}</p>
                    <p className='text-center m-4'><strong>Email: </strong>{email}</p>
                    <p className='text-center m-4'><strong>Phone: </strong>{phone}</p>
                    <button className='mx-auto mb-5 border-2 border-solid border-blue-500 h-10 w-56 rounded-md font-bold bg-blue-600' onClick={editToggle}>Edit General</button>
                </div>
            }
            {editMode && <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center'>
                                < input
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Name' 
                                    value={inputValues[0]} 
                                    onChange={(e) => handleInputChange(e, 0)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Email' 
                                    value={inputValues[1]} 
                                    onChange={(e) => handleInputChange(e, 1)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Phone' 
                                    value={inputValues[2]} 
                                    onChange={(e) => handleInputChange(e, 2)} 
                                />

                                {/* Edit submit button */}
                                <button className=' mb-5 border-2 border-solid border-blue-500 m-1 h-10 w-56 rounded-md font-bold bg-blue-600' type='submit'>Submit</button>
                            </div>
                        </form>
            }
            
        </Section>
    )
}

export function EducationSection() {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('None');
    const [email, setEmail] = useState('None');
    const [phone, setPhone] = useState('None');

    const [inputValues, setInputValues] = useState(['', '', '']);

    const editToggle = () => {
        setEditMode(!editMode);
    }

    const handleInputChange = (e, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValues[0]);
        setEmail(inputValues[1]);
        setPhone(inputValues[2]);
        editToggle();
    }

    return (
        <Section>

            {/* Text or text edit is displayed based on edit mode */}
            {!editMode && 
                <div className='flex flex-col justify-center'>
                    <p className='text-center m-4'><strong>School: </strong>{name}</p>
                    <p className='text-center m-4'><strong>Major: </strong>{email}</p>
                    <p className='text-center m-4'><strong>Graduation Date: </strong>{phone}</p>
                    <button className='mx-auto mb-5 border-2 border-solid border-blue-500 h-10 w-56 rounded-md font-bold bg-blue-600' onClick={editToggle}>Edit Education</button>
                </div>
            }
            {editMode && <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center'>
                                < input
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='School' 
                                    value={inputValues[0]} 
                                    onChange={(e) => handleInputChange(e, 0)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Major' 
                                    value={inputValues[1]} 
                                    onChange={(e) => handleInputChange(e, 1)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Graduation Date' 
                                    value={inputValues[2]} 
                                    onChange={(e) => handleInputChange(e, 2)} 
                                />

                                {/* Edit submit button */}
                                <button className=' mb-5 border-2 border-solid border-blue-500 m-1 h-10 w-56 rounded-md font-bold bg-blue-600' type='submit'>Submit</button>
                            </div>
                        </form>
            }
            
        </Section>
    ) 
}

export function ExperienceSection() {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('None');
    const [email, setEmail] = useState('None');
    const [phone, setPhone] = useState('None');

    const [inputValues, setInputValues] = useState(['', '', '']);

    const editToggle = () => {
        setEditMode(!editMode);
    }

    const handleInputChange = (e, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValues[0]);
        setEmail(inputValues[1]);
        setPhone(inputValues[2]);
        editToggle();
    }

    return (
        <Section>

            {/* Text or text edit is displayed based on edit mode */}
            {!editMode && 
                <div className='flex flex-col justify-center'>
                    <p className='text-center m-4'><strong>Company Name: </strong>{name}</p>
                    <p className='text-center m-4'><strong>Position: </strong>{email}</p>
                    <p className='text-center m-4'><strong>Date Hired: </strong>{phone}</p>
                    <button className='mx-auto mb-5 border-2 border-solid border-blue-500 h-10 w-56 rounded-md font-bold bg-blue-600' onClick={editToggle}>Edit Experience</button>
                </div>
            }
            {editMode && <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-center'>
                                < input
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Company Name' 
                                    value={inputValues[0]} 
                                    onChange={(e) => handleInputChange(e, 0)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Position' 
                                    value={inputValues[1]} 
                                    onChange={(e) => handleInputChange(e, 1)} 
                                />
                                <input 
                                    className='text-black m-4' 
                                    type='text' 
                                    placeholder='Date Hired' 
                                    value={inputValues[2]} 
                                    onChange={(e) => handleInputChange(e, 2)} 
                                />

                                {/* Edit submit button */}
                                <button className=' mb-5 border-2 border-solid border-blue-500 m-1 h-10 w-56 rounded-md font-bold bg-blue-600' type='submit'>Submit</button>
                            </div>
                        </form>
            }
            
        </Section>
    )
}