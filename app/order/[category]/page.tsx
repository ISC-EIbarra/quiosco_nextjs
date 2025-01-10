import ProductCard from '@/components/products/ProductCard';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/Prisma';

type CategoryProps = {
  category: string;
};

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function OrderPage({
  params,
}: {
  params: Promise<CategoryProps>;
}) {
  const { category } = await params;

  const products = await getProducts(category);
  return (
    <>
      <Heading>Elige y personaliza tú pedido a continuación</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
