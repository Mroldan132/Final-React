"use client";

import { useState } from "react";
import { signInUser } from "@/api/authApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await signInUser({ email, password, from: "form-signup" });
      if (response?.success) {
        setSuccess(response.message);
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.response.logedUser));
        router.push("/menu");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Error desconocido");
    }
    
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary">Ingresar</button>
          <Link href="/register">
            ¿No estás registrado? Regístrate aquí.
          </Link>
        </div>
      </form>
    </div>
  );
}
