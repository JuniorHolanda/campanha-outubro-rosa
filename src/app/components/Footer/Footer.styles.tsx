"use client";

import styled from "styled-components";

export const Sfooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.medium1};
  width: 100%;
  /* height: 40vh; */
`;

export const Scontent = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  width: 100%;
  height: 90%;
`;

export const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
  flex: 1;

  h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSizes.titleSmall};
    color: ${({ theme }) => theme.colors.text};
    height: fit-content;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      min-height: 50px;
      gap: ${({ theme }) => theme.spacing.xs};
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: ${({ theme }) => theme.fontSizes.text};
      color: ${({ theme }) => theme.colors.text};

      a {
        display: flex;
        gap: ${({ theme }) => theme.spacing.sm};
        justify-content: center;
        align-items: center;


        span{
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${({theme}) => theme.colors.medium2};
            font-size: ${({theme}) => theme.fontSizes.textMedium};
        }
      }
    }
  }
`;

export const Ssignature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
  height: 10%;
  border-top: solid 2px ${({ theme }) => theme.colors.medium2};
  color: ${({theme}) => theme.colors.default1};

  address {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.text};
    font-weight: 300;

    a {
      font-weight: 600;
    }
  }
`;
