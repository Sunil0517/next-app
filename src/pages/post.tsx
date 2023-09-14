// import React from 'react';

// const Post: React.FC = () => {
//   return (
//     <div className='container mx-auto'>
//       <div className='flex justify-center'>
//         <h2 className="text-4xl text-center text-white">Post's</h2>
//       </div>
//       <div className="bg-white rounded-lg shadow-lg p-4 mt-4 grid grid-cols-2 gap-4"> 
//         <h3 className="text-xl font-semibold mb-2 text-black">Narendra Modi</h3>
//         <p className="text-gray-600">With the Cabinet approval of eCourts Project Phase III, we are ushering in a new era of justice delivery in India. Integrating advanced technology will make our judicial system more accessible and transparent. </p>
//       </div>

//       <div className="bg-white rounded-lg shadow-lg p-4 mt-4 grid grid-cols-2 gap-4">
        
//         <h3 className="text-xl font-semibold mb-2 text-black">Narendra Modi</h3>
//         <p className="text-gray-600">With the Cabinet approval of eCourts Project Phase III, we are ushering in a new era of justice delivery in India. Integrating advanced technology will make our judicial system more accessible and transparent. </p>
//       </div>
//     </div>
//   );
// };

// export default Post;

// Post.tsx
import React from 'react';
import { posts } from './posts';

interface PostItem {
  user: string;
  content: string;
}

const Post: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center text-white">Posts</h2>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: PostItem, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{post.user}</h3>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Post;
