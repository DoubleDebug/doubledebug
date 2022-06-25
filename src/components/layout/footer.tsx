import css from '../../styles/Footer.module.css';
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  faGithub,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../utils/constants';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent="center"
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} align={'center'}>
        <Stack direction={'row'} spacing={6} display="flex">
          {NAVIGATION_ITEMS.map((navItem) => (
            <Link href={navItem.url} key={`nav-item-${navItem.title}`}>
              {navItem.title}
            </Link>
          ))}
          <span
            className={useColorModeValue('vSeparatorLight', 'vSeparatorDark')}
            role="separator"
          />
          <Link href="#" onClick={() => window.scrollTo(0, 0)} ml="auto">
            Back to top
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.300', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Double Debug. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={SOCIAL_LINKS.github}>
              <div className={css.socialMediaButton} title="Github">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </SocialButton>
            <SocialButton label={'YouTube'} href={SOCIAL_LINKS.youtube}>
              <div className={css.socialMediaButton} title="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </SocialButton>
            <SocialButton label={'Twitter'} href={SOCIAL_LINKS.twitter}>
              <div className={css.socialMediaButton} title="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
