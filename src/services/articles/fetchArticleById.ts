import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@/utils/baseAxios';
import { type Article } from '@/utils/types';

export type FetchArticleByIdArg = {
    id: string
}

export const fetchArticleById = async (arg: FetchArticleByIdArg) => {
    const { data } = await baseAxios.get<Article>(`/articles/${arg.id}`);
    return data;
}

export const useFetchArticleById = (arg: FetchArticleByIdArg, options: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryFn: () => fetchArticleById(arg),
        queryKey: ['articles', arg],
        ...options,
    });

    return [query.data, query] as const
}