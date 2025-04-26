import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AboutContainer = styled(motion.div)`
  padding: 8rem 2rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;

const Paragraph = styled(motion.p)`
  font-family: 'Helvetica', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const About = () => {
 
  const { t } = useTranslation();

  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t('about.title')}
      </SectionTitle>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t('about.content.0')}
      </Paragraph>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t('about.content.1')}
      </Paragraph>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {t('about.content.2')}
      </Paragraph>
    </AboutContainer>
  );
};

export default About;