import React from 'react';
import { Inter } from 'next/font/google';
import User from './user';
import Post from './post';

const inter = Inter({ subsets: ['latin'] });


const Home: React.FC = () => {
  return (
    <div className='container'>
      <h1 className="text-4xl font-bold text-left text-blue-400">Twitter</h1>
      <User />
      <button className='create hover'>Create</button>
      <Post />
    </div>
  );
};

export default Home;
