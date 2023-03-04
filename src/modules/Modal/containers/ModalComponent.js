import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onModalClose } from '../../../services/action';
import { Box, Card, Modal, Typography } from '@mui/material';

const ModalComponent = () => {
  const { visible, title, description } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(onModalClose());
  };

  return (
    <Modal
      open={visible ? true : false}
      onClose={onCloseHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box>
        <Card sx={{ p: 2 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            variant="body2"
          >
            {description}
          </Typography>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
