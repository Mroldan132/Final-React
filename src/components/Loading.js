"use client";

import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <Spinner animation="border" variant="primary" size="lg" />
        <h3 className="mt-3">Cargando...</h3>
      </div>

      <style jsx>{`
        .loading-container {
          min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
          background-color: #f8f9fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h3 {
          color: #007bff;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
