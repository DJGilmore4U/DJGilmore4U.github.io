import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Intro from '../screens/Intro';
import ProjectItem from '../screens/ProjectItem';
import Profile from '../screens/Profile';
import Footer from '../components/Footer';
import sprProject from '../assets/spr-project.png';
import sprProjectLarge from '../assets/spr-project-large.png';
import sprProjectPlaceholder from '../assets/spr-project-placeholder.png';
import gamestackLogin from '../assets/gamestack-login.jpg';
import gamestackLoginLarge from '../assets/gamestack-login-large.jpg';
import gamestackLoginPlaceholder from '../assets/gamestack-login-placeholder.jpg';
import gamestackList from '../assets/gamestack-list.jpg';
import gamestackListLarge from '../assets/gamestack-list-large.jpg';
import gamestackListPlaceholder from '../assets/gamestack-list-placeholder.jpg';
import sliceProject from '../assets/slice-project.png';
import sliceProjectLarge from '../assets/slice-project-large.png';
import sliceProjectPlaceholder from '../assets/slice-project-placeholder.png';

const disciplines = ['Full Stack Developer', 'Telecom', 'Business Operations'];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disciplineIndex: 0,
      hideScrollIndicator: false,
      backgroundLoaded: false,
      visibleSections: [],
    }

    this.scheduledAnimationFrame = false;
    this.lastScrollY = 0;
  }

  componentDidMount() {
    const threeCanvas = this.threeCanvas;

    this.revealSections = [
      this.intro,
      this.projectOne,
      this.projectTwo,
      this.projectThree,
      this.details,
    ];

    import('../components/DisplacementSphere').then(DisplacementSphere => {
      this.setState({backgroundLoaded: true});
      this.sphere = new DisplacementSphere.default(threeCanvas);
      requestAnimationFrame(() => this.sphere.init());
    });

    window.addEventListener('scroll', this.handleScroll);
    this.setState({visibleSections: [this.intro]});
    this.switchDiscipline();
    this.initScroll();
  }

  initScroll = () => {
    const { status, location } = this.props;
    const { hash } = location;

    if (status !== 'entered') {
      requestAnimationFrame(this.initScroll);
    } else if (hash && status === 'entered') {
      this.handleHashchange(hash, false);
    } else if (status === 'entered') {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.sphere.remove();
    clearInterval(this.disciplineInterval);
  }

  componentWillReceiveProps(nextProps) {
    const { key: currentKey } = this.props.location;
    const { key: nextKey, hash: nextHash } = nextProps.location;

    if (currentKey !== nextKey && this.props.status === 'entered') {
      this.handleHashchange(nextHash, true);
    }
  }

  handleScroll = () => {
    this.lastScrollY = window.scrollY;
    if (this.scheduledAnimationFrame) return;
    this.scheduledAnimationFrame = true;

    requestAnimationFrame(() => {
      const { visibleSections } = this.state;

      const revealableSections = this.revealSections.filter(section => {
        if (visibleSections.includes(section)) return false;
        return this.isInViewport(section, this.lastScrollY);
      });

      this.setState({
        visibleSections: [...visibleSections, ...revealableSections],
        hideScrollIndicator: this.lastScrollY >= 50,
      });

      this.scheduledAnimationFrame = false;
    });
  }

  handleHashchange = (hash, scroll) => {
    const hashSections = [this.intro, this.projectOne, this.details];
    const hashString = hash.replace('#', '');
    const element = hashSections.filter(item => item.id === hashString)[0];

    if (element) {
      element.scrollIntoView({
        behavior: scroll ? 'smooth' : 'instant',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  isInViewport = (elem, scrollY) => {
    const rect = elem.getBoundingClientRect();
    const offsetY = window.pageYOffset;
    const revealOffset = window.innerHeight - 100;
    const top = rect.top + offsetY;
    return top - revealOffset <= scrollY;
  }

  switchDiscipline = () => {
    this.disciplineInterval = setInterval(() => {
      const { disciplineIndex } = this.state;
      const index = disciplineIndex >= disciplines.length - 1 ? 0 : disciplineIndex + 1;

      this.setState({
        disciplineIndex: index,
      });
    }, 5000);
  }

  render() {
    const { disciplineIndex, hideScrollIndicator,
      visibleSections, backgroundLoaded } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>D.J. Turner | Engineer</title>
          <meta
            name="description"
            content="Portfolio of D.J. Turner – a digital designer working on web, mobile, &amp; software apps with a focus on user experience and database management."
          />
        </Helmet>
        <Intro
          id="intro"
          sectionRef={section => this.intro = section}
          threeCanvas={canvas => this.threeCanvas = canvas}
          disciplines={disciplines}
          disciplineIndex={disciplineIndex}
          hideScrollIndicator={hideScrollIndicator}
          backgroundLoaded={backgroundLoaded}
        />
        <ProjectItem
          id="projects"
          tabIndex={0}
          sectionRef={section => this.projectOne = section}
          visible={visibleSections.includes(this.projectOne)}
          index="01"
          title="Designing the future of education"
          description="With a team of UCSD cohorts, we created a childrens banking application which is parent managed with the hopes of helping to create a generation of enlarged savings accounts rather than enlarged debt."
          buttonText="View Project"
          buttonTo="/projects/smart-sparrow"
          imageSrc={[`${sprProject} 980w, ${sprProjectLarge} 1376w`]}
          imageAlt={['Smart Sparrow lesson builder']}
          imagePlaceholder={[sprProjectPlaceholder]}
          imageType="laptop"
        />
        <ProjectItem
          tabIndex={0}
          sectionRef={section => this.projectTwo = section}
          visible={visibleSections.includes(this.projectTwo)}
          index="02"
          title="iMD"
          description="The goal is to provide a health management system in an affordable and accessable way, globally. With an easy to use and easy to mantain application for medical records."
          buttonText="View Website"
          buttonLink="https://afternoon-tundra-66682.herokuapp.com/"
          imageSrc={[
            `${gamestackLogin} 254w, ${gamestackLoginLarge} 508w`,
          ]}
          imageAlt={[
            'App login screen',
          ]}
          imagePlaceholder={[
            gamestackLoginPlaceholder,
          ]}
          imageType="phone"
        />
        <ProjectItem
          tabIndex={0}
          sectionRef={section => this.projectThree = section}
          visible={visibleSections.includes(this.projectThree)}
          index="03"
          title="My GitHub"
          description="A variety of different projects and assignments that I have worked or am working on."
          buttonText="View Project"
          buttonTo="/projects/slice"
          imageSrc={[`${sliceProject} 980w, ${sliceProjectLarge} 1376w`]}
          imageAlt={['GitHub Snap Shot']}
          imagePlaceholder={[sliceProjectPlaceholder]}
          imageType="laptop"
        />
        <Profile
          tabIndex={0}
          sectionRef={section => this.details = section}
          visible={visibleSections.includes(this.details)}
          id="details"
        />
        <Footer />
      </React.Fragment>
    );
  }
}
