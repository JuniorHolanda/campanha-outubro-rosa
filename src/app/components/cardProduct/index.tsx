"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  Sbutton,
  Scard,
  ScontainerImg,
  ScontainerSlider,
  Scontent,
} from "./card.styled";
import { CardProps } from "@/utils/interface";
import { useScreenWidth } from "@/utils/mediaQueries";

export default function Card({ product }: CardProps): JSX.Element {
  const width = useScreenWidth();

  const maxImgs = width < 1000 ? 1 : 3;


  const [hovered, setHovered] = useState<number | null>(null);

  const getFlex = (index: number, hovered: number | null) => {
    if (hovered === null) {
      // larguras padrão
      return [3, 2, 1][index];
    }
    if (hovered === index) {
      // quem está hover, aumenta
      return 4;
    } else {
      // os outros diminuem proporcionalmente
      return index === 0 ? 2 : index === 1 ? 1.5 : 1;
    }
  };

  const listImg = product.gallery;
  console.log(listImg);

  return (
    <Scard>
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
                <img src={item.img} alt={item.altImg} />
              </ScontainerImg>
            );
          })}
      </ScontainerSlider>
      <Scontent>
        <h1>{product.title}</h1>
        <p>{product.smallText}</p>
        <Sbutton href={`/produtos/${product._id}`}>
          <span>Ver Produto</span>
        </Sbutton>
      </Scontent>
    </Scard>
  );
}
