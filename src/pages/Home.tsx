import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { JapaneseButton, ButtonGroup } from '../components/JapaneseButton';

const HomeContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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

const Home = () => {
  const { t } = useTranslation();

  return (
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
        onClick={() => window.location.href = '/works'}
        labelKey="Download CV"
      />
      <JapaneseButton
        onClick={() => window.location.href = '/works'}
        labelKey="Contact Me"
      />
      </ButtonGroup>
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <Arrow
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;