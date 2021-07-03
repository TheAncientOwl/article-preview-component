import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.div(
  ({ open, theme }) => css`
    display: inline;
    padding: 0.4em;
    border-radius: 50%;
    background: ${open ? theme.darkGrayBlue : theme.lightGrayBlue};
    cursor: pointer;
    transition: 50ms linear;

    &:hover {
      background: ${({ theme }) => theme.darkGrayBlue};
      transition: 50ms linear;
    }
  `
);

export const Tooltip = styled.div(
  ({ open }) => css`
    position: absolute;
    display: flex;
    align-items: center;

    font-size: 0.85em;
    padding: 0.9em 1.8em;

    top: -5em;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.6em;

    visibility: ${open ? 'visible' : 'hidden'};
    background: ${({ theme }) => theme.darkGrayBlue};

    &::after {
      content: ' ';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 0.7em solid;
      border-color: ${({ theme }) => theme.darkGrayBlue} transparent transparent transparent;
    }
  `
);
