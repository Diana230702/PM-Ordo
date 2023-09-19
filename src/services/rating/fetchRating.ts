import { baseAxios } from "@/utils/baseAxios";
import { Rating } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const fetchRating = async () => {

    const { data } = await baseAxios.get<Rating[]>("/rating/");
    console.log(data);

    return data;
};

export const useFetchRating = () => {
    const query = useQuery({
        queryFn: () => fetchRating(),
        queryKey: ["rating"],
        initialData: [],
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
