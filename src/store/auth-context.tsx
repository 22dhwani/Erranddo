import React, { useState, useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser, SendOtp, UserData, VerifyOtp } from "../models/user";

//auth response type declaration
type AuthResponseType = {
  data?: UserData;
  login: (formData: FormData) => void;
  loginPro: (formData: FormData) => void;
  sendOtp: (formData: FormData) => void;
  verifyOtp: (formData: FormData, registerFormData: FormData) => void;
  isLoggedIn: boolean;
  isLoading: boolean;
  isLoginProLoading: boolean;
  isLoginCustomerLoading: boolean;
  logout: () => void;
  forgotPassword: (formData: FormData) => void;
  resetPassword: (formData: FormData) => void;
  profileHandler: (formData: FormData) => void;
  error: string;
};

//auth context initialization
export const AuthContext = createContext<AuthResponseType>({
  login: (data) => {
    console.log(data);
  },
  loginPro: (data) => {
    console.log(data);
  },
  sendOtp: (data) => {
    console.log(data);
  },
  verifyOtp: (data, formData) => {
    console.log(data, formData);
  },
  isLoggedIn: false,
  isLoading: false,
  isLoginProLoading: false,
  isLoginCustomerLoading: false,
  logout: () => {
    console.log();
  },
  forgotPassword: (d) => {
    console.log(d);
  },
  resetPassword: (d) => {
    console.log(d);
  },
  profileHandler: (d) => {
    console.log(d);
  },
  error: "",
});

const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const initialToken = localStorage.getItem("data");
  const [data, setData] = useState(
    initialToken ? JSON.parse(initialToken) : undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isProLoading, setIsProLoading] = useState(false);
  const [isCustomerLoading, setIsCustomerLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(initialToken ? true : false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //login
  const login = async (formData: FormData) => {
    setIsCustomerLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/login",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.status === 200) {
      setIsCustomerLoading(false);

      const data: VerifyOtp = await res.json();

      if (data.status === "0") {
        setError(data.message);
      } else {
        setData(data.data);
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", JSON.stringify(data?.data));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "customer");
        navigate("/home");
        setError("");
      }
    } else {
      const data: any = await res.json();
      setIsCustomerLoading(false);
      setError(data.message);
    }
  };

  //login pro

  const loginPro = async (formData: FormData) => {
    setIsProLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/login",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.status === 200) {
      setIsProLoading(false);
      const data: VerifyOtp = await res.json();

      if (data.status === "0") {
        setError(data.message);
      } else {
        setData(data.data);
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", JSON.stringify(data?.data));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "pro");
        navigate("/pro");
        setError("");
      }
    } else {
      const data: any = await res.json();
      setIsProLoading(false);
      setError(data.message);
    }
  };

  //sendotp
  const sendOtp = async (formData: FormData) => {
    setIsLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/send-otp",
      {
        method: "POST",
        body: formData,
      }
    );
    if (res.status === 200) {
      setIsLoading(false);
      const data: SendOtp = await res.json();

      if (data.status === "0") {
        setError(data.message);
      } else {
        setError("");
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };

  //verfiy otp
  const verifyOtp = async (formData: FormData, registerFormData: FormData) => {
    setIsLoading(true);
    setError("");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/verify-otp",
      {
        method: "POST",
        body: formData,
      }
    );
    if (res.status === 200) {
      const data: VerifyOtp = await res.json();

      console.log(data);
      if (data.status === "0") {
        console.log("wdwdw");
        setIsLoading(false);
        setError(data?.message);
      } else {
        console.log("wwdw");
        if (data.data.is_email_verified !== 1) {
          setIsLoading(false);
          setError("Please enter a correct email otp");
        } else if (data.data.is_mobile_verified !== 1) {
          setIsLoading(false);

          setError("Please enter a correct mobile otp");
        } else {
          setIsLoading(true);

          setError("");
        }
        localStorage.setItem("token", data.token);
        const res = await fetch(
          "https://erranddo.kodecreators.com/api/v1/user/register",
          {
            method: "POST",
            body: formData,
          }
        );
        if (res.status === 200) {
          const data: RegisterUser = await res.json();
          setIsLoading(false);
          if (data.status === "0") {
            setError(data.message);
          } else {
            setData(data.data.user_requests.user);
            setIsLoggedIn(true);
            localStorage.setItem(
              "data",
              JSON.stringify(data?.data?.user_requests?.user)
            );
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("role", "customer");
            navigate("/home");
            setError("");
          }
        }
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      setError(data.message);
    }
  };

  //forgot-password
  const forgotPassword = async (formData: FormData) => {
    setError("");
    setIsLoading(true);

    const res = await fetch("http://127.0.0.1:8000/api/v1/forgot-password", {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
      });
      const data: any = await res.json();
      if (data.status === "1") {
        // toast.success("Email has been successfully sent !");
      } else {
        setError(data.message);
        // toast.error(data.error);
      }
    } else {
      const data: any = await res.json();
      setError(data.message);
      setIsLoading(false);
      // toast.error(data.message);
    }
  };

  //reset-password
  const resetPassword = async (formData: FormData) => {
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/settings/change-password",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (res.status === 200) {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
      });
      const data: any = await res.json();
      if (data.status === "1") {
        // navigate("/home");
        // toast.success("Password has been  successfully changed !");
      } else {
        // toast.error(data.message);
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      // toast.error(data.message);
    }
  };

  //logout
  const logoutHandler = async () => {
    setIsLoading(true);
    setError("");
    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/logout",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      if (data.status === "1") {
        // on success
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.setItem("isLoggedIn", "false");
          setIsLoggedIn(false);
          setIsLoading(false);
          navigate("/sign-in");
          // toast.success("Successfully Logged Out !");
        }, 1000);
      } else {
        // toast.error(data.message); //error handling
      }
    } else {
      const data = await res.json();
      // toast.error(data.message);
    }
  };

  //profile update
  const profileHandler = async (formData: FormData) => {
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/settings/change-password",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    if (res.status === 200) {
      setError("");
      setTimeout(() => {
        setIsLoading(false);
      });
      const data: any = await res.json();
      if (data.status === "1") {
        // navigate("/home");
        // toast.success("Password has been  successfully changed !");
      } else {
        // toast.error(data.message);
      }
    } else {
      const data: any = await res.json();
      setIsLoading(false);
      // toast.error(data.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        data: data,
        login: login,
        loginPro: loginPro,
        logout: logoutHandler,
        resetPassword: resetPassword,
        forgotPassword: forgotPassword,
        profileHandler: profileHandler,
        isLoading: isLoading,
        isLoginCustomerLoading: isCustomerLoading,
        isLoginProLoading: isProLoading,
        isLoggedIn: isLoggedIn,
        sendOtp: sendOtp,
        verifyOtp: verifyOtp,
        error: error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authCtx = useContext(AuthContext);
  return authCtx;
}
export default AuthContextProvider;
