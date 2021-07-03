import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Container, Tooltip } from './TooltipMenuElements';

export default function TooltipMenu({ children, buttonIconSrc }) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Tooltip open={open}>{children}</Tooltip>
      <Button open={open} onClick={() => setOpen(!open)}>
        <img src={buttonIconSrc} />
      </Button>
    </Container>
  );
}

TooltipMenu.propTypes = {
  children: PropTypes.any.isRequired,
  buttonIconSrc: PropTypes.any.isRequired,
};
