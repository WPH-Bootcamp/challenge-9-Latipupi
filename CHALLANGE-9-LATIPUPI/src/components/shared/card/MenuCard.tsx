import type { IMenuCard } from "../../../types/menu-card";

interface MenuCardProps {
  menu: IMenuCard;
}

export const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {

    return (
        <div className="w-40 flex flex-col items-center rounded-lg overflow-hidden">
            <img
                src={menu.imagePath}
                alt={menu.title}
                width={60}
                height={60}
            />
            <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{menu.title}</h3>
            </div>
        </div>
    );
}