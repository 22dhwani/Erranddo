// import React, { useState, useContext } from "react";
// import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { UserData } from "../models/data";

// //auth response type declaration
// type AuthResponseType = {
//   data?: UserData;
//   login: (formData: FormData) => void;
//   logout: () => void;
//   forgotPassword: (formData: FormData) => void;
//   resetPassword: (formData: FormData) => void;

//   isLoggedIn: boolean;
//   isLoading: boolean;
//   error: string;
// };

// //auth context initialization
// export const AuthContext = createContext<AuthResponseType>({
//   login: (data) => {
//     console.log(data);
//   },
//   logout: () => {
//     console.log();
//   },
//   forgotPassword: (d) => {
//     console.log(d);
//   },
//   resetPassword: (d) => {
//     console.log(d);
//   },
//   isLoggedIn: false,
//   isLoading: false,
//   error: "",
// });

// const AuthContextProvider = (props: { children: React.ReactNode }) => {
//   const initialToken = localStorage.getItem("token");
//   const [data, setData] = useState(
//     initialToken ? JSON.parse(initialToken) : undefined
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(initialToken ? true : false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();
//   //login
//   const login = async (formData: FormData) => {
//     setIsLoading(true);
//     setError("");
//     const res = await fetch("http://127.0.0.1:8000/api/v1/user/login", {
//       method: "POST",
//       body: formData,
//     });

//     if (res.status === 200) {
//       setIsLoading(false);
//       const data: UserData = await res.json();

//       if (data.status === "0") {
//         setError(data.message);
//       } else {
//         if (data?.data?.role === "ADMIN") {
//           setData(data);
//           setIsLoggedIn(true);
//           localStorage.setItem("isLoggedIn", "true");
//           localStorage.setItem("token", JSON.stringify(data));
//           navigate("/home");
//           toast.success("Welcome to Yorjo !");
//           setError("");
//         } else {
//           toast.error("Only admin can login into the panel");
//         }
//       }
//     } else {
//       const data: any = await res.json();
//       setIsLoading(false);
//       setError(data.message);
//     }
//   };

//   //forgot-password
//   const forgotPassword = async (formData: FormData) => {
//     setError("");
//     setIsLoading(true);

//     const res = await fetch("http://127.0.0.1:8000/api/v1/forgot-password", {
//       method: "POST",
//       body: formData,
//     });
//     if (res.status === 200) {
//       setError("");
//       setTimeout(() => {
//         setIsLoading(false);
//       });
//       const data: any = await res.json();
//       if (data.status === "1") {
//         toast.success("Email has been successfully sent !");
//       } else {
//         setError(data.message);
//         toast.error(data.error);
//       }
//     } else {
//       const data: any = await res.json();
//       setError(data.message);
//       setIsLoading(false);
//       toast.error(data.message);
//     }
//   };

//   //reset-password
//   const resetPassword = async (formData: FormData) => {
//     setIsLoading(true);
//     setError("");

//     const token = await JSON.parse(localStorage.getItem("token") ?? "{}").token;

//     const res = await fetch(
//       "http://127.0.0.1:8000/api/v1/user/change-password",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       }
//     );
//     if (res.status === 200) {
//       setError("");
//       setTimeout(() => {
//         setIsLoading(false);
//       });
//       const data: any = await res.json();
//       if (data.status === "1") {
//         navigate("/home");
//         toast.success("Password has been  successfully changed !");
//       } else {
//         toast.error(data.message);
//       }
//     } else {
//       const data: any = await res.json();
//       setIsLoading(false);
//       toast.error(data.message);
//     }
//   };

//   //logout
//   const logoutHandler = async () => {
//     setIsLoading(true);
//     setError("");
//     const token = await JSON.parse(localStorage.getItem("token") ?? "{}").token;

//     const res = await fetch("http://127.0.0.1:8000/api/v1/user/logout", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (res.status === 200) {
//       const data = await res.json();
//       if (data.status === "1") {
//         // on success
//         setTimeout(() => {
//           localStorage.removeItem("token");
//           localStorage.setItem("isLoggedIn", "false");
//           setIsLoggedIn(false);
//           setIsLoading(false);
//           navigate("/login");
//           toast.success("Successfully Logged Out !");
//         }, 1000);
//       } else {
//         toast.error(data.message); //error handling
//       }
//     } else {
//       const data = await res.json();
//       toast.error(data.message);
//     }
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         data: data,
//         login: login,
//         isLoading: isLoading,
//         isLoggedIn: isLoggedIn,
//         logout: logoutHandler,
//         forgotPassword: forgotPassword,
//         resetPassword: resetPassword,
//         error: error,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth() {
//   const authCtx = useContext(AuthContext);
//   return authCtx;
// }
// export default AuthContextProvider;
