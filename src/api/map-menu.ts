/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProp } from '../components/MenuLink';
import { PageData } from '../templates/Home';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  // const srcImg = menu.logo_imagem;
  const {
    open_in_new_tab: newTab = false,
    logo: text = '',
    logo_link: link = '',
    menu_link: links = [],
  } = menu;

  const srcImg = menu.logo && menu.logo_imagem.url ? menu.logo_imagem.url : '';

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProp[] => {
  return links.map((item): MenuLinkProp => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
