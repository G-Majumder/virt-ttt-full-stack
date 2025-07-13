import React from "react";
import './Registration.css'
import { useState } from "react";

//registration form with an Functional Component
const RegistrationForm: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [submittedData, setSubmittedData] = useState<{ name: string; email: string; password: string ; fileName : string} | null>(null);

    //handle for file change
    const hanldeFileChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };
    // A form handler on submit button
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData({ name, email, password, fileName : file ? file.name : 'No file Selected'});

        //data will be clear after 2 secs.
        setTimeout(() => {
            setName('');
            setEmail('');
            setPassword('');
            setFile(null);
        }, 2000); // resets after 2 seconds
    }

    return (
        <div className="page-center">
            <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <h3>Registration Form</h3>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>:</td>
                            <td>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Upload File</td>
                            <td>:</td>
                            <td>
                                <input type="file" onChange={hanldeFileChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center', paddingTop: '10px' }}>
                                <button type="submit">Register</button>
                            </td>
                        </tr>

                    </table>
                </div>
            </form>
            {
                submittedData && (
                    <div className="output-box">
                        <h4>Submitted Details:</h4>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Password:</strong> {submittedData.password}</p>
                        <p><strong>File Name : {submittedData.fileName}</strong></p>
                    </div>
                )
            }
        </div>
    );
}

export default RegistrationForm;