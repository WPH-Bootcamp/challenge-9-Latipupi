import { MenuCard } from "../../components/shared/card/MenuCard";

export const Menu: React.FC = () => {
    const dummyCard = [
        {
            id: 1,
            title: "All Restaurant",
            imagePath: "/all-restoran.svg"
        },
        {
            id: 2,
            title: "Nearby",
            imagePath: "/nearby.svg"
        },
        {
            id: 3,
            title: "Discounts",
            imagePath: "/discount.svg"
        },
        {
            id: 4,
            title: "Best Seller",
            imagePath: "/best-seller.svg"
        },
        {
            id: 5,
            title: "Delivery",
            imagePath: "/delivery.svg"
        },
        {
            id: 6,
            title: "Lunch",
            imagePath: "/lunch.svg"
        },
    ]

    return (
        <div className="md:px-10">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-10 mr-10">
                {
                    dummyCard.map((menu) => (
                            <MenuCard key={menu.id} menu={menu} />
                    ))
                }
            </div>
        </div>
    );
};