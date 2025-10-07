import { Layout } from '../components/layout';
import React, { useState } from 'react';
import { PomoBoard } from '../components/home/PomoBoard';
import { useAppSelector } from '../hooks/redux';
import { selectColor } from '../store/store';


interface HomePageProps{
    title: string;
};

export const HomePage: React.FC<HomePageProps> = ({ title }) => {
    const bgColor = useAppSelector(selectColor)

    return (
      <Layout bgColor={bgColor}>
        <PomoBoard />
      </Layout>
    );
};