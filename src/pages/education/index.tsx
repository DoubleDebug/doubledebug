import css from '../../styles/Education.module.css';
import {
  faCakeCandles,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Head from 'next/head';
import 'react-vertical-timeline-component/style.min.css';
import { getStyles } from '../../components/education/styles';
import {
  Text,
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { educationData } from '../../utils/constants/EducationData';

const EducationPage: React.FC = () => {
  const styles = getStyles(useColorMode().colorMode);
  const timelineDateClassName = useColorModeValue(css.dateLight, css.dateDark);
  const timelineBottomLineClassName = useColorModeValue('light', 'dark');

  return (
    <>
      <Head>
        <title>Education | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Box mt={{ base: 8, md: 50 }} mb={50}>
        <Heading as="h1" size="2xl" mb={{ base: 8, lg: 16 }} textAlign="center">
          Education timeline
        </Heading>
        <VerticalTimeline lineColor={styles.colorLine}>
          <VerticalTimelineElement
            className="date-no-content"
            date="1998"
            dateClassName={useColorModeValue(css.dateLight, css.dateDark)}
            iconStyle={{
              background: styles.colorBlue,
              color: '#fff',
              outline: styles.iconOutline,
            }}
            icon={<FontAwesomeIcon icon={faCakeCandles} />}
          />
          {educationData.map((eduPoint, index) => (
            <VerticalTimelineElement
              key={`education-point-${index}`}
              className={`vertical-timeline-element--work`}
              contentStyle={{
                background: styles.colorBlue,
                color: '#fff',
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${styles.colorBlue}`,
              }}
              date={eduPoint.date}
              dateClassName={timelineDateClassName}
              iconStyle={{
                background: styles.colorBlue,
                color: '#fff',
                outline: styles.iconOutline,
              }}
              icon={<FontAwesomeIcon icon={eduPoint.icon} />}
            >
              <Text as="h1" color="white" fontSize={'2xl'} fontWeight="bold">
                {eduPoint.title}
              </Text>
              <Text color="gray.200" fontWeight={600} as="h5">
                <FontAwesomeIcon icon={faLocationDot} /> {eduPoint.location}
              </Text>
              <Text color="white" fontWeight={300} as="h4" mt={4}>
                {eduPoint.description}
              </Text>
              <span className={`bottom-line ${timelineBottomLineClassName}`} />
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            className="date-no-content"
            date="Present"
            dateClassName={`${timelineDateClassName} date-no-content`}
            iconStyle={{
              background: styles.colorBlue,
              color: '#fff',
              outline: styles.iconOutline,
            }}
            icon={<FontAwesomeIcon icon={faStar} />}
          />
        </VerticalTimeline>
      </Box>
    </>
  );
};

export default EducationPage;
