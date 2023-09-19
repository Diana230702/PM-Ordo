import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@/utils/baseAxios';
import { type News } from '@/utils/types';

export type FetchNewsByIdArg = {
    id: string
}

export const fetchNewsById = async (arg: FetchNewsByIdArg) => {
    const { data } = await baseAxios.get<News>(`/news/${arg.id}`);
    return data;
}

export const useFetchNewsById = (arg: FetchNewsByIdArg, options: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryFn: () => fetchNewsById(arg),
        queryKey: ['news', arg],
        ...options,
    });

    return [query.data, query] as const
}