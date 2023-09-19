import { baseAxios } from "@/utils/baseAxios";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type ResetPassConfirmArg = {
    password: string,
    token: string;
}

const resetPassConfirm = async (arg: ResetPassConfirmArg) => {

    const { data } = await baseAxios.post<ResetPassConfirmArg>('/account/password_reset/confirm/', arg);
    console.log(data);
    return data

}

export const useResetPassConfirm = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: resetPassConfirm,
        onSettled() {
            queryClient.invalidateQueries(["password"])
        },
    })

    return [mutation.mutateAsync, mutation] as const
};