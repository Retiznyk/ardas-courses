import { useState, useEffect } from "react";
import { getUser } from "../api";

class UndefinedUser {
  name = "Undefined user";
}

export default function useUser(userId) {
  const [user, setUser] = useState(new UndefinedUser());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser(userId)
      .then(setUser)
      .catch(() => setUser(new UndefinedUser()))
      .finally(() => setLoading(false));
  }, [userId]);

  return {
    user,
    loading
  };
}
