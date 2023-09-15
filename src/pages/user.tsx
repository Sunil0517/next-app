import React, { FC } from 'react';
import { useEffect , useState } from 'react';

interface PostItem {
  name: string;
  password: string;
}


const App: FC = () => {

  const [user, setUser] = useState<any[]>([]);

    useEffect(() => {
    fetch('http://localhost:3004/users')
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
    }, []);

  return (
    
    <div className="container  mx-auto m-auto justify-center">
      <h2 className="text-4xl text-center text-white">User</h2>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {user.map((user: PostItem, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{user.name}</h3>
            <p className="text-gray-600">{user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
