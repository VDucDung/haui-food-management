import { cloneElement, forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import styles from './ConfirmModal.module.scss';

const cx = classNames.bind(styles);

const theme = createTheme({
  palette: {
    delete: {
      light: '#ef5350',
      main: '#ef5350',
      dark: '#f44336',
      contrastText: '#fff',
    },
    success: {
      light: '#66bb6a',
      main: '#66bb6a',
      dark: '#4caf50',
      contrastText: '#fff',
    },
    exit: {
      light: '#fb8c00',
      main: '#fb8c00',
      dark: '#f57c00',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: 'var(--font-family)',
  },
});

const Fade = forwardRef(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
};

export default function ConfirmModal({ title, desc, type, isOpen, closeModal, handle }) {
  const { t } = useTranslation();

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2" sx={{ fontSize: '2.2rem' }}>
            {title}
          </Typography>
          <Typography id="spring-modal-description" sx={{ mt: 2, color: '#a8afb9' }}>
            {desc}
          </Typography>
          <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Button
                variant="contained"
                color={type === t('button.btn01') ? 'delete' : 'success'}
                onClick={handle}
                sx={{ mt: 2, p: 1 }}
              >
                {type}
              </Button>
              <Button variant="outlined" color="exit" onClick={closeModal} sx={{ mt: 2, ml: 2 }}>
                {t('button.btn04')}
              </Button>
            </div>
          </ThemeProvider>
        </Box>
      </Fade>
    </Modal>
  );
}
