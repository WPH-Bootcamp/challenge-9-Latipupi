import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../../lib/redux/hooks/hooks";
import { setAuth } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

const login = async (data: { email: string; password: string }) => {
  const res = await api.post("/api/auth/login", data);
  return res.data;
};

const register = async (data: { email: string; password: string }) => {
  const res = await api.post("/api/auth/register", data);
  return res.data;
};

export function useLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
       dispatch(setAuth({
      token: data?.data?.token,
      user: data?.data?.user
    }));
    navigate("/", { replace: true });
    },
  });
}

export function useRegister() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
       dispatch(setAuth({
      token: data?.data?.token,
      user: data?.data?.user
    }));
    navigate("/", { replace: true });
    },
  });
}


