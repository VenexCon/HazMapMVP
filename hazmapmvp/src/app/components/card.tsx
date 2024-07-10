
'use client'

import React from "react";

interface CardProps {
  title: string;
  content: any;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
      <p className="text-blue-500">{content}</p>
    </div>
  );
};

export default Card;
