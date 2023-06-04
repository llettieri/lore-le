import Image from 'next/image';
import React from 'react';

export default function LoadingPage(): React.ReactElement {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <h1>Loading page...</h1>
            <Image
                src="https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif"
                alt="loading"
                width={500}
                height={200}
            />
        </div>
    );
}
