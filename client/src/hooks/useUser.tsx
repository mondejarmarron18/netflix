import { useState } from "react";
import api from "../utils/api";

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<unknown>(null);

  const signIn = async (user: Omit<TUser, "created">) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/users/signIn", user);

      setData(res.data);
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (user: Omit<TUser, "created">) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/users/signIn", user);

      setData(res.data);
    } catch (err) {
      setError("Invalid email/password");
    } finally {
      setLoading(false);
    }
  };

  const action = { signIn, signUp };

  return { error, data, loading, action };
};

export default useUser;
