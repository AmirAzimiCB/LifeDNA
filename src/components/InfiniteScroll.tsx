"use client";
import Spinner from "./ui/Spinner";
import ProductCard from "./product/ProductCard";
import { useSearchParams } from "next/navigation";
import { loadMoreData } from "@/app/products/actions";
import { useInView } from "react-intersection-observer";
import { useRef, useMemo, useState, useEffect, useTransition } from "react";

const InfiniteScroll = ({ info, connection, pageInfo }) => {
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const [data, setData] = useState(connection);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const [paginationDetails, setPaginationDetails] = useState(pageInfo);
  const paramsClone = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const paramsRef = useRef(paramsClone.toString());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    if (paramsClone.toString() !== paramsRef.current) {
      // we set the paramsRef to the latest searchParam value
      paramsRef.current = paramsClone.toString();
      // in case of the search params change (when user changes the sorting params or filter params) we reset the pagination and show the first N products corresponding to the result of the new "filter/sort", then the pagination can work properly for the new result
      setData(connection);
      // we also update the new pageInfo to the latest result
      setPaginationDetails(pageInfo);
    }
  }, [paramsClone, connection, pageInfo]);

  useEffect(() => {
    if (inView) {
      startTransition(async () => {
        // params is an object which contains the necessary data for perform the fetching function
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = await loadMoreData({
          ...info,
          cursor: paginationDetails.endCursor,
        });
        if (result.error) {
          // here we handle the error from the server action by triggering the error boundary
          // Trigger the error boundary in the root error.js
          throw new Error(result.error.toString());
        }
        setPaginationDetails(result.pageInfo);
        setData((prev) => [...(prev?.length ? prev : []), ...result.products]);
      });
    }
  }, [inView, paginationDetails.endCursor, info]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product, index) => (
          <ProductCard product={product} key={`product-card-${index}`} />
        ))}
      </div>
      {paginationDetails.hasNextPage && (
        <div ref={ref} className="p-8">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
