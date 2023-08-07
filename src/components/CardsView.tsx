import { useState } from "react";
import type { CardItem } from "../types/types";
import "./cardsView.css";

interface CardsViewProps {
  cards: CardItem[];
}

export default function CardsView({ cards }: CardsViewProps) {
  return (
    
      <div
        className="flex flex-row gap-16 xl:gap-16 justify-center  max-[840px]:flex-col 
         max-[440px]:gap-16 max-[440px]:mt-52 max-[440px]:flex-col max-[440px]:h-[105rem] max-[440px]:w-full  max-[840px]:mt-24 min-[841px]:w-full  "
      >
        {/*    */}
        {cards.map((card, index) => {
          return index < 3 ? <CardView key={index} {...card} /> : null;
        })}
      </div>
    
  );
}

function CardView({ title, description, image, icon1, icon2 }: CardItem) {
  return (
    <div className="flex flex-col w-full min-[841px]:w-[14rem] min-[841px]:h-[40rem] max-[440px]:h-[900px] max-[440px]:w-full max-[440px]:gap-2   max-[840px]:h-[780px]  max-[840px]:mt-5 min-[841px]:mt-20  ml-0  ">
      {" "}
      {/*   */}
      <div className="flex flex-col justify-center relative bg-center w-[390px] max-[440px]:w-[20rem]  h-[550px] max-[840px]:mx-auto max-[440px]:mx-auto min-[841px]:w-[15rem] min-[841px]:h-[25rem]">
        {" "}
        {/* */}
        <img
          className="imagedata min-[841px]:w-[12rem] min-[841px]:ml-[1.5rem]  max-[840px]:w-[310px] max-[840px]:ml-[2.5rem] max-[840px]:mt-[0.3rem] xl:ml-[2.8rem] xl:mt-[5.3rem] max-[440px]:ml-[2.2rem] max-[440px]:mt-[0.3rem] absolute max-[440px]:w-[250px] h-auto"
          src={image}
          alt=""
        />
        <img
          className=" min-[841px]:mt-[14.6rem] min-[841px]:ml-[1.5rem] max-[840px]:mt-[23.6rem]  max-[840px]:ml-[2.2rem] max-[440px]:mt-[19.5rem] max-[440px]:ml-[1.9rem]  w-1/6  bg absolute z-10 "
          src={icon1}
          alt=""
        />{" "}
        {/* xl:ml-[2.4rem] ml-[2.4rem] w-14 h-auto  */}
        <img
          className=" min-[841px]:w-1/6 min-[841px]:-mt-[14.5rem]  min-[841px]:ml-[11rem] max-[840px]:-mt-[24.5rem]  max-[840px]:ml-[18rem] xl:ml-[16rem]  max-[440px]:-mt-[20rem] max-[440px]:ml-[14.5rem] w-14 h-auto  bg absolute z-10 "
          src={icon2}
          alt=""
        />{" "}
        {/*  */}
        <img
          className="absolute max-[440px]:w-[20rem]  brightness-125"
          src="/assets/game-info-frame-a.webp"
          alt=""
        />
      </div>
      <div className=" min-[841px]:h-[3rem] relative max-[440px]:mt-0 max-[440px]:text-2xl max-[440px]:w-full max-[840px]:w-[22rem] max-[440px]:h-16  font-normal text-xl min-[440px]py-2 text-center text-yellow-500 max-[840px]:mx-auto max-[840px]:h-13 max-[840px]:text-2xl ">
        {title}
      </div>
      <div className=" min-[841px]:mt-12 min-[841px]:h-10 relative text-center text-yellow-50 max-[440px]:mt-0 ">
        {description}
      </div>
    </div>
  );
}
