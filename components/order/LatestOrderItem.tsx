import { OrderWithProducts } from '@/src/types';

type LatestOrderItemsProps = {
  order: OrderWithProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemsProps) {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg mb-5">
      <p className="text-2xl font-bold text-slate-600">Cliente: {order.name}</p>
      <ul
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="flex py-6 text-lg">
            <span className="font-bold">({product.quantity})</span>
            <p>{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
