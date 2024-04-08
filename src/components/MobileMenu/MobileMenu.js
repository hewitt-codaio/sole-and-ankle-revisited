/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS, WEIGHTS} from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <BackgroundMask isOpen={isOpen} onDismiss={onDismiss}>
      <Background>
          <CloseButton onClick={onDismiss}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Header />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
      </Background>
    </BackgroundMask>
  );
};

const BackgroundMask = styled(DialogOverlay)`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #60646CCC;
`;

const Background = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  width: 300px;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
    position: fixed;
    top: 10px;
    right: 0;
    padding: 16px;
`;

const Nav = styled.div`
    display: flex;
  flex-direction: column;
  gap: 1rem;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  color: ${COLORS.gray['900']};
  text-decoration: none;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

const Header = styled.div`
    flex: 1;
`;

const Footer = styled.div`
    flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 32px;
  gap: ${14 / 16}rem;
`;

const FooterLink = styled.div`
  font-weight: 500;
  font-size: ${14 / 16}rem;
  text-decoration: none;
  color: ${COLORS.gray['700']}
`;

export default MobileMenu;
