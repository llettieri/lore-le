import { Metadata } from 'next';
import { ReactNode } from 'react';
import { ObfuscateSensibleText } from '@/components/obfuscate-sensible-text';

export const metadata: Metadata = {
    title: 'Privacy policy | Lorenzo Lettieri',
    description: 'Check my privacy policy and learn more about some principles',
    keywords: ['lore-le', 'privacy', 'policy', 'legal'],
};

export default function PrivacyPolicyPage(): ReactNode {
    return (
        <>
            <h1>Privacy</h1>
            <h2>1. Verantwortliche Stelle</h2>
            <p>
                Lorenzo Lettieri
                <br />
                Oberwolfhauserstrasse 2a
                <br />
                8633 Wolfhausen
                <br />
                Website: <a href="https://lore-le.ch">https://lore-le.ch</a>
                <br />
                E-Mail:{' '}
                <ObfuscateSensibleText content="me@lore-le.ch" type="email" />
            </p>
            <h2>2. Zweck dieser Datenschutzerklärung</h2>
            <p>
                Diese Datenschutzerklärung informiert darüber, welche
                Personendaten beim Besuch dieser Website bearbeitet werden, zu
                welchen Zwecken dies geschieht und welche Rechte betroffene
                Personen nach dem Schweizer Datenschutzgesetz (DSG) haben. Die
                Erklärung ist als Grundlage für eine Schweizer Website gedacht
                und sollte bei besonderen Bearbeitungen oder internationalen
                Angeboten geprüft und angepasst werden.
            </p>
            <h2>3. Bearbeitung beim Besuch der Website</h2>
            <p>
                Beim Aufruf der Website können technische Daten wie IP-Adresse,
                Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp,
                Betriebssystem und Referrer-URL verarbeitet werden. Diese Daten
                werden benötigt, um die Website sicher, stabil und korrekt
                auszuliefern.
            </p>
            <p>
                Die Website wird über Cloudflare betrieben. Der Hosting-Anbieter
                kann technische Zugriffsdaten in Server-Logfiles verarbeiten, um
                Betrieb, Sicherheit und Fehleranalyse zu gewährleisten.
            </p>

            <h2>6. Statistik und Reichweitenmessung</h2>
            <p>
                Diese Website kann Analyse-Tools verwenden, um zu verstehen,
                welche Inhalte genutzt werden und wie die Website verbessert
                werden kann. Dabei können technische Informationen wie
                Seitenaufrufe, Gerätetyp, Browser, ungefährer Standort oder
                Nutzungszeitpunkt verarbeitet werden. Soweit möglich werden
                solche Auswertungen datensparsam, gekürzt oder anonymisiert
                eingesetzt.
            </p>

            <h2>11. Social Media</h2>
            <p>
                Unsere Website kann auf Profile in sozialen Netzwerken
                verlinken. Wenn Sie einem solchen Link folgen, verlassen Sie
                unsere Website. Für die Bearbeitung von Personendaten auf den
                jeweiligen Plattformen gelten die Datenschutzbestimmungen der
                betreffenden Anbieter.
            </p>

            <h2>12. Cookies und ähnliche Technologien</h2>
            <p>
                Die Website kann Cookies oder ähnliche Technologien einsetzen,
                um grundlegende Funktionen bereitzustellen, Einstellungen zu
                speichern, Sicherheit zu gewährleisten oder die Nutzung zu
                messen. Nicht notwendige Cookies und Tracking-Dienste sollten
                transparent erklärt und, soweit erforderlich, nur mit Zustimmung
                eingesetzt werden.
            </p>

            <h2>13. Bekanntgabe von Personendaten an Dritte</h2>
            <p>
                Personendaten können an Dienstleister weitergegeben werden, wenn
                dies für Betrieb, Kommunikation, Analyse, Zahlung, Terminbuchung
                oder die Erfüllung gesetzlicher Pflichten erforderlich ist.
                Dienstleister bearbeiten Personendaten grundsätzlich nur im
                Umfang, der für die jeweilige Leistung notwendig ist.
            </p>

            <h2>14. Bearbeitung im Ausland</h2>
            <p>
                Einzelne Dienstleister können Personendaten auch ausserhalb der
                Schweiz bearbeiten. In solchen Fällen achten wir darauf, dass
                ein angemessener Datenschutz gewährleistet ist, zum Beispiel
                durch anerkannte Garantien, vertragliche Schutzmassnahmen oder
                gesetzliche Ausnahmen.
            </p>

            <h2>16. Rechte betroffener Personen</h2>
            <p>
                Betroffene Personen können im Rahmen des anwendbaren
                Datenschutzrechts Auskunft über ihre Personendaten verlangen,
                unrichtige Daten berichtigen lassen, die Löschung oder
                Einschränkung der Bearbeitung verlangen, der Bearbeitung
                widersprechen oder die Herausgabe bestimmter Daten verlangen.
                Für entsprechende Anfragen verwenden Sie bitte die oben genannte
                Kontaktadresse.
            </p>

            <h2>17. Datensicherheit und Aufbewahrung</h2>
            <p>
                Wir treffen angemessene technische und organisatorische
                Massnahmen, um Personendaten vor unberechtigtem Zugriff,
                Verlust, Missbrauch oder Veränderung zu schützen. Personendaten
                werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck
                erforderlich ist oder gesetzliche Pflichten dies verlangen.
            </p>

            <h2>18. Änderungen dieser Datenschutzerklärung</h2>
            <p>
                Diese Datenschutzerklärung kann angepasst werden, wenn sich die
                Website, die verwendeten Dienste oder die rechtlichen
                Anforderungen ändern. Es gilt die jeweils auf der Website
                veröffentlichte Fassung.
            </p>

            <p>
                Erstellt mit dem{' '}
                <a href="https://garcon-studios.ch/labs/tools/datenschutz-generator/">
                    Datenschutz Generator Schweiz
                </a>{' '}
                von <a href="https://garcon-studios.ch/">Garçon Studios</a>.
            </p>
        </>
    );
}
