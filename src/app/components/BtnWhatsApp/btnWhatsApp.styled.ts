'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

export const Slink = styled(Link)`
  position: fixed;
  z-index: 100;
  display: flex;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  border-radius: 300px;
  transition: all.3s ease-in-out;
  background-color: #cfcfcf3b;
  color: ${({ theme }) => theme.colors.medium2};

  &:hover {
    background-color: #ffffff54;
    color: ${({ theme }) => theme.colors.btnHover};
    color: #3ba53bff;
  }
`;

export const Sbtn = styled(FaWhatsapp)`
  display: flex;
  width: auto;
  height: auto;
  font-size: ${({ theme }) => theme.fontSizes.textBig};
  padding: 10px;
`;
