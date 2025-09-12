// 'use client'
import Card from "./components/cardProduct";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { ScontainerImg, Shome, Slink } from "./page.styled";
import { Product } from "@/utils/interface";
import sliderProduct from "@/app/data/slides.json"
import { GoBook } from "react-icons/go";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dia Dos médicos",
  description: "Confira nossas sugestões de brindes para o dia dos médicos",

  icons: {
    icon: '/favicon.png',
  },


  openGraph: {
    title: "Dia dos Médicos ",
    description: "Confira nossas sugestões de brindes para o Dia dos Médicos",
    type: 'website',
    url: 'catalogo.miriammomesso.com.br',
    images: [
      {
        url: 'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1757619568/Sem_T%C3%ADtulo-2_elfokp.jpg',
        width: 600,
        height: 600,
        alt: 'logo da empresa miriam momesso',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Dia dos Médicos",
    description: "Confira nossas sugestões para o dia dos médicos",
    images: [
      'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1757619568/Sem_T%C3%ADtulo-2_elfokp.jpg',
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default async function Home() {

  const keywords = [
    'Térmica Line Duplex',
    'Kit Médico',
    'Kit Higiene SP',
    'Necessaire Duo Zíper',
    'Mochila Fiji',
    'Mala Brid'
  ];



  const res = await fetch('https://back-end-catalogo-miriam-momesso.onrender.com/product');
  const data: Product[] = await res.json();

  const filteredData = data.filter(item =>
    keywords.some(keyword => item.title.includes(keyword))
  );

  return (
    <Shome>
      <Header
        title="Dia dos Médicos"
        text="Confira nossas sugestões de brindes"
      />
      <section>
        <Slider slides={sliderProduct} />
        <ScontainerImg>
          {
            filteredData.map((item, index) => (
              <Card key={`${item._id}-${index}`} product={item} i={index} />
            ))
          }
        </ScontainerImg>

        <Slink rel="noopener noreferrer" target="_blank" href={'http://catalogo.miriammomesso.com.br'}>
          <GoBook />
          Mais opções acesse nosso catálogo
        </Slink>
      </section>
    </Shome>
  );
}
