import { useParams } from "react-router-dom";
import { useRestoDetail } from "./hook";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

import RestoranHeader from "./RestoranHeader";
import { FoodCard } from "./FoodCard";
import ReviewCard from "./ReviewCard";



export const RestoDetail: React.FC = () => {

  const { id } = useParams();
  const { data, isLoading } = useRestoDetail(id || '');
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(data, "data detail resto");

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto p-5 mt-15 md:hidden">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {data?.data?.images?.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-3">
          {data?.data?.images?.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index
                  ? "bg-red-500"
                  : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-4  md:px-20 hidden mt-20 ">
        <div className="rounded-xl" >
          <img src={data?.data?.images[0]} alt="image1" className="rounded-xl  h-[470px] w-[651px] "/>
        </div>
        <div className="rounded-xl grid grid-cols-2 gap-1" >
          <div className="col-span-2 rounded-xl">
            <img src={data?.data?.images[1]} alt="image2" className="rounded-xl h-[302px] w-[535px]"/>
          </div>
              <img src={data?.data?.images[2]} alt="image3" className="rounded-xl h-[158px] w-[258.5px]"/>
              <img src={data?.data?.images[3]} alt="image4" className="rounded-xl h-[158px] w-[258.5px] -ml-5"/>
        </div>
      </div>

      <div className="px-4 mt-4 md:px-20 content-center mx-auto">
        <RestoranHeader
          name={data?.data?.name}
          averageRating={data?.data?.averageRating}
          place={data?.data?.place}
          logo={data?.data?.logo}
        />
      </div>

      <h3 className="font-bold text-3xl px-4 mt-5 mb-5 md:px-20">Menu</h3>
      <div className="flex items-center px-4 mt-2 md:px-20 gap-4">
        <Button className="p-3 rounded-2xl bg-red-300 text-red-700 font-semibold border border-red-700 cursor-pointer">
          All Menu
        </Button>
        <Button className="p-3 rounded-2xl cursor-pointer border ">
          Food
        </Button>
        <Button className="p-3 rounded-2xl cursor-pointer border">
          Drink
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-4 pb-15 md:px-20">

        {
          data?.data?.menus?.map((menu: any) => (
            <FoodCard
              key={menu.id}
              name={menu.foodName}
              price={menu.price}
              image={menu.image}
            />
          ))
        }
      </div>
      <div className="md:px-20">
        <h2 className="font-bold text-2xl px-4 mb-4">Reviews</h2>
        {
          data?.data?.reviews?.map((review: any) => (
            <ReviewCard
              key={review.id}
              name={review.user.name}
              date={review.createdAt}
              star={review.star}
              comment={review.comment}
              avatar={review.user.avatar}
            />
          ))
        }
      </div>
    </>
  );
}

