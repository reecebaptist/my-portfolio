import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { JapaneseButton, ButtonGroup } from '../components/JapaneseButton';
import mf2cImage from '../assets/images/mf2cImage.webp'; // Add your image imports
import warehouseImage from '../assets/images/warehouseImage.webp';
import sapImage from '../assets/images/sapImage.webp';
import { SectionTitle, SkillDescription, SkillHeader, SkillName, SkillsGrid } from './Skills';

const HomeContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-family: 'Times New Roman', serif;
  font-size: 4rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-family: 'Helvetica', sans-serif;
  font-size: 1rem;
  max-width: 500px;
  line-height: 1.6;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Helvetica', sans-serif;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Arrow = styled(motion.div)`
  width: 1px;
  height: 30px;
  background-color: black;
`;



// const ImageSection = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   position: relative;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.4);
//   }
// `;

// const OverlayText = styled.h2`
//   font-family: 'Times New Roman', serif;
//   font-size: 3rem;
//   color: white;
//   z-index: 2;
// `;

const ProjectsSection = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  border: 1px solid black;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: default;
  height: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

// New Styled Components for Skill Tags
const SkillTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem; // Add space above the tags
`;

const SkillTag = styled.span`
  background-color: #333; // Light grey background
  color: #f0f0f0; // Darker text
  padding: 0.25rem 0.6rem;
  border-radius: 12px; // Pill shape
  font-size: 0.75rem;
  font-family: 'Helvetica', sans-serif;
  font-weight: 500;
  white-space: nowrap; // Prevent tags from breaking line internally
`;



const Home = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      title: 'Mainframe to Cloud (MF2C)',
      description: t('projects.projects.0.description'),
      image: mf2cImage,
      alt: 'Mainframe to cloud migration diagram',
      skills: ['Apache Spark', 'Scala', 'Python', 'PySpark']
    },
    {
      title: 'Warehouse Application',
      description: t('projects.projects.1.description'),
      image: warehouseImage,
      alt: 'Warehouse management system interface',
      skills: ['React Native', 'TypeScript'] 
    },
    {
      title: 'SAP ERP Testing Suite',
      description: 'SAP automation testing suite developed for FIORI Apps',
      image: sapImage,
      alt: 'SAP testing suite dashboard',
      skills: ['Playwright', 'TypeScript'] 
    }
  ];

  return (
    <>
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t('home.title')}
      </Title>
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {t('home.subtitle')}
      </Subtitle>
      <ButtonGroup>
      <JapaneseButton
        path="/work"
        labelKey="home.view_works"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      <JapaneseButton
        path="/contact"
        labelKey="home.contact"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      </ButtonGroup>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>{t('home.scroll')}</span>
        <Arrow
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </ScrollIndicator>
    </HomeContainer>


    {/* <ImageSection>
        <ImageContainer style={{ backgroundImage: `url(${backgroundOne})` }}>
          <OverlayText>Data Engineer</OverlayText>
        </ImageContainer>
        <ImageContainer style={{ backgroundImage: `url(${backgroundTwo})` }}>
          <OverlayText>Back End Engineer</OverlayText>
        </ImageContainer>
      </ImageSection> */}

<ProjectsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('projects.title')}
        </SectionTitle>
        <SkillsGrid>
          {projectsData.map((project, i) => (
            <ProjectCard
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <ProjectImage 
                style={{ backgroundImage: `url(${project.image})` }}
                aria-label={project.alt}
              />
              <ProjectContent>
                <SkillHeader>
                  <SkillName>{project.title}</SkillName>
                </SkillHeader>
                <SkillDescription>
                  {project.description}
                </SkillDescription>
                <SkillTagContainer>
                  {project.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillTagContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </SkillsGrid>
      </ProjectsSection>
    </>
  );
};

export default Home;