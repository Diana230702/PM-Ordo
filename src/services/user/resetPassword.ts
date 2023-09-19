import { baseAxios } from "@/utils/baseAxios";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type ResetPassArg = {
    email: string
}

export let emailsend = false

const resetPassword = async (arg: ResetPassArg) => {

    const { data } = await baseAxios.post<string>('/accounts/password_reset/', arg);
    emailsend = true
    return data
};

export const useResetPassword = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: resetPassword,
        onSettled() {
            queryClient.invalidateQueries(["password"])
        },
    })

    return [mutation.mutateAsync, mutation] as const

}