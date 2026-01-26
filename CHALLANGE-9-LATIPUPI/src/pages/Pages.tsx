// src/pages/HomePage.tsx
import React, { use } from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Hero } from '../features/hero/Hero';
import { Menu } from '../features/menu/Menu';
import { Recomended } from '../features/recomended/Recomended';
import Footer from '../components/shared/footer/Footer';
import { useAppSelector } from '../lib/redux/hooks/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Pages: React.FC = () => {
  const dummyMovie = {
    id: 1,
    title: "Explore Culinary Experiences",
    description: "Search and refine your choice to discover the perfect restaurant.",
    backdropPath: "/hero.svg",
    posterPath: "/hero.svg"
  };

  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated  && token == null) {
        navigate("login", { replace: true });
    }
  }, [isAuthenticated, token, navigate]);

  return (
    <>
      <Hero hero={dummyMovie} />
      <Menu />
      <Recomended />
    </>
  );
};