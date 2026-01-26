import { useState } from "react";

type Props = {
  name: string;
  price: number;
  image: string;
};

export function FoodCard({ name, price, image }: Props) {
  const [qty, setQty] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-3">
      <img
        src={image}
        className="w-full h-32 object-cover rounded-lg"
      />

      <h3 className="mt-2 font-medium">{name}</h3>
      <p className="font-semibold">
        Rp{price.toLocaleString("id-ID")}
      </p>

      {/* ACTION */}
      <div className="mt-3">
        {qty === 0 ? (
          <button
            onClick={() => setQty(1)}
            className="bg-red-500 text-white w-full rounded-full py-2"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between border rounded-full px-3 py-1">
            <button
              onClick={() => setQty(qty - 1)}
              className="text-lg font-bold"
            >
              −
            </button>

            <span className="font-medium">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="text-lg font-bold text-red-500"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
