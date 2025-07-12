import React, { useState } from 'react';
import { surveySchema } from './SurveySchema';

type AnswerState = {
    [key: string]: string | string[];
};

const DynamicSurveyForm: React.FC = () => {
    const [answers, setAnswers] = useState<AnswerState>({});
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (id: string, value: string | string[], type: string) => {
        if (type === 'checkbox') {
            const current = (answers[id] as string[]) || [];
            const updated = current.includes(value as string)
                ? current.filter(v => v !== value)
                : [...current, value];
            setAnswers(prev => ({ ...prev, [id]: updated }));
        } else {
            setAnswers(prev => ({ ...prev, [id]: value }));
        }
    };

    const validate = () => {
        const errorList: string[] = [];
        for (let field of surveySchema) {
            if (field.required && !answers[field.id]?.length) {
                errorList.push(`Please answer: ${field.question}`);
            }
        }
        setErrors(errorList);
        return errorList.length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Submitted Answers:', answers);
            alert('Form submitted successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto'}}>
            <h2>Dynamic Survey</h2>
            {surveySchema.map(field => (
                <div key={field.id} style={{ marginBottom: '20px', alignItems: 'center' }}>
                    <label><strong>{field.question}</strong></label>
                    <div>
                        {field.type === 'text' && (
                            <input
                                type="text"
                                value={answers[field.id] as string || ''}
                                onChange={e => handleChange(field.id, e.target.value, 'text')}
                            />
                        )}

                        {field.type === 'radio' &&
                            field.options?.map(opt => (
                                <label key={opt} style={{ display: 'block' }}>
                                    <input
                                        type="radio"
                                        name={field.id}
                                        value={opt}
                                        checked={answers[field.id] === opt}
                                        onChange={() => handleChange(field.id, opt, 'radio')}
                                    />
                                    {opt}
                                </label>
                            ))}

                        {field.type === 'checkbox' &&
                            field.options?.map(opt => (
                                <label key={opt} style={{ display: 'block' }}>
                                    <input
                                        type="checkbox"
                                        value={opt}
                                        checked={(answers[field.id] as string[] | undefined)?.includes(opt) || false}
                                        onChange={() => handleChange(field.id, opt, 'checkbox')}
                                    />
                                    {opt}
                                </label>
                            ))}
                    </div>
                </div>
            ))}

            {errors.length > 0 && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    <ul>
                        {errors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}

            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicSurveyForm;
