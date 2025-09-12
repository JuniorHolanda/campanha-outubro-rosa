'use client';
import styled, { css } from 'styled-components';
import { fadeIn, fadeOut } from '@/styles/animation';
import Link from 'next/link';
import { Span } from 'next/dist/trace';

interface ImgProps {
  $isHovered: boolean;
}

export const Scard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default2};
  border-radius: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`;

export const ScontainerImg = styled.div<ImgProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100%;
  cursor: pointer;
  overflow: hidden;

  img {
    opacity: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    animation: ${(props: ImgProps) =>
      props.$isHovered
        ? css`
            ${fadeIn} 0.7s ease-in-out forwards
          `
        : css`
            ${fadeOut} 0.7s ease-in-out forwards
          `};
  }
`;

export const Scontent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 30%;
  background-color: ${({ theme }) => theme.colors.medium2};
  overflow: hidden;
  z-index: 1;

  h1{
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

type StextureProps = {
  rotateTexture: number;
};

export const Sbutton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.md};
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.default2};
  font-size: ${({theme}) => theme.fontSizes.text};
  border: solid red;

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid green;
    height: 100%;
    width: auto;
    font-family: ${({theme}) => theme.fonts.text};
    font-weight: 400
    ;
  }
`;
export const Sicon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.md};
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.default2};
  font-size: ${({theme}) => theme.fontSizes.text};
  height: 100%;
  width: fit-content;
  border: solid gold;
`;
