import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  position: relative;
  width: 50em;
  min-height: 19em;
  margin: 1em;
`;

export const Card = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  border-radius: 0.5em;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Drawer = styled.div`
  width: 40%;
  display: flex;

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  overflow: hidden;

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ArticleContent = styled.div`
  position: relative;
  padding: 2em;
  background: white;
`;

export const Header = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  color: ${({ theme }) => theme.darkGrayBlue};
`;

export const Paragraph = styled.div`
  color: ${({ theme }) => theme.desaturatedDarkBlue};
  margin-top: 1em;
`;

export const UserDetails = styled.div`
  display: flex;
  margin-top: 1.5em;
  align-items: center;
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  margin-right: 1em;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.darkGrayBlue};
  font-weight: bold;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.grayBlue};
  margin-top: 0.5em;
`;

export const Share = styled.div`
  position: absolute;
  bottom: 3em;
  right: 2em;

  @media (max-width: ${Breakpoints.mobile}) {
    right: 1em;
  }
`;

export const ShareText = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9em;
  color: ${({ theme }) => theme.desaturatedDarkBlue};
`;

export const ShareIcon = styled.img`
  margin-left: 0.9em;
`;
