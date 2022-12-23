import React from "react";
import { Card, CardTwo } from "./Card";

export const CardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
      <Card />
      <CardTwo />
      <Card />
      <CardTwo />
      <Card />
      <CardTwo />
    </div>
  );
};
