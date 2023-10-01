import { Menu, MenuItem } from '@mui/material';
import styled, { css } from 'styled-components';
import Doodles from '../../assets/icons/i-like-food.svg';
import Logotipo from '../../assets/icons/logotipo.svg';

const size = 96;

const sizeStyles = css`
  width: ${size}px;
  height: ${size}px;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const HeaderContainer = styled.header`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;

  height: ${size}px;

  background-color: ${({ theme }) => theme.colors.verde};
  background-image: url(${Doodles});
  background-size: 30%;
`;

export const LogoIconContainer = styled.div`
  ${sizeStyles};
`;

export const LogoIcon = styled.img`
  width:  ${size * (2 / 3)}px;
  height: ${size * (2 / 3)}px;
`;

LogoIcon.defaultProps = {
  src: Logotipo,
  alt: 'Logotipo da merenda',
};

export const UserContainer = styled.div`
  ${sizeStyles};
  cursor: pointer;
  flex-direction: row;

  > *:first-child {
    margin-right: 8px;
  }
`;

export const BackButtonContainer = styled.div`
  ${sizeStyles};
  cursor: pointer;
`;

export const CustomMenu = styled(Menu)`
  & .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    /* https://shadows.brumm.af/ */
    box-shadow:
      0px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0px 12.5px 10px rgba(0, 0, 0, 0.035),
      0px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0px 100px 80px rgba(0, 0, 0, 0.07);
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  & svg {
    margin-right: 16px;
  }

  & span {
    font-family: 'regular';
  }
`;