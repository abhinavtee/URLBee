import { redirect } from "@tanstack/react-router";
import { get_CurrentUser } from "../api/User-API.js";
import { login } from "../store/slice/authSlice.js";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;
        
        // Check current auth state first
        const currentAuthState = store.getState().auth;
        if (!currentAuthState.isAuthenticated) {
            console.log('Not authenticated in store');
            throw new Error("Not authenticated");
        }
        
        console.log('Auth check passed - user in store:', currentAuthState.user);
        return true;
        
    } catch (error) {
        console.log('Auth check failed:', error);
        return redirect({ to: "/auth" });  
    }
}
