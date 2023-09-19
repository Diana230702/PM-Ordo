import { baseAxios } from "@/utils/baseAxios";
import { Category } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const fetchCategories = async () => {

    const { data } = await baseAxios.get<Category[]>("/categories/");
    console.log(data);

    return data;
};

export const useFetchCategories = () => {
    const query = useQuery({
        queryFn: () => fetchCategories(),
        queryKey: ["categories"],
        initialData: [],
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
