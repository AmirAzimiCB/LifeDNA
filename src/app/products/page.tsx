import { getProductList } from "@/lib";
import SortSelect from "@/components/filter-sort/Sort";
import InfiniteScroll from "@/components/InfiniteScroll";
import FilterDrawer from "@/components/filter-sort/FilterDrawer";
import { getSortValuesFromParam, getFilterValuesFromParams } from "@/lib/utils";

export const metadata = {
  title: "Products List",
  description: "List of all LifeDNA's available products",
};

export default async function ShopAllPage({ searchParams }) {
  const { sort, ...clonedSearchParams } = searchParams;
  const { sortKey, reverse } = getSortValuesFromParam(sort);
  const appliedFilters = getFilterValuesFromParams(clonedSearchParams);
  const { pageInfo, products, filters } = await getProductList(
    sortKey,
    reverse,
    appliedFilters
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 text-[#383B42] font-bold border-b-[0.75px] border-[#CACACA] pb-4 md:mb-8 ">
        <h2 className="md:text-2xl text-xl">DNA-Targeted Products</h2>
        <h1 className="text-3xl">Supplements</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <FilterDrawer filters={filters} />
        {/* Main Content */}
        <main className="flex-1">
          <div className="lg:flex hidden justify-end items-center mb-6">
            <SortSelect />
          </div>
          <InfiniteScroll
            pageInfo={pageInfo}
            connection={products}
            info={{ sortKey, reverse, filters: appliedFilters }}
          />
        </main>
      </div>
    </div>
  );
}
