import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

export const restoApi = createApi({
    reducerPath: 'restoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base_url, 
    }),
    endpoints: (builder) => ({
        getCategoryData: builder.query({
            query: () => 'categoryData.json',
        }),
         getProductData: builder.query({
            query: () => 'productData.json',
        }),
        getImage: builder.query({
            query: () => "image.json",
        }),
        putImage: builder.mutation({
            query: (image) => ({
                url: 'image.json',
                method: "PUT",
                body: image,
            })
        })
    })
});




export const { useGetCategoryDataQuery , useGetProductDataQuery, useGetImageQuery, usePutImageMutation } = restoApi;

