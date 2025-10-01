import React from 'react';


type HomePageProps = {
    title: string;
  };
  
  export const HomePage: React.FC<HomePageProps> = ({ title }) => {
    return <h1>{title}</h1>;
  };