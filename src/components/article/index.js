import {
  Container,
  Image,
  Header,
  Paragraph,
  UserDetails,
  UserAvatar,
  UserName,
  Date,
  Drawer,
  ArticleContent,
  UserAvatarContainer,
  Share,
  Card,
  ShareText,
  ShareIcon,
} from './ArticleElements';
import DrawerSrc from '../../images/drawers.jpg';
import AvatarSrc from '../../images/avatar-michelle.jpg';
import TooltipMenu from '../tooltip-menu';
import ShareIconSrc from '../../images/icon-share.svg';
import FacebookIconSrc from '../../images/icon-facebook.svg';
import TwitterIconSrc from '../../images/icon-twitter.svg';
import PinterestIconSrc from '../../images/icon-pinterest.svg';

export default function Article() {
  return (
    <Container>
      <Card>
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
        </ArticleContent>
      </Card>

      <Share>
        <TooltipMenu buttonIconSrc={ShareIconSrc}>
          <ShareText>share</ShareText>
          <ShareIcon src={FacebookIconSrc} />
          <ShareIcon src={TwitterIconSrc} />
          <ShareIcon src={PinterestIconSrc} />
        </TooltipMenu>
      </Share>
    </Container>
  );
}
