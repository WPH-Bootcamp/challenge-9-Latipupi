import React from 'react';
import type { IHero } from './type';
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

interface HeroProps {
  hero: IHero;
}

export const Hero: React.FC<HeroProps> = ({ hero }) => {

  return (
    <div
      className="relative md:h-[100vh] h-[85vh] w-full flex flex-col justify-end md:justify-center bg-cover bg-center transition-all duration-500"

    >
      <img
        src={hero.backdropPath}
        alt={hero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* 1. Overlay Gradient Terpisah (Bottom-to-Top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* 2. Content Wrapper dengan z-10 agar berada di atas gradient */}
      <div className="relative z-10 px-6 md:px-12 md:pb-5 pb-40  space-y-4">

        {/* Judul lebih besar di desktop */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center">
          {hero.title}
        </h1>

        {/* Deskripsi dengan limit baris agar tidak kepanjangan */}
        <p className="text-white text-sm md:text-base line-clamp-3 md:line-clamp-none leading-relaxed text-center font-bold">
          {hero.description}
        </p>

        <div className="max-w-md mx-auto">
          <Field>
            <InputGroup className="border-white text-gray-700 bg-white rounded-full">
              <InputGroupInput className="text-gray-700" id="input-group-url" placeholder="Search restaurants, food and drink" />
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>
      </div>
    </div>
  );
};