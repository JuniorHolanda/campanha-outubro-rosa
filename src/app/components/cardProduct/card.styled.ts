'use client';
import styled, { css } from 'styled-components';
import { fadeIn, fadeOut } from '@/styles/animation';
import Link from 'next/link';

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
  background-color: ${({ theme }) => theme.colors.gray100};
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
  overflow: hidden;
  z-index: 1;

  h1,
  p {
    color: ${({ theme }) => theme.colors.textDark};
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.textDark};
    text-align: center;
  }
`;

type StextureProps = {
  rotateTexture: number;
};

export const Stexture = styled.img<StextureProps>`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  object-position: center;
  transform: rotate(${({ rotateTexture }) => rotateTexture * 100}deg);
  width: 160%;
  opacity: 0.4;
  /* height: 100%; */
`;
export const Sbutton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.md};
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray100};
`;
