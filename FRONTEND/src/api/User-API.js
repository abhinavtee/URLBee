import axiosInstance from "../utils/axios-Instance";

export const registerUser = async (name, email, password) => {
    try {
        const response = await axiosInstance.post("/auth/register", { name, email, password });
        return response.data; 
    } catch (error) {
        console.error('Register API error:', error);
        throw error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axiosInstance.post("/auth/login", { email, password });
        return response.data; 
    } catch (error) {
        console.error('Login API error:', error);
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.get("/auth/logout");
        return response.data;
    } catch (error) {
        console.error('Logout API error:', error);
        throw error;
    }
}

export const get_CurrentUser = async () => {
    try {
        const response = await axiosInstance.get("/auth/me");
        return response.data; 
    } catch (error) {
        console.error('Get current user API error:', error);
        throw error;
    }
};

export const getAllUserUrls = async () => {
    try {
        const response = await axiosInstance.post("/user/urls");
        return response.data;
    } catch (error) {
        console.error('Get user URLs API error:', error);
        if (error.response?.status === 401) {
            console.error('Authentication failed - user may need to login again');
        }
        throw error;
    }
}
