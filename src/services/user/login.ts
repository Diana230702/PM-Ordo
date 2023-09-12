import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseAxios } from "@/utils/baseAxios";
import { storageSetItem } from "@/utils/storage";
import { useAppDispatch } from "@/store/hook";
import { updateTokens } from "@/store/slices/auth.slice";

type loginUserArg = {
    email: string;
    password: string;
};

const loginUser = async (arg: loginUserArg) => {
    const { data } = await baseAxios.post<{ access: string; refresh: string }>(
        "/accounts/login/",
        arg,
    );

    return data;
};

export const useLoginUser = () => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess(data) {
            dispatch(updateTokens({ accessToken: data.access, refreshToken: data.refresh }));
        },
        onSettled() {
            queryClient.invalidateQueries({
                predicate(query) {
                    return query.queryKey?.[0] === "account";
                },
            })
        },
    });

    return [mutation.mutateAsync, mutation] as const;
};