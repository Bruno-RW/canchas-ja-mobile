
//! === === === BASE BACKEND URI === === === ?//
export const BACKEND_URI  = "https://canchas-ja-back.onrender.com";


//~ === === === AUTH ENDPOINTS === === === ~//
export const LOGIN_API_URL  = `${BACKEND_URI}/api/v1/login`;
export const SIGNIN_API_URL = `${BACKEND_URI}/api/v1/signin`;


//? === === === USER ENDPOINTS === === === ?//
export const USER_API_URL = `${BACKEND_URI}/api/v1/user`;


//? === === === PRODUCT ENDPOINTS === === === ?//
export const PRODUCT_API_URL = `${BACKEND_URI}/api/v1/product`;
export const PRODUCT_SPECIAL_DISCOUNT_API_URL = `${PRODUCT_API_URL}/special_discount`;
export const PRODUCT_BEST_RATED_API_URL = `${PRODUCT_API_URL}/best_rated`;
export const PRODUCT_NEAR_YOU_API_URL = `${PRODUCT_API_URL}/near_you`;