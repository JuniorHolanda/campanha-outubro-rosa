'use client';
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface PropsScontainerImg {
  $expand: number;
}

export const Scard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.default2};
  border-radius: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`;

export const ScontainerSlider = styled.section`
  display: flex;
  flex-direction: row;
  height: 60%;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`;

export const ScontainerImg = styled.div<{ $expand: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${({ $expand }) => $expand};
  height: 100%;
  min-width: 100px;
  border-radius: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #f3f3f3ff;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }
`;

export const Scontent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.background2};
  overflow: hidden;
  z-index: 1;
  border-radius: ${({ theme }) => theme.spacing.md};

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: 100;
    font-style: italic;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }
`;

type StextureProps = {
  rotateTexture: number;
};

export const Sbutton = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.text};
  padding: ${({ theme }) => theme.spacing.sm};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    height: 100%;
    width: fit-content;
    color: ${({ theme }) => theme.colors.default2};
    font-size: ${({ theme }) => theme.fontSizes.text};
    border-radius: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.btn};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.btnHover};
    }
  }
`;
