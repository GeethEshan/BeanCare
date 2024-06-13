import React from 'react';
import { Section, Title, Paragraph } from './styles/SectionStyles';
import { Grid, GridItem, DownloadLink } from './styles/DownloadStyles';

const Downloads = () => {
  return (
    <Section id="downloads">
      <Title>Documents</Title>
      <Grid>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Topic Assessment</Paragraph>
          <DownloadLink href="/documents/topic-assessment.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Project Charter</Paragraph>
          <DownloadLink href="/documents/project-charter.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Project Proposal</Paragraph>
          <DownloadLink href="/documents/project-proposal.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Status Document 1</Paragraph>
          <DownloadLink href="/documents/status-document-1.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Status Document 2</Paragraph>
          <DownloadLink href="/documents/status-document-2.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Research Paper</Paragraph>
          <DownloadLink href="/documents/research-paper.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Final Report</Paragraph>
          <DownloadLink href="/documents/final-report.pdf" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Poster</Paragraph>
          <DownloadLink href="/documents/poster.pdf" download>Download</DownloadLink>
        </GridItem>
      </Grid>

      <Title>Presentations</Title>
      <Grid>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Project Proposal</Paragraph>
          <DownloadLink href="/documents/project-proposal.pptx" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Progress Presentation 1</Paragraph>
          <DownloadLink href="/documents/progress-presentation-1.pptx" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Progress Presentation 2</Paragraph>
          <DownloadLink href="/documents/progress-presentation-2.pptx" download>Download</DownloadLink>
        </GridItem>
        <GridItem style={{ backgroundColor: '#E6F7E9' }}>
          <Paragraph>Final Presentation</Paragraph>
          <DownloadLink href="/documents/final-presentation.pptx" download>Download</DownloadLink>
        </GridItem>
      </Grid>
    </Section>
  );
};

export default Downloads;
