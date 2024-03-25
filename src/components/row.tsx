import React from "react";

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <div style={{ display: "flex", gap: "5rem" }}>{children}</div>;
};

export default Row;
