export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Allow cross-origin
    maxAge: 1000 * 60 * 60, //1 hour
}
