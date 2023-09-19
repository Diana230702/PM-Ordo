import { baseAxios } from "@/utils/baseAxios";
import { Order } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const fetchOrders = async () => {

    const { data } = await baseAxios.get<Order[]>("/orders/");
    console.log(data);

    return data;
};

export const useFetchOrders = () => {
    const query = useQuery({
        queryFn: () => fetchOrders(),
        queryKey: ["orders"],
        initialData: [],
    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
