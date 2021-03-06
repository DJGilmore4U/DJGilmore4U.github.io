import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressiveImage from '../components/ProgressiveImage';
import ScrollToTop from '../utils/ScrollToTop';
import Footer from '../components/Footer';
import { ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectSectionText, ProjectBackground, ProjectHeader } from '../components/Project';
import { Media } from '../utils/StyleUtils';
import backgroundSpr from '../assets/spr-background.jpg';
import backgroundSprLarge from '../assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '../assets/spr-background-placeholder.jpg';
import imageSprBuilder from '../assets/spr-builder.png';
import imageSprBuilderLarge from '../assets/spr-builder-large.png';
import imageSprBuilderPlaceholder from '../assets/spr-builder-placeholder.png';

const prerender = window.location.port === '45678';

const title = 'Designing the future of education';
const description = 'With a team of UCSD cohorts, we created a childrens banking application which is parent managed with the hopes of helping to create a generation of enlarged savings accounts rather than enlarged debt.';
const roles = [
  'Database Design',
  'UX and UI Design',
  'OAuth',
];

const ProjectSPR = ({ status }) => (
  <React.Fragment>
    <ScrollToTop status={status} />
    <Helmet>
      <title>{`Projects | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
    <ProjectContainer>
      <ProjectBackground
        srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
        placeholder={backgroundSprPlaceholder}
        entered={!prerender}
      />
      <ProjectHeader
        title={title}
        description={description}
        url="https://www.smartsparrow.com"
        roles={roles}
      />
      <ProjectSection>
        <ProjectSectionContent>
          <ProjectImage entered={!prerender}>
            <ProgressiveImage
              srcSet={`${imageSprBuilder} 800w, ${imageSprBuilderLarge} 1440w`}
              placeholder={imageSprBuilderPlaceholder}
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
              width="1280px"
              height="800px"
            />
          </ProjectImage>
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection>
        <ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>
      </ProjectSection>
      {false &&
        <ProjectSection center>
          <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
          <ProjectSectionText>
            The goal of the new product design was to make creating online learning better for
            teams. As part of my role as lead product designer, I worked to create a consistent
            design system that allowed us to quickly design and build prototypes for user testing.
          </ProjectSectionText>
        </ProjectSection>
      }
    </ProjectContainer>
    {false && <Footer />}
  </React.Fragment>
);

export default ProjectSPR;
