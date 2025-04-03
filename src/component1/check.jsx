import React from 'react';
import { CheckCircle } from 'lucide-react'; // Importing a check icon

const features = [
    { text: '30 Min Procedure' },
    { text: 'Same Discharge' },
    { text: 'Free Pick Up & Drop' },
    { text: 'Complete Insurance Support' }
];

const Check = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center gap-6 p-4">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-blue-500 h-5 w-5" />
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                </div>
            ))}
        </div>
    );
};

export default Check;
