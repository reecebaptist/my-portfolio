import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { CVButton } from '../components/JapaneseButton';
import { FaBriefcase } from 'react-icons/fa';

const WorkContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
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
    background-color: '#8b4513';
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background: '#8b4513';
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 3rem;
  padding-left: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: '#f8f4e9';
    border: 1px solid '#8b4513';
    z-index: 1;
  }
`;

const TimelineDate = styled.div`
  font-family:'Times New Roman', serif;
  color: '#8b4513';
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  font-family: 'Helvetica', sans-serif;
  font-size: 0.9rem;
  font-weight: normal;
  margin-bottom: 0.8rem;
  color: '#252525';
`;

const TimelineContent = styled.p`
  font-family: 'Helvetica', sans-serif;
  line-height: 1.6;
  color: '#252525';
`;

const workData = [
  {
    id: 1,
    date: "2021 - Present",
    title: "Senior UI Designer",
    subtitle: "Zen Design Studio, Kyoto",
    content: "Lead designer creating minimalist interfaces for international clients with focus on Japanese aesthetics."
  },
  {
    id: 2,
    date: "2018 - 2021",
    title: "UX Designer",
    subtitle: "Tokyo Digital Agency",
    content: "Designed user flows and interactions for traditional businesses transitioning to digital platforms."
  },
  {
    id: 3,
    date: "2016 - 2018",
    title: "Design Intern",
    subtitle: "Osaka Creative Lab",
    content: "Learned fundamentals of wabi-sabi design principles and digital application of traditional crafts."
  }
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <WorkContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t('work.title')}
      </SectionTitle>
      
      <Timeline>
        {workData.map((item, index) => (
          <TimelineItem
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
          >
            <FaBriefcase style={{ position: 'absolute', left: '-2.2rem', top: '0' }} />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
            <TimelineContent>{item.content}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <CVButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => window.open('/path-to-cv.pdf')}
        >
  {t('work.view_cv')}
</CVButton>
    </WorkContainer>
  );
};

export default Work;