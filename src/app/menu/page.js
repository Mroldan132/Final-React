"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
export default function Menu() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  if (!user) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Bienvenido, {user.nombre} {user.apellido}</h1>
        <nav>
          <ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}
