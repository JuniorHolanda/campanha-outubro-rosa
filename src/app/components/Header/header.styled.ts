'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const Swrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xs};
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary} 10%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  img {
    width: 10vw;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 12vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 18vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 50vw;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
    letter-spacing: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.textBig};
    text-align: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.textLight};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.titleLarge};
      width: 100%;
    }
  }
`;
export const Slink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 800;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
  }
`;
