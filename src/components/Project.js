import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Media, AnimFade, ColorTint } from '../utils/StyleUtils';
import ProgressiveImage from '../components/ProgressiveImage';
import { LinkButton } from '../components/Button';

const initDelay = 300;
const prerender = window.location.port === '45678';

export const ProjectHeader = ({ title, description, url, roles }) => (
  <ProjectHeaderContainer>
    <ProjectHeaderInner>
      <ProjectDetails entered={!prerender}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <LinkButton
          secondary
          style={{paddingLeft: '3px'}}
          icon="chevronRight"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit website
        </LinkButton>
      </ProjectDetails>
      <ProjectMeta entered={!prerender}>
        {roles && roles.map((role, index) => (
          <ProjectMetaItem key={`role_${index}`}>{role}</ProjectMetaItem>
        ))}
      </ProjectMeta>
    </ProjectHeaderInner>
  </ProjectHeaderContainer>
);

export const ProjectContainer = styled.article`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ProjectSection = styled.section`
  position: relative;
  width: 100vw;
  padding-top: 100px;
  padding-right: 120px;
  padding-bottom: 100px;
  padding-left: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${Media.desktop}) {
    padding-left: 120px;
  }

  @media (max-width: ${Media.tablet}) {
    padding-top: 60px;
    padding-right: 80px;
    padding-bottom: 60px;
    padding-left: 160px;
    height: auto;
  }

  @media (max-width: ${Media.mobile}) {
    padding-top: 40px;
    padding-right: 25px;
    padding-bottom: 40px;
    padding-left: 25px;
  }

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    padding-left: ${props => props.theme.spacingOuter.mobile};
    padding-right: ${props => props.theme.spacingOuter.mobile};
  }

  @media ${Media.mobileLS} {
    padding-left: 100px;
    padding-right: 100px;
  }

  ${props => props.light &&`
    background: ${ColorTint(props.theme.colorBackground(1), 0.036)};
    padding-top: 120px;
    padding-bottom: 140px;

    @media (max-width: ${Media.tablet}) {
      padding-top: 80px;
      padding-bottom: 100px;
    }

    @media (max-width: ${Media.mobile}) {
      padding-top: 80px;
      padding-bottom: 100px;
    }
  `}
`;

export const ProjectBackground = styled(ProgressiveImage).attrs({
  alt: '',
  role: 'presentation',
  opacity: props => props.opacity ? props.opacity : 0.7,
})`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 800px;
  opacity: 0;

  ${props => props.entered &&`
    animation: ${AnimFade} 2s ease ${initDelay}ms forwards;
  `}

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,
      ${props => props.theme.colorBackground(props.opacity)} 0%,
      ${props => props.theme.colorBackground(1)} 100%
    );
  }
`;

const ProjectHeaderContainer = ProjectSection.withComponent('header').extend`
  padding-top: 120px;
  padding-bottom: 0;

  @media (max-width: ${Media.tablet}) {
    padding-top: 100px;
  }

  @media (max-width: ${Media.mobile}) {
    padding-top: 130px;
    padding-bottom: 20px;
  }
`;

const ProjectHeaderInner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 100px;
  max-width: 980px;

  @media (min-width: ${Media.desktop}) {
    max-width: 1100px;
    grid-template-columns: 1fr 400px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 200px;
    grid-gap: 40px;
  }

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 100%;
    grid-gap: 30px;
  }
`;

const AnimFadeSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ProjectDetails = styled.div`
  opacity: 0;

  ${props => props.entered &&`
    animation: ${AnimFadeSlide} 1.4s ${props.theme.curveFastoutSlowin} ${initDelay}ms forwards;
  `}
`;

const ProjectTitle = styled.h1`
  margin: 0;
  font-size: 54px;
  font-weight: 500;
  line-height: 1.1;

  @media (max-width: ${Media.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${Media.mobile}) {
    font-size: 34px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 22px;
  line-height: 1.4;

  @media (max-width: ${Media.mobile}) {
    font-size: 18px;
  }
`;

const ProjectMeta = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  opacity: 0;

  ${props => props.entered &&`
    animation: ${AnimFadeSlide} 1.4s ${props.theme.curveFastoutSlowin} ${initDelay + 200}ms forwards;
  `}
`;

const ProjectMetaItem = styled.li`
  padding: 30px 0;
  font-size: 16px;
  font-weight: 400;
  border-top: 1px solid ${props => props.theme.colorText(0.2)};

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colorText(0.2)};
  }

  @media (max-width: ${Media.tablet}) {
    padding: 20px 0;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 15px 0;
  }
`;

const AnimProjectImage = keyframes`
  0% {
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }
  49% {
    transform: scale3d(1, 1, 1);
    transform-origin: left;
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: right;
  }
  100% {
    transform: scale3d(0, 1, 1);
    transform-origin: right;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  &:before {
    content: '';
    background: ${props => props.theme.colorPrimary(1)};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
    z-index: 16;
  }

  div {
    opacity: 0;
    width: 100%;
  }

  ${props => props.entered &&`
    &:before {
      animation: ${AnimProjectImage} 1.4s ${props.theme.curveFastoutSlowin} 0.6s;
    }

    div {
      animation: ${AnimFade} 0.8s ease 1.4s forwards;
    }
  `}
`;

export const ProjectSectionContent = styled.div`
  max-width: 980px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Media.desktop}) {
    max-width: 1100px;
  }
`;

export const ProjectSectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export const ProjectSectionText = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
  margin-top: 22px;
  color: ${props => props.theme.colorText(0.7)};
`;
