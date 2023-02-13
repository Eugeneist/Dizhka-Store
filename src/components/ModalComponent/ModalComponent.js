import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const ModalComponent = ({ children, isOpen, onClose, size, title, form }) => {
  return (
    <Modal size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: '6xl', md: '3xl', lg: 'xl' }}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            fontSize={{ base: '6xl', md: '3xl', lg: 'md' }}
            py={{ base: '4rem', md: '3rem', lg: '1rem' }}
            px={{ base: '4rem', md: '3rem', lg: '1rem' }}
            colorScheme="blue"
            mr={{ base: '20', md: '20', lg: '3' }}
            onClick={onClose}
          >
            Закрити
          </Button>
          <Button
            fontSize={{ base: '6xl', md: '3xl', lg: 'md' }}
            py={{ base: '4rem', md: '3rem', lg: '1rem' }}
            px={{ base: '4rem', md: '3rem', lg: '1rem' }}
            type={'submit'}
            form={form}
            colorScheme="green"
          >
            Підтвердити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
