export const cookieOptions = {
    httpOnly: true,
    secure: true, // Always true for cross-origin
    sameSite: "none", // Required for cross-origin cookies
    maxAge: 1000 * 60 * 60, //1 hour
}
