import { useAppSelector } from "@/store/hook";
import { baseAxios } from "@/utils/baseAxios";
import { User } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const fetchUser = async () => {
    const { data } = await baseAxios.get<User>(`/accounts/user-profiles/`);
    return data;
};

export const useFetchUser = () => {

    const accessToken = useAppSelector(state => state.auth.accessToken)

    const query = useQuery({
        queryFn: fetchUser,
        queryKey: ["account", accessToken],
        initialData: null,
        enabled: Boolean(accessToken)

    }); //usequery вызовет функцию, получит данные и вернет

    return [query.data, query] as const;
};
