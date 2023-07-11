import React, { useState, useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser, SendOtp, UserData, VerifyOtp } from "../../models/user";
import DeleteImageModal from "../../layout/pro-models/DeleteImageModal";

//auth response type declaration
type AuthProResponseType = {
  data?: UserData;
  login: (formData: FormData) => void;
  loginPro: (formData: FormData) => void;
  sendOtp: (formData: FormData) => void;
  verifyOtp: (
    formData: FormData,
    registerFormData: FormData,
    key: string
  ) => void;
  isLoggedIn: boolean;
  isLoading: boolean;
  isLoginProLoading: boolean;
  isLoginCustomerLoading: boolean;
  deleteHandler: (key: string) => void;
  logout: () => void;
  forgotPassword: (formData: FormData) => void;
  resetPassword: (formData: FormData) => void;
  profileHandler: (formData: FormData) => void;
  error: string;
  deleteImageHandler: () => void;
};

//auth context initialization
export const AuthProContext = createContext<AuthProResponseType>({
  login: (data) => {
    console.log(data);
  },
  loginPro: (data) => {
    console.log(data);
  },
  sendOtp: (data) => {
    console.log(data);
  },
  verifyOtp: (data, formData, key) => {
    console.log(data, formData, key);
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
  deleteHandler: (d) => {
    console.log(d);
  },
  deleteImageHandler: () => {
    console.log();
  },
  error: "",
});

const AuthProContextProvider = (props: { children: React.ReactNode }) => {
  const initialToken = localStorage.getItem("data");
  const [data, setData] = useState(
    initialToken ? JSON.parse(initialToken) : undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isProLoading, setIsProLoading] = useState(false);
  const [isCustomerLoading, setIsCustomerLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(initialToken ? true : false);
  const [error, setError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
  const verifyOtp = async (
    formData: FormData,
    registerFormData: FormData,
    key: string
  ) => {
    setIsLoading(true);
    setError("");
    console.log("here");
    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/verify-otp",
      {
        method: "POST",
        body: formData,
      }
    );
    if (res.status === 200) {
      const data: VerifyOtp = await res.json();
      console.log("edfe", data);
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
            body: registerFormData,
          }
        );
        if (res.status === 200) {
          const data: RegisterUser = await res.json();
          setIsLoading(false);
          if (data.status === "0") {
            setError(data.message);
          } else {
            setData(data.data.user);
            setIsLoggedIn(true);
            localStorage.setItem("data", JSON.stringify(data?.data?.user));
            localStorage.setItem("isLoggedIn", "true");
            if (key === "customer") {
              localStorage.setItem("role", "customer");
              navigate("/home");
            } else if (key === "pro") {
              localStorage.setItem("role", "pro");
              navigate("/pro/dashboard");
            }

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
      setIsLoading(false);
      if (data.status === "1") {
        // on success
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.setItem("isLoggedIn", "false");
          setIsLoggedIn(false);
          setIsLoading(false);
          navigate("/sign-in");
        }, 1000);
      } else {
        setError(data.message);
      }
    } else {
      const data = await res.json();
      setIsLoading(false);
    }
  };

  //profile update
  const profileHandler = async (formData: FormData) => {
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    const res = await fetch(
      "https://erranddo.kodecreators.com/api/v1/user/edit",
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

  const deleteImageHandler = async () => {
    setIsDeleting(true);
    setError("");

    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/user/delete-profile`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      const data = await res.json();
      setIsDeleting(false);

      if (data.status === "1") {
        // Deletion successful
        // Perform any additional logic as needed
      } else {
        setError(data.message);
      }
    } else {
      const data = await res.json();
      setIsDeleting(false);
      setError(data.message);
    }
  };

  const deleteHandler = async (id: string) => {
    setIsDeleting(true);
    setError("");

    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://erranddo.kodecreators.com/api/v1/user/${id}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      const data = await res.json();
      setIsDeleting(false);

      if (data.status === "1") {
        // Deletion successful
        // Perform any additional logic as needed
      } else {
        setError(data.message);
      }
    } else {
      const data = await res.json();
      setIsDeleting(false);
      setError(data.message);
    }
  };

  return (
    <AuthProContext.Provider
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
        deleteHandler: deleteHandler,
        deleteImageHandler: deleteImageHandler,
        error: error,
      }}
    >
      {props.children}
    </AuthProContext.Provider>
  );
};

export function useAuthPro() {
  const authProCtx = useContext(AuthProContext);
  return authProCtx;
}
export default AuthProContextProvider;
