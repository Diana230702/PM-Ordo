import { useMutation } from '@tanstack/react-query';
import { User } from '@/utils/types';
import { baseAxios } from '@/utils/baseAxios';

type RegisterUserArg = {
    is_seller: boolean;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

const registerUser = async (arg: RegisterUserArg) => {
    const { data } = await baseAxios.post<User>("/accounts/register/", arg);
    return data
}

export const useRegisterUser = () => {

    const mutation = useMutation({
        mutationFn: registerUser,
    })

    return [mutation.mutateAsync, mutation] as const
}