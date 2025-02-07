import ProductFormSearch from '@/components/products/ProductFormSearch';
import ProductTable from '@/components/products/ProductTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/Prisma';

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive',
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);
  return (
    <>
      <Heading>Resultados de búsqueda: {searchParams.search}</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5 ">
        <ProductFormSearch />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-lg text-center">No hay resultados</p>
      )}
    </>
  );
}
