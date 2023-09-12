import { useCallback } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hook";
import { updateTokens } from "@/store/slices/auth.slice";

export const useLogout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const logout = useCallback(() => {
        dispatch(updateTokens({ accessToken: null, refreshToken: null }));
        router.push("/");
    }, [dispatch, router]);

    return logout;
};
