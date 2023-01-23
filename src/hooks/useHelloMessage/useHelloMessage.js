import { useState } from 'react';
import { useDisclosure, ModalOverlay } from '@chakra-ui/react';

const useHelloMessage = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const showHelloMessage = () => {
    setOverlay(<OverlayOne />);
    onOpen();
  };

  return { isOpen, onOpen, onClose, overlay, showHelloMessage };
};

export default useHelloMessage;
