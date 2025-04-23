import { motion } from 'framer-motion';
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
        About Me
      </SectionTitle>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I'm a designer and developer with a passion for creating digital experiences that embody simplicity and elegance. My work is heavily influenced by Japanese design principles - focusing on minimalism, attention to detail, and the beauty of empty space.
      </Paragraph>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        With over 5 years of experience in the industry, I've had the privilege of working with clients from various sectors, helping them translate their vision into digital products that resonate with their audience.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;