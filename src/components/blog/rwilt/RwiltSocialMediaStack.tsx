import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
const FaTiktok = dynamic(
  () => import('react-icons/fa').then((icons) => icons.FaTiktok),
  { ssr: false }
);
const SiYoutubeshorts = dynamic(
  () => import('react-icons/si').then((icons) => icons.SiYoutubeshorts),
  { ssr: false }
);

type Props = {
  youtubeLink: string;
  tiktokLink: string;
};

export const RwiltSocialMediaStack: FC<Props> = (props) => {
  const [shareTimeout, setShareTimeout] = useState(false);

  return (
    <Box display="grid" gap={3} height="min-content">
      <iframe
        width="315"
        height="560"
        src={props.youtubeLink.replace('shorts', 'embed')}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media;"
        allowFullScreen
      />
      <Flex gap={2}>
        <a title="TikTok video" target="_blank" href={props.tiktokLink}>
          <IconButton aria-label="TikTok link">
            <FaTiktok />
          </IconButton>
        </a>
        <a
          title="YouTube shorts video"
          target="_blank"
          href={props.youtubeLink}
        >
          <IconButton aria-label="YouTube shorts link">
            <SiYoutubeshorts />
          </IconButton>
        </a>
        <Button
          width="100%"
          fontWeight={400}
          isDisabled={shareTimeout}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href).then(() => {
              setShareTimeout(true);
              setTimeout(() => {
                setShareTimeout(false);
              }, 2000);
            });
          }}
        >
          {shareTimeout && 'Copied link ✔️'}
          {!shareTimeout && 'Share link'}
        </Button>
      </Flex>
    </Box>
  );
};
