import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaJava } from 'react-icons/fa';
import { SiPython, SiScala, SiTypescript, SiJavascript, SiApachespark, SiReact, SiGooglecloud, SiGooglebigquery, SiMysql, SiGit, SiJirasoftware, SiSpring } from 'react-icons/si';

const SkillsContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled(motion.h2)`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50%;
    height: 1px;
    background-color: 'black';
  }
`;

const CategoryContainer = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-family:'Times New Roman', serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: 'black';
  padding-bottom: 0.5rem;
  border-bottom: 1px solid 'gray';
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const SkillCard = styled(motion.div)`
  padding: 1.5rem;
  border: 1px solid 'gray';
  background: 'white';
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillIcon = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: 'black';
`;

export const SkillName = styled.h4`
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  color: 'black';
`;

export const SkillDescription = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-size: 0.9rem;
  color:'black';
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProgressContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  height: 4px;
`;

const ProgressBar = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: rgba(0,0,0,0.7);
  width: ${props => props.level}%;
`;


const Skills = () => {
  const { t } = useTranslation();

    
  const skillsData = [
    {
      category: 'development',
      skills: [
        {
          name: 'Python',
          level: 70,
          description: t('skills.skills.development.0.description'),
          icon: <SiPython />
        },
        {
          name: 'Scala',
          level: 90,
          description: t('skills.skills.development.1.description'),
          icon: <SiScala />
        },
        {
          name: 'Java',
          level: 80,
          description: t('skills.skills.development.2.description'),
          icon: <FaJava />
        },
        {
          name: 'TypeScript',
          level: 60,
          description: t('skills.skills.development.3.description'),
          icon: <SiTypescript />
        },
        {
          name: 'JavaScript',
          level: 60,
          description: t('skills.skills.development.4.description'),
          icon: <SiJavascript />
        },
        {
          name: 'SQL',
          level: 80,
          description: t('skills.skills.development.5.description'),
          icon: <SiMysql />
        },
      ]
    },
    {
      category: 'frameworks',
      skills: [
        {
          name: 'PySpark',
          level: 60,
          description: t('skills.skills.frameworks.0.description'),
          icon: <SiPython />
        },
        {
          name: 'Apache Spark',
          level: 90,
          description: t('skills.skills.frameworks.1.description'),
          icon: <SiApachespark />
        },
        {
          name: 'React',
          level: 60,
          description: t('skills.skills.frameworks.2.description'),
          icon: <SiReact />
        },
        {
          name: 'Spring Boot',
          level: 50,
          description: t('skills.skills.frameworks.3.description'),
          icon: <SiSpring />
        }
      ]
    },
    {
      category: 'cloud_tools',
      skills: [
        {
          name: 'Google Cloud Platform',
          level: 90,
          description: t('skills.skills.cloud_tools.0.description'),
          icon: <SiGooglecloud />
        },
        {
          name: 'BigQuery',
          level: 90,
          description: t('skills.skills.cloud_tools.1.description'),
          icon: <SiGooglebigquery />
        }
      ]
    },
    {
      category: 'tools',
      skills: [
        {
          name: 'Git',
          level: 90,
          description: t('skills.skills.tools.0.description'),
          icon: <SiGit />
        },
        {
          name: 'JIRA',
          level: 80,
          description: t('skills.skills.tools.1.description'),
          icon: <SiJirasoftware />
        }
      ]
    }
  ];

  return (
    <SkillsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t('skills.title')}
      </SectionTitle>

      {skillsData.map((category, catIndex) => (
        <CategoryContainer
          key={category.category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + catIndex * 0.1, duration: 0.8 }}
        >
          <CategoryTitle>
            {t(`skills.categories.${category.category}`)}
          </CategoryTitle>
          
          <SkillsGrid>
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.6 + (catIndex * 0.1) + (skillIndex * 0.05),
                  duration: 0.5 
                }}
                whileHover={{ y: -5 }}
              >
                <SkillHeader>
                  <SkillIcon>
                    {/* You can add icons here */}
                    {skill.icon || '•'}
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillHeader>
                
                <SkillDescription>{skill.description}</SkillDescription>
                
                <ProgressContainer>
                  <ProgressBar 
                    level={skill.level}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </ProgressContainer>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
      ))}
    </SkillsContainer>
  );
};

export default Skills;