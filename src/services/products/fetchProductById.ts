import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@/utils/baseAxios';
import { type Product } from '@/utils/types';

export type FetchProductByIdArg = {
    id: string
}

export const fetchNewsById = async (arg: FetchProductByIdArg) => {
    const { data } = await baseAxios.get<Product>(`/products/${arg.id}`);
    return data;
}

export const useFetchProductsById = (arg: FetchProductByIdArg, options: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryFn: () => fetchNewsById(arg),
        queryKey: ['products', arg],
        ...options,
    });

    return [query.data, query] as const
}