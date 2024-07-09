import React from "react";
import Container from "./container";

// Define the interface for the props
interface SectionTitleProps {
  align?: "left" | "center";
  id?: string;
  pretitle?: string;
  title?: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <Container
      className={`flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
      id={props.id}
    >
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-blue-500 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-blue-600 lg:leading-tight lg:text-4xl p-4 ">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl text-lg leading-normal text-blue-500 lg:text-xl xl:text-xl ">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
