import React, { FormEvent } from 'react';

export default function Page() {
  return (
    <div className='container'>
      <div className='flex justify-center m-8 my-8'>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="email"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className='create' onSubmit={
            (event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const target = event.target as typeof event.target & {
                name: { value: string };
                email: { value: string };
                password: { value: string };
              };
              const name = target.name.value;
              const email = target.email.value;
              const password = target.password.value;

              fetch('', { 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });

          }>Submit</button>
        </form>
      </div>
    </div>
  );
}
