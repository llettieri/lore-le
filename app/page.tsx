import Image from 'next/image';
import React, { ReactNode } from 'react';

export default function Home(): ReactNode {
    const gifUrl =
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWMxMTk1MjlkMjY1ZTY3NzM0MmE4NjU5N2Q4N2M1NzgxOTQwNGJhYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/QBd2kLB5qDmysEXre9/giphy.gif';

    return (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-white">
            <h1>
                Hello, this site is under construction. Please be patient ...
                (maybe a few years).
            </h1>
            <Image
                className="h-auto rounded-xl"
                src={gifUrl}
                width={800}
                height={500}
                alt="Waiting..."
                unoptimized
            />
        </div>
    );
}
