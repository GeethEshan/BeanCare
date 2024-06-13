import React from 'react';
import { Section, MainTitle, Title, Paragraph } from './styles/SectionStyles';
import styled from 'styled-components';

const MilestoneTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  transition: color 0.3s ease-in-out; /* Added transition for color change */
`;

const DateLabel = styled.div`
  background: black;
  color: white;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: bold;
  display: inline-block;
`;

const ProgressBar = styled.div`
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5rem 0;
  width: 50%; /* Reduced width of progress bar */
  margin-left: auto; /* Center progress bar */
  margin-right: auto; /* Center progress bar */
`;

const ProgressBarFill = styled.div`
  height: 20px;
  width: ${({ filledWidth }) => filledWidth || '0%'};
  text-align: center;
  color: white;
  font-weight: bold;
  transition: background 0.3s ease-in-out; /* Added transition for background color change */
  background: linear-gradient(to right, green ${({ filledWidth }) => filledWidth || '0%'}, blue ${({ totalWidth }) => totalWidth || '0%'});
`;

const OuterRectangle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid blue;
  left: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
`;

const InnerRectangle = styled.div`
  width: 10px;
  height: 10px;
  background: blue;
  transition: transform 0.3s, background-color 0.3s;
`;

const MilestoneContainer = styled.div`
  position: relative;
  margin-left: 40px; /* Adjusted margin */
  margin-bottom: 20px; /* Added margin bottom for spacing between milestones */
  transition: background-color 0.3s ease-in-out; /* Added transition for background color change */
  &:hover {
    cursor: pointer; /* Change cursor on hover */
    background-color: #f0f0f0; /* Light background color on hover */
  }
  &:hover ${MilestoneTitle} {
    color: blue; /* Change title color on hover */
  }
  &:hover ${OuterRectangle}, &:hover ${InnerRectangle} {
    transform: rotate(45deg); /* Rotate rectangles on hover */
    background: blue; /* Change background color of rectangles on hover */
  }
  &:hover ${ProgressBarFill} {
    background: linear-gradient(to right, orange ${({ filledWidth }) => filledWidth || '0%'}, blue ${({ totalWidth }) => totalWidth || '0%'});
    /* Change gradient color of progress bar on hover */
  }
`;

const milestonesData = [
  { date: 'July', title: 'Proposal presentation', description: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.', marks: 6, progress: 6 },
  { date: 'Aug 25', title: 'Proposal report', description: 'Short description...', marks: 6, progress: 6 },
  { date: 'Sep', title: 'Progress presentation 1', description: 'Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.', marks: 15, progress: 15 },
  { date: 'Feb', title: 'Progress presentation 2', description: 'Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.', marks: 18, progress: 18 },
  { date: 'March 4', title: 'Research paper', description: 'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge', marks: 10, progress: 10 },
  { date: 'April 5', title: 'Final report', description: 'Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.', marks: 15, progress: 15 },
  { date: 'April 5', title: 'Final report group', description: 'Short description...', marks: 4, progress: 4 },
  { date: 'May 20', title: 'Final presentation', description: 'Viva is held individually to assess each members contribution to the project.', marks: 10, progress: 10 },
  { date: 'May 20', title: 'Final viva', description: 'Viva is held individually to assess each members contribution to the project.', marks: 10, progress: 10 },
  { date: 'June 17', title: 'Website', description: 'The Website helps to promote our research project and reveals all details related to the project.', marks: 2, progress: 2 },
  { date: 'July ', title: 'Final reports', description: 'Short description...', marks: 2, progress: 2 },
  { date: 'July', title: 'Log book', description: 'Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.', marks: 2, progress: 2 },
];

const Milestones = () => {
  let totalProgress = 0; // Initialize total progress
  return (
    <Section id="milestones">
      <MainTitle style={{ color: 'blue', fontSize: '2.5rem', marginLeft: '40px' }}>Milestones</MainTitle>
      <Title style={{ fontSize: '2rem', marginLeft: '40px' }}>Timeline in Brief</Title>
      {milestonesData.map((milestone, index) => {
        totalProgress += milestone.progress; // Update total progress with each milestone
        const filledWidth = `${totalProgress}%`; // Calculate filled width for progress bar
        const totalWidth = '100%'; // Total width is 100%
        return (
          <MilestoneContainer key={index}>
            <DateLabel>{milestone.date}</DateLabel>
            <MilestoneTitle>
              <OuterRectangle>
                <InnerRectangle />
              </OuterRectangle>
              {milestone.title}
            </MilestoneTitle>
            <Paragraph>{milestone.description}</Paragraph>
            <Paragraph>{milestone.marks} Marks Allocated</Paragraph>
            <ProgressBar>
              <ProgressBarFill filledWidth={filledWidth} totalWidth={totalWidth}>
                {filledWidth}
              </ProgressBarFill>
            </ProgressBar>
          </MilestoneContainer>
        );
      })}
    </Section>
  );
};

export default Milestones;
