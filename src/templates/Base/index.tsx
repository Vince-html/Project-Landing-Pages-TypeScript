import { Container } from './style';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProp } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProp[];
  footerHtml: string;
  logoData: LogoLinkProps;
};

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};
