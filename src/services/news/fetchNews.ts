import { baseAxios } from "@/utils/baseAxios";
import { News } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

type FetchNewsResponse = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: News[];
};

export type Params = {
    owner?: string;
    search?: string;
    page?: number;
    is_seller_news?: string
};

export const fetchNews = async (arg?: Params) => {

    const { data } = await baseAxios.get<FetchNewsResponse>("/news/", {
        params: arg,
    });
    console.log(data);

    return data;
};

export const useFetchNews = (arg?: Params) => {
    const query = useQuery({
        queryFn: () => fetchNews(arg),
        queryKey: ["news", arg],
        initialData: null,
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
