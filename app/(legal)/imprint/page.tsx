import { Metadata } from 'next';
import { ReactNode } from 'react';
import { ObfuscateSensibleText } from '@/components/obfuscate-sensible-text';

export const metadata: Metadata = {
    title: 'Imprint | Lorenzo Lettieri',
    description: 'Check my legal declaration and information',
    keywords: ['lore-le', 'imprint', 'legal'],
};

export default function ImprintPage(): ReactNode {
    return (
        <>
            <h1>Impressum</h1>
            <address>
                Lorenzo Lettieri
                <br />
                Oberwolfhauserstrasse 2a
                <br />
                8633 Wolfhausen
                <br />
                Schweiz
            </address>

            <h2>Kontakt</h2>
            <p>
                E-Mail:{' '}
                <ObfuscateSensibleText content="me@lore-le.ch" type="email" />
                <br />
                Web: <a href="https://lore-le.ch">https://lore-le.ch</a>
            </p>

            <h2>Haftungsausschluss</h2>
            <ol>
                <li>
                    <h3>Inhalte</h3>
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
                    keine Gewähr für die Aktualität, Vollständigkeit und
                    Richtigkeit der bereitgestellten Informationen. Jegliche
                    Haftungsansprüche gegen uns, die sich auf Schäden
                    materieller oder ideeller Art beziehen – verursacht durch
                    die Nutzung oder Nichtnutzung der dargebotenen Inhalte bzw.
                    durch Nutzung fehlerhafter und unvollständiger Informationen
                    – sind grundsätzlich ausgeschlossen.
                </li>
                <li>
                    <h3>Externe Links</h3>
                    Unsere Webseite enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb
                    übernehmen wir für diese fremden Inhalte auch keine Gewähr.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </li>
                <li>
                    <h3>Urheberrecht</h3>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf dieser Website unterliegen dem schweizerischen
                    Urheberrecht. Beiträge Dritter sind als solche
                    gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechts bedürfen unserer schriftlichen
                    Zustimmung.
                </li>
                <li>
                    <h3>Änderungen und Irrtümer</h3>
                    Wir behalten uns ausdrücklich vor, Teile der Seiten oder das
                    gesamte Angebot jederzeit zu ändern, zu ergänzen, zu löschen
                    oder die Veröffentlichung zeitweise oder endgültig
                    einzustellen. Sollten einzelne Formulierungen oder
                    Darstellungen dieses Haftungsausschlusses unwirksam sein,
                    bleiben die übrigen Bestimmungen davon unberührt.
                </li>
            </ol>

            <br />
            <p>
                <strong>Impressum erstellt durch:</strong>{' '}
                <a href="https://rechtpilot.ch/de">Rechtpilot</a>
            </p>
        </>
    );
}
