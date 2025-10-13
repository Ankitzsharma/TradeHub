import React, { useEffect, useState } from "react";
import { api } from "../api";
import { LANDING_URL } from "../config";

const AuthGate = ({ children }) => {
  const [status, setStatus] = useState({ loading: true, user: null });

  useEffect(() => {
    let mounted = true;
    api
      .get("/auth/me")
      .then((res) => {
        if (!mounted) return;
        setStatus({ loading: false, user: res.data });
      })
      .catch(() => {
        if (!mounted) return;
        setStatus({ loading: false, user: null });
        window.location.replace(`${LANDING_URL}/signup`);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (status.loading) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <p>Loading dashboard…</p>
      </div>
    );
  }

  if (!status.user) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGate;