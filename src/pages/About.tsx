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
        I'm a software engineer with a deep focus on crafting resilient, scalable systems that power meaningful data-driven experiences. My work bridges the worlds of data engineering and backend development — designing robust pipelines, optimizing data flow, and building performant APIs that serve complex business needs.
      </Paragraph>
      <Paragraph
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        With over 3 years of experience, I've collaborated across industries to turn raw data into actionable insight and backend architecture into seamless, user-facing functionality. My approach blends precision engineering with thoughtful design, always aiming for clarity, efficiency, and long-term maintainability.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;