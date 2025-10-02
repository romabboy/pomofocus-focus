import { Layout } from '../components/layout';
import React from 'react';


interface HomePageProps{
    title: string;
};

export const HomePage: React.FC<HomePageProps> = ({ title }) => {
    return (
      <Layout>
        <h1>{title}</h1>
      </Layout>
    );
};