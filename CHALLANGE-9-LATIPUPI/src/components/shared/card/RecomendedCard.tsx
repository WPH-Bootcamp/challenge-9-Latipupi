import { Star } from "lucide-react";
import type { IRecommended } from "../../../types/recomended";
import { Link } from "react-router-dom";

interface MenuCardProps {
    recomended: IRecommended;
}

export const RecomendedCard: React.FC<MenuCardProps> = ({ recomended }) => {

    return (
        <Link to={`/resto/${recomended.id}`} className="flex-none group cursor-pointer">
        <div className="flex rounded-lg shadow-xs border border-gray-200 overflow-hidden p-2 m-2">
            <div className="flex items-center">
                <img
                    src={recomended.logo}
                    alt={recomended.name}
                    className="rounded-xl"
                    width={80}
                    height={80}
                />
            </div>
            <div className="p-2">
                <h3 className="text-lg font-semibold">{recomended.name}</h3>
                <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-400 text-xs font-semibold">
                        {recomended?.star?.toFixed(1)}
                    </span>
                </div>
                    <span className="text-gray-400 text-xs font-semibold">
                        {recomended?.place}
                    </span>
            </div>
        </div>
        </Link>
    );
}