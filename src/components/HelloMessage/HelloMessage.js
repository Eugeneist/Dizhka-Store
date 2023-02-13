import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const HelloMessage = ({ isOpen, onClose, overlay }) => {
  return (
    <>
      <Modal
        size={{ base: '5xl', md: '5xl', lg: '2xl' }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalContent p={{ base: '10px', md: '10px', lg: '10px' }}>
          <ModalHeader fontSize={{ base: '3rem', md: '4rem', lg: '1rem' }}>
            Увага!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={{ base: '3rem', md: '4rem', lg: '1rem' }} pb={6}>
            Сайт створено виключно в учбових та демонстраційних цілях, для
            портфоліо.
            <br /> Ніякі із представлених товарів не існують та купити їх не
            можна!
            <br /> Гарного ознайомлення!
          </ModalBody>

          <ModalFooter>
            <Button
              py={{ base: '3rem', md: '4rem', lg: '1rem' }}
              px={{ base: '3rem', md: '4rem', lg: '1rem' }}
              fontSize={{ base: '3rem', md: '4rem', lg: '1rem' }}
              onClick={onClose}
              colorScheme="blue"
              mr={3}
            >
              ОК!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HelloMessage;
