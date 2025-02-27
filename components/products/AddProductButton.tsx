'use client';

import { Product } from '@prisma/client';
import { useStore } from '@/src/store';

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-800 text-white uppercase w-full mt-5 p-3 font-bold cursor-pointer transition-colors"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}
