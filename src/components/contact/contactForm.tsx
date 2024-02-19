import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCircleNotch,
  faEnvelope,
  faLightbulb,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';
import { SOCIAL_LINKS } from '../../utils/constants/navigation';
import { sendEmail } from './contactFormActions';

export const ContactForm: React.FC<{ children?: ReactNode }> = (props) => {
  const [formStage, setFormStage] = useState<
    'initial' | 'in-progress' | 'successful' | 'failed'
  >('initial');
  const formBgColor = useColorModeValue('white', 'gray.700');
  const formFontColor = useColorModeValue('gray.700', 'whiteAlpha.900');

  if (formStage === 'successful') {
    return (
      <Flex justify="center" alignItems="center" height="80vh">
        <Grid placeItems="center" textAlign="center" py={10} px={6} rowGap={4}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="3xl">
            Sent
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Your message was successfully sent.
          </Text>
          <Button onClick={() => setFormStage('initial')}>Go back</Button>
        </Grid>
      </Flex>
    );
  }

  if (formStage === 'failed') {
    return (
      <Flex justify="center" alignItems="center" height="80vh">
        <Grid placeItems="center" textAlign="center" py={10} px={6} rowGap={4}>
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={'red.500'}
              rounded={'50px'}
              w={'55px'}
              h={'55px'}
              textAlign="center"
            >
              <CloseIcon boxSize={'20px'} color={'white'} />
            </Flex>
          </Box>
          <Heading as="h2" size="3xl" mt={6}>
            Error
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            We failed to send your message. Please try again in a few minutes.
          </Text>
          <Button onClick={() => setFormStage('initial')}>Try again</Button>
        </Grid>
      </Flex>
    );
  }

  return (
    <Flex
      align="center"
      justifyContent="center"
      width="full"
      id="homepage-section-contact"
    >
      <Flex
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
        width="full"
        justifyContent="center"
      >
        <Flex width="full" justifyContent="center">
          <VStack
            spacing={{ base: 4, md: 8, lg: 10 }}
            display="grid"
            justify={{ base: undefined, md: 'center' }}
            width="full"
          >
            {props.children}
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip label="Email" hasArrow>
                  <Link href={`mailto: ${SOCIAL_LINKS.email}`}>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FontAwesomeIcon icon={faEnvelope} />}
                      _hover={{
                        bg: 'blue.500',
                        color: 'white',
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>

                <Tooltip label="GitHub" hasArrow>
                  <Link href={SOCIAL_LINKS.github} isExternal>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<FontAwesomeIcon icon={faGithub} />}
                      _hover={{
                        bg: 'blue.500',
                        color: 'white',
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>

                <Tooltip label="Twitter" hasArrow>
                  <Link href={SOCIAL_LINKS.twitter} isExternal>
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={
                        <FontAwesomeIcon icon={faTwitter} fontSize="1.75em" />
                      }
                      _hover={{
                        bg: 'blue.500',
                        color: 'white',
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>

                <Tooltip label="LinkedIn" hasArrow>
                  <Link href={SOCIAL_LINKS.linkedIn} isExternal>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={
                        <FontAwesomeIcon icon={faLinkedin} fontSize="1.75em" />
                      }
                      _hover={{
                        bg: 'blue.500',
                        color: 'white',
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
              </Stack>

              <Box
                bg={formBgColor}
                color={formFontColor}
                borderRadius="lg"
                p={{ base: 4, md: 8 }}
                shadow="2xl"
                width={{ base: 'full', md: '600px' }}
              >
                <VStack
                  as="form"
                  spacing={5}
                  display="grid"
                  onSubmit={async (e) => {
                    setFormStage('in-progress');
                    const res = await sendEmail(e);
                    if (res.success) {
                      setFormStage('successful');
                    } else {
                      setFormStage('failed');
                      console.log('Failed to send message: ', res);
                    }
                  }}
                >
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <FontAwesomeIcon icon={faUser} />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        minLength={3}
                        maxLength={20}
                        autoComplete="off"
                        disabled={formStage === 'in-progress'}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <FontAwesomeIcon icon={faLightbulb} />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        minLength={3}
                        maxLength={20}
                        autoComplete="off"
                        disabled={formStage === 'in-progress'}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        disabled={formStage === 'in-progress'}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="vertical"
                      minHeight={150}
                      maxHeight={800}
                      disabled={formStage === 'in-progress'}
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    width={{ base: 'full', md: 'min-content' }}
                    px={8}
                    justifySelf="right"
                    type="submit"
                    disabled={formStage === 'in-progress'}
                  >
                    {formStage === 'in-progress' ? (
                      <FontAwesomeIcon
                        icon={faCircleNotch}
                        spin
                        style={{ margin: '0 2.7rem 0 2.7rem' }}
                      />
                    ) : (
                      <span>Send message</span>
                    )}
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
