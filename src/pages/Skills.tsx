import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaReact } from 'react-icons/fa';
import SkillProgress from '../components/SkillProgress';

const SkillsContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
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
    background-color: 'white';
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)`
  padding: 1.5rem;
  border: 1px solid 'black';
  background: 'black';
  border-radius: 4px;
`;

const CategoryTitle = styled.h3`
  font-family: 'Times New Roman', serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: 'black';
  padding-bottom: 0.5rem;
  border-bottom: 1px solid 'black';
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-family: 'Helvetica', sans-serif;
`;

const SkillName = styled.span`
  margin-left: 0.8rem;
`;

// const skillsData = [
//   {
//     category: 'design',
//     items: ['UI/UX Design', 'Visual Design', 'Typography', 'Wireframing']
//   },
//   {
//     category: 'development',
//     items: ['React', 'TypeScript', 'JavaScript', 'CSS/Sass']
//   },
//   {
//     category: 'tools',
//     items: ['Figma', 'Adobe Suite', 'VS Code', 'Git']
//   },
//   {
//     category: 'principles',
//     items: ['Minimalism', 'Wabi-Sabi', 'User-Centered', 'Responsive']
//   }
// ];


const skillsData = [
    {
      category: 'design',
      items: [{ name: 'UI/UX Design', level: 90, icon: <FaReact /> },
        { name: 'Visual Design', level: 85, icon: <FaReact /> },
        { name: 'Typography', level: 80,icon: <FaReact /> },
        { name: 'Wireframing', level: 95, icon: <FaReact /> }]
    },
    {
      category: 'development',
      items: [{ name: 'UI/UX Design', level: 90, icon: <FaReact /> },
        { name: 'Visual Design', level: 85, icon: <FaReact /> },
        { name: 'Typography', level: 80,icon: <FaReact /> },
        { name: 'Wireframing', level: 95, icon: <FaReact /> }]
    },
    {
      category: 'tools',
      items: [{ name: 'UI/UX Design', level: 90, icon: <FaReact /> },
        { name: 'Visual Design', level: 85, icon: <FaReact /> },
        { name: 'Typography', level: 80,icon: <FaReact /> },
        { name: 'Wireframing', level: 95, icon: <FaReact /> }]
    },
    {
      category: 'principles',
      items: [{ name: 'UI/UX Design', level: 90, icon: <FaReact /> },
        { name: 'Visual Design', level: 85, icon: <FaReact /> },
        { name: 'Typography', level: 80,icon: <FaReact /> },
        { name: 'Wireframing', level: 95, icon: <FaReact /> }]
    }
  ];
  



const Skills = () => {
  const { t } = useTranslation();

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

      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory
            key={category.category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <CategoryTitle>
              {t(`skills.categories.${category.category}`)}
            </CategoryTitle>
            {category.items.map((skill, skillIndex) => (
            <div key={skill.name}>
                <SkillItem
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 0.6 + (index * 0.1) + (skillIndex * 0.05),
                    duration: 0.5 
                }}
                >
                {skill.icon || '•'}
                <SkillName>{skill.name}</SkillName>
                </SkillItem>
                <SkillProgress level={90} />
            </div>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;