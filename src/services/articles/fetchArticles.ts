import { baseAxios } from "@/utils/baseAxios";
import { Article } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

type FetchArticlesResponse = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Article[];
};

export type Params = {
    owner?: string;
    search?: string;
    page?: number;
};

export const fetchArticles = async (arg?: Params) => {

    const { data } = await baseAxios.get<FetchArticlesResponse>("/articles/", {
        params: arg,
    });
    console.log(data);

    return data;
};

export const useFetchArticles = (arg?: Params) => {
    const query = useQuery({
        queryFn: () => fetchArticles(arg),
        queryKey: ["articles", arg],
        initialData: null,
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
