import { baseAxios } from "@/utils/baseAxios";
import { User } from "@/utils/types";
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UpdateUserArg = {
    data: Partial<User>
}

const updateUser = async (arg: UpdateUserArg) => {

    const formData = new FormData();

    Object.entries(arg.data).forEach(([key, value]) => {
        const stringValue = value instanceof Blob ? value : value?.toString();
        if (!stringValue) return;
        console.log(key, stringValue, value);

        formData.append(key, stringValue);
    });

    const res = await baseAxios.patch<User>('/accounts/update_my_profile/', formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    );

    return res.data
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateUser,
        onSettled() {
            queryClient.invalidateQueries(["account"])
        }
    })

    return [mutation.mutateAsync, mutation] as const
}