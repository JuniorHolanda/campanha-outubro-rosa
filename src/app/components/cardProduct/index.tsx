"use client";
import React, { JSX, useRef, useState } from "react";
import {
  SbuttonProduct,
  Scard,
  ScontainerImg,
  ScontainerSlider,
  Scontent,
  Sdialog,
  Ssection,
  SwrapperBtnClose,
} from "./card.styled";
import { CardProps } from "@/utils/interface";
import { useScreenWidth } from "@/utils/mediaQueries";
import { IoClose } from "react-icons/io5";

export default function Card({ product }: CardProps): JSX.Element {
  const width = useScreenWidth();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openPopup = () => {
    dialogRef.current?.showModal();
  };

  const closePopup = () => {
    dialogRef.current?.close();
  };


  //controla a quantidade de img por card, 3 pra desktop e 1 pra mobile
  const maxImgs = width === undefined ? 3 : width < 1000 ? 1 : 3;

  const [hovered, setHovered] = useState<number | null>(null);

  const getFlex = (index: number, hovered: number | null) => {
    if (hovered === null) {
      // larguras padrão
      return [4, 3, 2, 2][index];
    }
    if (hovered === index) {
      // quem está hover, aumenta
      return 5;
    } else {
      // os outros diminuem proporcionalmente
      return index === 0 ? 2 : index === 1 ? 1.5 : 1;
    }
  };

  const listImg = product.gallery;

  return (
    <Scard>
      <Sdialog ref={dialogRef}>
        <SwrapperBtnClose>
          <button onClick={() => closePopup()}><IoClose /></button>
        </SwrapperBtnClose>
        <Ssection>
            {listImg
              .map((item, index) => {
                const expand = getFlex(index, hovered);
                return (
                  <ScontainerImg
                    key={item._id}
                    $expand={expand}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src={item.img}
                      alt={item.altImg}
                    />
                  </ScontainerImg>
                );
            })}
        </Ssection>
        <SbuttonProduct href={`/produtos/${product._id}`}>
          <span>Ver Produto</span>
        </SbuttonProduct>
      </Sdialog>

      <ScontainerSlider>
        {listImg
          .filter((_, index) => index < maxImgs)
          .map((item, index) => {
            const expand = getFlex(index, hovered);

            return (
              <ScontainerImg
                key={item._id}
                $expand={expand}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  onClick={(e) => openPopup()}
                  src={item.img}
                  alt={item.altImg}
                />
              </ScontainerImg>
            );
          })}
      </ScontainerSlider>
      <Scontent>
        <h1>{product.title}</h1>
        <p>{product.smallText}</p>
        <SbuttonProduct href={`/produtos/${product._id}`}>
          <span>Ver Produto</span>
        </SbuttonProduct>
      </Scontent>
    </Scard>
  );
}
