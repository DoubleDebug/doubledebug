import {
  Text,
  Stack,
  Heading,
  Image as ImageChakra,
  Button,
  Grid,
  Flex,
  Box,
  IconButton,
  Link,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import {
  faChevronRight,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { dialogueData } from '../../../utils/constants/DialogueData';
import FadeInOut from './FadeInComponent';

const HomepageDialogue: React.FC = () => {
  const router = useRouter();
  const [dialogueStage, setDialogueStage] = useState<number>(1);
  const [showReplyBox, setShowReplyBox] = useState(true);
  const currentDialogueStage = useMemo(
    () => dialogueData.filter((s) => s.stage === dialogueStage)[0],
    [dialogueStage]
  );
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        flex="0.5"
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
        ml={32}
      >
        <Box rounded="full" boxShadow="2xl" justifySelf="center">
          <ImageChakra
            src={
              dialogueStage === 6
                ? '/images/avatar_circle_happy.png'
                : '/images/avatar_circle_meh.png'
            }
            width={300}
            height={300}
            animation="fadeIn 1s ease"
          />
        </Box>
        {dialogueStage === 6 && (
          <FadeInOut delay={3000} duration={2000}>
            <Box position="relative">
              <Tooltip
                label="Learn more"
                hasArrow
                placement="top"
                position="absolute"
                top="-65px"
                left={595}
              >
                <Link
                  href="/blog/how-i-made-this-react-dialogue-component"
                  isExternal
                >
                  <IconButton
                    aria-label="learn more"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<FontAwesomeIcon icon={faCircleQuestion} />}
                    _hover={{
                      bg: 'blue.500',
                      color: 'white',
                    }}
                    isRound
                    position="absolute"
                    top={-16}
                    left={570}
                    animation="popUp 2s ease 3s"
                  />
                </Link>
              </Tooltip>
            </Box>
          </FadeInOut>
        )}
      </Flex>
      <Stack flex={1} spacing={{ base: 5, md: 10 }} position="relative">
        <FadeInOut duration={1000} delay={500}>
          <ImageChakra
            src="/images/speech_bubble_2.png"
            alt="Speech bubble"
            position="absolute"
            left={-120}
            top={-650}
            zIndex={-10}
            width={800}
          />
        </FadeInOut>
        <Heading
          lineHeight={1.2}
          fontWeight={600}
          position="absolute"
          left={-6}
          top={-550}
        >
          {showReplyBox &&
            currentDialogueStage.elements.map((dialogueElement, index) => (
              <FadeInOut
                key={`dialogue-text-${index}`}
                duration={dialogueElement.duration}
                delay={dialogueElement.delay}
              >
                <Text {...dialogueElement.props}>{dialogueElement.text}</Text>
              </FadeInOut>
            ))}
        </Heading>
        {showReplyBox ? (
          <FadeInOut delay={currentDialogueStage.repliesDelay}>
            <Grid position="absolute" top={-150} left={50} rowGap={2}>
              <Text
                color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                fontSize="lg"
                fontWeight="semibold"
              >
                Choose a reply:
              </Text>
              <Grid
                rounded="lg"
                borderWidth="2px"
                borderStyle="solid"
                borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
                width={500}
                height={134}
                rowGap={4}
                p={4}
              >
                {currentDialogueStage.replies.map((dialogueReply, index) => (
                  <Button
                    w="full"
                    key={`dialogue-reply-${index}`}
                    onClick={() => {
                      if (dialogueReply.action) {
                        dialogueReply.action({
                          router,
                          setShowReplyBox,
                        });
                      }
                      if (dialogueStage === 9) {
                        setDialogueStage(dialogueReply.nextStage);
                        setShowReplyBox(false);
                        process.nextTick(() => {
                          setShowReplyBox(true);
                        });
                      }
                      if (dialogueStage === 6) {
                        if (dialogueReply.isPrimary) {
                        } else {
                          window.scrollTo(0, 5000);
                        }
                        return;
                      }

                      setDialogueStage(dialogueReply.nextStage);
                      setShowReplyBox(false);
                      process.nextTick(() => {
                        setShowReplyBox(true);
                      });
                    }}
                    colorScheme={dialogueReply.isPrimary ? 'blue' : undefined}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Text ml="auto">{dialogueReply.text}</Text>
                  </Button>
                ))}
              </Grid>
            </Grid>
          </FadeInOut>
        ) : (
          <div aria-label="empty-div" />
        )}
      </Stack>
    </>
  );
};

export default HomepageDialogue;
