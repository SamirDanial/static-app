"use client";

import { useState } from "react";
import logo from "../assets/sGroup-3.png";
import teamwork2 from "../assets/teamwork2.jpg";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [carouselSettings, setCarouselSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
  });

  // Array of images for the carousel
  const carouselImages = [
    "/party.jpg",
    "/party2.jpg",
    "/happy-people.png",
    // Add more image paths as needed
  ];

  return (
    <main className="flex bg-white flex-col h-full w-full overflow-hidden mb-10">
      <div
        id="navbar"
        className="flex z-50 flex-row w-fu lg:w-[1200px] bg-white fixed left-0 right-0 lg:mx-auto shadow-lg"
      >
        <div id="logo" className="ml-9 flex-1 py-[12px]">
          <Image
            src={logo}
            className="w-[50px] lg:w-[75px] h-[50px] lg:h-[75px]"
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-row w-[250px]">
          <div
            id="email"
            className="bg-purple-100 flex-1 flex flex-col justify-center items-center"
          >
            <AiOutlineMail size={24} />
          </div>
          <div
            id="phone"
            className="bg-yellow-300 flex-1 flex flex-col justify-center items-center"
          >
            <AiOutlinePhone size={24} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="lg:flex-1 h-full w-full">
          <div
            className="h-screen relative"
            style={{
              backgroundImage: 'url("/party.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black w-full h-[200px] lg:w-[600px] absolute bottom-0 right-0 flex flex-col pl-10 pt-10">
              <p className="text-white font-sans text-[20px] font-bold">
                DAS IST PROMOPRO
              </p>
              <p className="text-white pt-3">
                In der ipsum dolor sit amet consectetur adipisic. unde.
              </p>
              <p className="text-white">Promopro dolor sit amet consectetur</p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisic. unde. un
                realistoc
              </p>
            </div>
          </div>
          <div className="h-[800px] flex flex-col justify-center items-center">
            <div className="flex items-center flex-col lg:flex-row gap-8">
              <div className="h-[5px] w-[100px] bg-orange-300" />
              <p className="text-[45px] pl-5 lg:pl-0 font-bold leading-snug">
                Der Puls der Technoszene
              </p>
            </div>
            <div className="max-w-[700px] lg:pl-6 flex flex-col items-center">
              <p className="pl-5 lg:pl-28">
                Unsere Mission ist es, einzigartige Festivalmomente zu schaffen,
                die die Liebe zur elektronischen Musik teilen. Mit einem Team
                leidenschaftlicher Techno-Enthusiasten sind wir der Antrieb
                hinter unvergesslichen Events, welche allen Beteiligten ein
                gelungenes Erlebnis garantieren.
              </p>
              <Image
                src={teamwork2}
                className="w-[600px] lg:pl-[75px] mt-5 h-[350px]"
                alt="nice team work"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full text-white bg-pink-300">
          <div className="h-[730px] flex flex-col justify-center">
            <div className="flex pl-5 lg:pl-32 flex-col items-start text-[50px] font-bold leading-snug">
              <p>Festival-</p>
              <p>Planung mit</p>
              <p>PromoPro.</p>
            </div>

            <div className="text-[30px] pl-5 lg:pl-32 pt-4">
              <p>Für ein rundum gelungenes Techno-Erlebnis.</p>
            </div>

            <div className=" pl-32">
              <div className=" bg-white mt-10 w-[120px] h-[40px] flex flex-col items-center justify-center rounded-[5px]">
                <p className="text-black font-semibold">KONTAKT</p>
              </div>
            </div>
          </div>
          <div
            className="w-full h-[1500px]"
            style={{
              backgroundImage: 'url("/party2.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      <div className="h-[350px] w-full">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 mt-20">
          <div className="h-[5px] w-[100px] bg-orange-300" />
          <div>
            <p className="text-[45px] font-bold">
              Rückblick auf elektrisierende Nächte:
            </p>
          </div>
        </div>
        <div id="carusal" className="mt-4 px-2">
          <Slider {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="h-[150px] w-[150px] pl-3">
                <img
                  src={image}
                  alt={`carousel-image-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-[200px] lg:mt-20 w-full h-[350px] flex flex-col lg:flex-row">
        <div className="flex-1">
          <p className="pl-5 lg:pl-[400px] text-[30px] text-gray-500">
            Wir sind stets auf der Suche nach kreativen und engagierten Partnern
            – sei es auf oder hinter der Bühne. Nehmen Sie gerne Kontakt mit uns
            auf.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center pt-10 mb-10">
          <div className="bg-orange-300 px-5 py-3 mb-[200px] rounded-md">
            <p className="text-white font-bold">KONTAKT AUFNEHMEN</p>
          </div>
        </div>
      </div>
      <div className="mt-4" />
    </main>
  );
}
