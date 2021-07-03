import {
  Container,
  Image,
  Header,
  Paragraph,
  UserDetails,
  UserAvatar,
  UserName,
  Date,
  Share,
  Drawer,
  ArticleContent,
  UserAvatarContainer,
} from './ArticleElements';
import DrawerSrc from '../../images/drawers.jpg';
import AvatarSrc from '../../images/avatar-michelle.jpg';

export default function Article() {
  return (
    <Container>
      <Drawer>
        <Image src={DrawerSrc} alt='green furniture' />
      </Drawer>

      <ArticleContent>
        <Header>Shift the overall look and feel by adding these wonderful touches to furniture in your home</Header>
        <Paragraph>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve
          got some simple tips to help you make any room feel complete. Michelle Appleton 28 Jun 2020 Share
        </Paragraph>
        <UserDetails>
          <UserAvatarContainer>
            <UserAvatar src={AvatarSrc} alt='Michelle Appleton' />
          </UserAvatarContainer>
          <div>
            <UserName>Michelle Appleton</UserName>
            <Date>28 Jun 2020</Date>
          </div>
        </UserDetails>
        <Share />
      </ArticleContent>
    </Container>
  );
}
