import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 50em;
  min-height: 19em;
`;

export const Card = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 0.5em;
`;

export const Section = styled.div`
  border: 1px solid green;
`;

export const Drawer = styled.div`
  width: 40%;
  display: flex;
`;

export const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
`;

export const ArticleContent = styled.div`
  position: relative;
  width: 60%;
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
