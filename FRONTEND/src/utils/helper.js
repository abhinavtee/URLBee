import { redirect } from "@tanstack/react-router";
import { get_CurrentUser } from "../api/User-API.js";
import { login } from "../store/slice/authSlice.js";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;

        // Check current auth state first
        const currentAuthState = store.getState().auth;
        if (!currentAuthState.isAuthenticated) {
            throw new Error("Not authenticated");
        }

        return true;

    } catch (error) {
        return redirect({ to: "/auth" });
    }
}
