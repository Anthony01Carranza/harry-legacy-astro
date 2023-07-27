import { useState } from "react";
import type { CardItem } from "../types/types";
import "./cardsView.css";

interface CardsViewProps {
    cards: CardItem[];
}

export default function CardsView( { cards }: CardsViewProps) {
    return (
        <div className="  ">
            <div className="flex flex-row gap-16 xl:gap-16 justify-center  max-[840px]:flex-col 
            max-[430px]:gap-16max-[430px]:mt-20 max-[840px]:mt-24">{/*  max-[430px]:w-[37.5rem]  */}
                {cards.map((card, index) => {
                    return index < 3 ? <CardView key={index} {...card} /> : null;
                })}
            </div>
        </div> 
    );
}

function CardView({ title, description, image, icon1 , icon2 }: CardItem) {
    return (
        <div className="flex flex-col w-2/4 h-auto "> {/* w-[370px] h-[900px] max-[840px]:h-[780px] max-[430px]:h-[800px]  max-[840px]:mx-auto max-[430px]:gap-2 max-[840px]:mt-5   */}
            <div className="relative bg-center w-screen h-auto " > {/* w-[370px] h-[550px] */}
               
                <img  className="  imagedata xl:ml-[2.8rem] xl:mt-[5.3rem] ml-[2.1rem] mt-[4.5rem] absolute w-[300px] h-auto"   src={image} alt="" />  
                
            
                <img className=" xl:mt-[24.6rem] mt-[24.6rem]  w-1/6  bg absolute z-10 " src={icon1} alt="" /> {/* xl:ml-[2.4rem] ml-[2.4rem] w-14 h-auto  */}
                <img className="  ml-[17rem] mt-8 xl:ml-[17rem] xl:mt-8  w-14 h-auto  bg absolute z-10 " src={icon2} alt="" /> {/*  */}
                <img className="absolute  w-screen brightness-125" src="/assets/game-info-frame-a.webp" alt="" />
                
            </div>
            <div className=" relative max-[430px]:mt-0 max-[430px]:text-2xl max-[840px]:w-[22rem] max-[430px]:h-16 h-24 font-normal text-xl min-[440px]py-2 text-center text-yellow-500 max-[840px]:h-13 max-[840px]:text-2xl ">{title}</div>
            <div className=" relative text-center text-yellow-50 max-[430px]:mt-0 ">{description}</div>
        </div>
    );
}
