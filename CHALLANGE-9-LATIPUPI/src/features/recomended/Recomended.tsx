import { Loader2 } from "lucide-react";
import { RecomendedCard } from "../../components/shared/card/RecomendedCard";
import { useRecomended } from "./hook";
import type { IRecommended } from "../../types/recomended";
import { useState } from "react";
import { Button } from "@/components/ui/button"

export const Recomended: React.FC = () => {

    const PAGE_SIZE = 5;
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const {
        data,
        isLoading,
        isError
    } = useRecomended();

    const handleLoadMore = (): void => {
        setVisibleCount((prev: number): number => prev + PAGE_SIZE);
    };

    if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-red-600" /></div>;
    if (isError) return <div className="text-center p-10 text-red-500">Gagal memuat data.</div>;

    console.log(data, "data recomended");

    return (
        <div className="md:mx-auto md:px-10">
            <h2 className="font-bold text-2xl p-2">Recommended</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
                {data?.recommendations
                    .slice(0, visibleCount)
                    .map((item: IRecommended) => (
                        <RecomendedCard key={item.id} recomended={item} />
                    ))}
            </div>
            {visibleCount < data?.recommendations.length && (
                <div className="flex justify-center">
                <Button onClick={handleLoadMore} className="text-center border border-gray-300 mt-4 px-4 py-4 rounded-full hover:bg-gray-100 my-10 w-30">
                    Load More
                </Button>
                </div>
            )}
        </div>
    );
};