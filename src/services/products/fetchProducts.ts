import { baseAxios } from "@/utils/baseAxios";
import { Product } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

type FetchProductsResponse = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Product[];
};

export type Params = {
    min_price?: number;
    max_price?: number;
    search?: string;
    page?: number;

};

export const fetchProducts = async (arg?: Params) => {

    const { data } = await baseAxios.get<FetchProductsResponse>("/products/", {
        params: arg,
    });
    console.log(data);

    return data;
};

export const useFetchProducts = (arg?: Params) => {
    const query = useQuery({
        queryFn: () => fetchProducts(arg),
        queryKey: ["products", arg],
        initialData: null,
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
