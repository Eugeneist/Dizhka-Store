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
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Увага!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Сайт створено виключно в учбових та демонстраційних цілях, для
            портфоліо.
            <br /> Ніякі із представлених товарів не існують та купити їх не
            можна!
            <br /> Гарного ознайомлення!
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue" mr={3}>
              ОК!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HelloMessage;
