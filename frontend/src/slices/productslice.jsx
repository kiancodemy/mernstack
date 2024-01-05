import { PRODUCTS_URL } from "../constants";
import { Apislice } from "./apislices";
export const productslice = Apislice.injectEndpoints({
  endpoints: (builder) => ({
    getproducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getprodctdetails: builder.query({
      query: (ID) => ({
        url: `${PRODUCTS_URL}/${ID}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetproductsQuery, useGetprodctdetailsQuery } = productslice;
