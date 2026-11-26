import { ReactNode } from 'react';

import styles from './legal.module.css';

interface LegalLayoutProps {
    children: ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps): ReactNode {
    return (
        <div className="flex flex-col items-center">
            <section className={`${styles.legal} prose-cv`}>{children}</section>
        </div>
    );
}
