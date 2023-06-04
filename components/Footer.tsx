import React from 'react';

export function Footer(): React.ReactElement {
    return (
        <div className="bg-gray-600 flex justify-center text-white p-2">
            <p>
                © Copyright 2023{' '}
                <span className="font-bold">Lettieri Lorenzo</span>
            </p>
        </div>
    );
}
