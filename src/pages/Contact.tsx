import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa6';

const ContactContainer = styled(motion.div)`
background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTIwIDBDOC45NTQgMCAwIDguOTU0IDAgMjBjMCAxMS4wNDcgOC45NTQgMjAgMjAgMjBzMjAtOC45NTMgMjAtMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjB6bTAgMTVjLTguMjg0IDAtMTUgNi43MTYtMTUgMTUgMCA4LjI4MyA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNyAxNS0xNWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjwvZz48L2c+PC9zdmc+');
  background-size: 40px 40px;
  padding: 8rem 2rem 4rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  // &::after {
  //   content: '';
  //   position: absolute;
  //   bottom: -8px;
  //   left: 0;
  //   width: 50%;
  //   height: 1px;
  //   background-color: black;
  // }
`;

const ContactList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 0;
`;

const ContactItem = styled(motion.li)`
  margin-bottom: 2rem;
  font-family: 'Helvetica', sans-serif;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: black;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactValue = styled.a`
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0.5rem 0;

  &:hover {
    color: black;
    transform: translateX(5px);
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      label: t('contact.email'),
      value: 'reece.baptist@gmail.com',
      href: 'mailto:reece.baptist@gmail.com',
      icon: <FaEnvelope style={{marginRight: '0.5rem'}} />
    },
    {
      label: t('contact.phone'),
      value: '+91 (999) 471-0295',
      href: 'tel:+919994710295',
      icon: <FaPhone style={{ marginRight: '0.5rem' }} />
    },
    {
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/reece-baptist',
      href: 'https://www.linkedin.com/in/reece-baptist/',
      icon: <FaLinkedin style={{ marginRight: '0.5rem' }} />
    }
  ];

  return (
    <ContactContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContactTitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t('contact.title')}
      </ContactTitle>

      <ContactList>
        {contactItems.map((item, index) => (
          <ContactItem
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          >
            <ContactLabel>
              {item.icon}
              {item.label}
              </ContactLabel>
            <ContactValue 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {item.value}
            </ContactValue>
          </ContactItem>
        ))}
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;