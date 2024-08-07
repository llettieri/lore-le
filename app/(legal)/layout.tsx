import { ReactNode } from 'react';

import styles from './legal.module.css';

interface LegalLayoutProps {
    children: ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps): ReactNode {
    return (
        <div className="flex flex-col items-center">
            <div className={styles.legal}>{children}</div>
        </div>
    );
}
