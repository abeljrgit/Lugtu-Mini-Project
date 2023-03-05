import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onModalOpen } from '../../../services/action';

export const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    nameInputValue: '',
    emailInputValue: '',
    contactInputValue: '',
    messageInputValue: '',
    error: {
      nameInputError: '',
      emailInputError: '',
      contactInputError: '',
      messageInputError: '',
    },
    isNameValid: false,
    isEmailValid: false,
    isContactValid: false,
    isMessageValid: false,
  });
  const dispatch = useDispatch();

  const validate = (type, value) => {
    if (type === 'nameInput') {
      let isNameValid = false;
      let nameInputError = '';
      if (value === '') {
        nameInputError = 'Name cannot be empty.';
        isNameValid = false;
      } else {
        nameInputError = '';
        isNameValid = true;
      }
      setContactForm((prev) => {
        return {
          ...prev,
          error: { ...prev.error, nameInputError },
          isNameValid,
        };
      });
      return isNameValid;
    } else if (type === 'emailInput') {
      let isEmailValid = false;
      let emailInputError = '';
      if (value === '') {
        emailInputError = 'Email cannot be empty.';
        isEmailValid = false;
      } else {
        emailInputError = '';
        isEmailValid = true;
      }
      setContactForm((prev) => {
        return {
          ...prev,
          error: { ...prev.error, emailInputError },
          isEmailValid,
        };
      });
      return isEmailValid;
    } else if (type === 'contactInput') {
      let isContactValid = false;
      let contactInputError = '';
      if (value === '') {
        contactInputError = 'Contact cannot be empty.';
        isContactValid = false;
      } else {
        contactInputError = '';
        isContactValid = true;
      }
      setContactForm((prev) => {
        return {
          ...prev,
          error: { ...prev.error, contactInputError },
          isContactValid,
        };
      });
      return isContactValid;
    } else if (type === 'messageInput') {
      let isMessageValid = false;
      let messageInputError = '';
      if (value === '') {
        messageInputError = 'Message cannot be empty.';
        isMessageValid = false;
      } else {
        messageInputError = '';
        isMessageValid = true;
      }
      setContactForm((prev) => {
        return {
          ...prev,
          error: { ...prev.error, messageInputError },
          isMessageValid,
        };
      });
      return isMessageValid;
    }
  };

  const onChangHandler = (type, value) => {
    validate(type, value);
    if (type === 'nameInput') {
      setContactForm((prev) => {
        return { ...prev, nameInputValue: value };
      });
    } else if (type === 'emailInput') {
      setContactForm((prev) => {
        return { ...prev, emailInputValue: value };
      });
    } else if (type === 'contactInput') {
      setContactForm((prev) => {
        return { ...prev, contactInputValue: value };
      });
    } else if (type === 'messageInput') {
      setContactForm((prev) => {
        return { ...prev, messageInputValue: value };
      });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      validate('nameInput', contactForm.nameInputValue) &&
      validate('emailInput', contactForm.emailInputValue) &&
      validate('contactInput', contactForm.contactInputValue) &&
      validate('messageInput', contactForm.messageInputValue)
    ) {
      setContactForm((prev) => {
        return {
          nameInputValue: '',
          emailInputValue: '',
          contactInputValue: '',
          messageInputValue: '',
          error: {
            nameInputError: '',
            emailInputError: '',
            contactInputError: '',
            messageInputError: '',
          },
          isNameValid: false,
          isEmailValid: false,
          isContactValid: false,
          isMessageValid: false,
        };
      });
      dispatch(
        onModalOpen({
          visible: true,
          title: 'Success',
          description: 'Contact form submitted.',
        })
      );
    } else {
      dispatch(
        onModalOpen({
          visible: true,
          title: 'Failed',
          description: 'Player and score were not added\nPlease try again.',
        })
      );
    }
  };

  const textFieldStyle = {
    ['& label.Mui-focused']: {
      color: 'white',
    },
    ['& label']: {
      color: '#FFFFFFC2',
    },
    ['& .MuiInputBase-input']: {
      color: 'white',
    },
    ['& .MuiInput-underline:hover:before']: {
      borderBottomColor: 'white!important',
    },
    ['& .MuiInput-underline:after']: {
      borderBottomColor: 'white',
    },
    ['& .MuiInput-underline:before']: {
      borderBottomColor: 'white',
    },
  };

  const errorTextStyle = { mt: 1, color: 'yellow', fontSize: 12 };

  return (
    <Card
      sx={{
        flex: 2,
        bgcolor: '#000000D3',
        p: 2,
        '@media (max-width: 768px)': {
          flex: 'unset',
          height: '300px',
        },
      }}
    >
      <form
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={formSubmitHandler}
      >
        <TextField
          variant="standard"
          label="Name"
          sx={textFieldStyle}
          value={contactForm.nameInputValue}
          onChange={(e) => {
            onChangHandler('nameInput', e.target.value);
          }}
        />
        <Typography sx={errorTextStyle}>
          {contactForm.error.nameInputError === ''
            ? '\u00A0'
            : contactForm.error.nameInputError}
        </Typography>
        <TextField
          variant="standard"
          label="Email"
          sx={textFieldStyle}
          value={contactForm.emailInputValue}
          onChange={(e) => {
            onChangHandler('emailInput', e.target.value);
          }}
        />
        <Typography sx={errorTextStyle}>
          {contactForm.error.emailInputError === ''
            ? '\u00A0'
            : contactForm.error.emailInputError}
        </Typography>
        <TextField
          variant="standard"
          label="Contact Number"
          sx={textFieldStyle}
          value={contactForm.contactInputValue}
          onChange={(e) => {
            onChangHandler('contactInput', e.target.value);
          }}
        />
        <Typography sx={errorTextStyle}>
          {contactForm.error.contactInputError === ''
            ? '\u00A0'
            : contactForm.error.contactInputError}
        </Typography>
        <TextField
          variant="standard"
          label="Message"
          sx={textFieldStyle}
          value={contactForm.messageInputValue}
          onChange={(e) => {
            onChangHandler('messageInput', e.target.value);
          }}
        />{' '}
        <Typography sx={errorTextStyle}>
          {contactForm.error.messageInputError === ''
            ? '\u00A0'
            : contactForm.error.messageInputError}
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#539165', mt: 8 }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};
