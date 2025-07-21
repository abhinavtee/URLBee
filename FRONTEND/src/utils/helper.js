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
        
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: get_CurrentUser,
        });
        
        if(!user) {
            throw new Error("No user found");
        }
        
        store.dispatch(login(user));
        return true;
    }
    catch (error) {
        console.log('Auth check failed:', error);
        return redirect({ to: "/auth" });  
    }
}
