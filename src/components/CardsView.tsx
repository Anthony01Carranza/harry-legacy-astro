import { useState } from "react";
import type { CardItem } from "../types/types";
import "./cardsView.css";

interface CardsViewProps {
    cards: CardItem[];
}

export default function CardsView( { cards }: CardsViewProps) {
    return (
        <div className="  ">
            <div className="flex gap-10 justify-center flex-row ">
                {cards.map((card, index) => {
                    return index < 3 ? <CardView key={index} {...card} /> : null;
                })}
            </div>
        </div> 
    );
}

function CardView({ title, description, image, icon1 , icon2 }: CardItem) {
    return (
        <div className="flex flex-col w-[390px] h-[900px]">
            <div className="relative bg-center w-[400px] h-[550px] " >
               
                <img  className="  imagedata  ml-10 mt-20 absolute w-[320px] h-auto"   src={image} alt="" />  
                
            
                <img className=" ml-[2.7rem] mt-[27rem]  w-14 h-auto  bg absolute z-10 " src={icon1} alt="" />
                <img className="  ml-[18.6rem] mt-9  w-14 h-auto  bg absolute z-10 " src={icon2} alt="" />
                <img className="absolute  w-full" src="/assets/game-info-frame-a.webp" alt="" />
                
            </div>
            <div className=" relative h-24 font-normal text-xl py-2 text-center text-yellow-50">{title}</div>
            <div className=" relative text-center text-yellow-50 ">{description}</div>
        </div>
    );
}
