import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSearchClick = () => {
   setShowSearch(!showSearch);
  }
  

  return (
    <nav className={`fixed absolute top-0 left-0 w-full z-50 flex justify-between items-center px-3 py-6 md:px-12 ${isScrolled 
        ? 'bg-white backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-transparent' 
      }`}>
      <div className="flex items-center gap-2">
        {
          isScrolled ? 
          <>
          <img src="/logo-merah.svg" alt="Logo" className="cursor-pointer" />
          <h1 className='text-black text-2xl font-bold'>Poody</h1>
        </> :
        <>
          <img src="/logo-mobile.svg" alt="Logo" className="cursor-pointer" />
          <h1 className='text-white text-2xl font-bold'>Poody</h1>
        </>
        }
        
      </div>
      
      <div className="flex gap-2 text-white ">
        {isScrolled ? 
          <img src="/bag-2.svg" alt="Bag" /> :
           <img src="/bag.svg" alt="Bag"/>
        }
       <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                            className="grayscale"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
         
      </div>
    </nav>
  );
};

export default Navbar;