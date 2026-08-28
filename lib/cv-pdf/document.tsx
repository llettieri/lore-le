import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import type { ReactElement } from 'react';
import { styles } from './styles';
import type { CvPdfProps } from './types';

function SidebarHeader({
    name,
    role,
    portraitUrl,
    contactRows,
}: Pick<
    CvPdfProps,
    'name' | 'role' | 'portraitUrl' | 'contactRows'
>): ReactElement {
    return (
        <>
            {portraitUrl ? (
                // eslint-disable-next-line jsx-a11y/alt-text -- react-pdf's Image is not an HTML <img>; it has no alt prop.
                <Image src={portraitUrl} style={styles.portrait} />
            ) : null}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <View style={styles.sidebarBlock}>
                <Text style={styles.sectionLabel}>Personal Details</Text>
                {contactRows.map((row) => (
                    <View key={row.label} style={styles.contactRow}>
                        <Text style={styles.contactLabel}>{row.label}</Text>
                        <Text style={styles.contactValue}>{row.value}</Text>
                    </View>
                ))}
            </View>
        </>
    );
}

export function CvDocument(props: CvPdfProps): ReactElement {
    return (
        <Document title={`${props.name} — CV`} author={props.name}>
            <Page size="A4" style={styles.page}>
                <View style={styles.sidebar}>
                    <SidebarHeader
                        name={props.name}
                        role={props.role}
                        portraitUrl={props.portraitUrl}
                        contactRows={props.contactRows}
                    />
                    <View style={styles.sidebarBlock}>
                        <Text style={styles.sectionLabel}>Education</Text>
                        {props.education.map((entry) => (
                            <View key={entry.id} style={styles.eduCard}>
                                <Text style={styles.eduTitle}>
                                    {entry.issuer}
                                </Text>
                                <Text style={styles.eduSub}>{entry.title}</Text>
                                <Text style={styles.eduDate}>{entry.date}</Text>
                                {entry.grade ? (
                                    <Text style={styles.grade}>
                                        Grade: {entry.grade}
                                    </Text>
                                ) : null}
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={[styles.mainBlock, { marginTop: 0 }]}>
                        <Text style={styles.sectionLabelMain}>Profile</Text>
                        <Text style={styles.introCard}>
                            {props.profileSummary}
                        </Text>
                    </View>

                    <View style={styles.mainBlock}>
                        <Text style={styles.sectionLabelMain}>Experience</Text>
                        {props.jobs.map((job) => (
                            <View key={job.id} style={styles.job}>
                                <Text style={styles.jobTitle}>{job.title}</Text>
                                <Text style={styles.jobMeta}>
                                    {job.org} · {job.period}
                                </Text>
                                {job.highlights.map((highlight) => (
                                    <Text
                                        key={highlight}
                                        style={styles.jobHighlight}
                                    >
                                        • {highlight}
                                    </Text>
                                ))}
                                {job.phases.map((phase) => (
                                    <View
                                        key={phase.title}
                                        style={styles.subRotation}
                                    >
                                        <Text style={styles.subRotationTitle}>
                                            {phase.title}
                                        </Text>
                                        <Text style={styles.subRotationSummary}>
                                            {phase.summaryShort}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </Page>

            <Page size="A4" style={styles.page}>
                <View style={styles.sidebar}>
                    <SidebarHeader
                        name={props.name}
                        role={props.role}
                        portraitUrl={props.portraitUrl}
                        contactRows={props.contactRows}
                    />
                    <View style={styles.sidebarBlock}>
                        <Text style={styles.sectionLabel}>Skills</Text>
                        <View style={styles.chips}>
                            {props.skills.map((skill) => (
                                <Text key={skill} style={styles.chip}>
                                    {skill}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={[styles.mainBlock, { marginTop: 0 }]}>
                        <Text style={styles.sectionLabelMain}>
                            Certifications
                        </Text>
                        <View style={styles.certGrid}>
                            {props.certifications.map((cert) => (
                                <View key={cert.id} style={styles.certBox}>
                                    <Text style={styles.certName}>
                                        {cert.title}
                                    </Text>
                                    <Text style={styles.certIssuer}>
                                        {cert.issuer} · {cert.date}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.mainBlock}>
                        <Text style={styles.sectionLabelMain}>
                            Additional Recognition
                        </Text>
                        <View style={styles.certGrid}>
                            {props.awards.map((award) => (
                                <View key={award.id} style={styles.certBox}>
                                    <Text style={styles.certName}>
                                        {award.title}
                                    </Text>
                                    <Text style={styles.certIssuer}>
                                        {award.issuer}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
