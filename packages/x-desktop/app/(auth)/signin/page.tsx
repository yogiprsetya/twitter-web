'use client';

import { Button, Input } from '@twitter-web/ui';
import Link from 'next/link';
import { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign in logic
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="w-full max-w-md p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Masuk ke Twitter</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 *:w-full">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" size="big">
          Masuk
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-dark-6 text-sm">
          Belum punya akun?{' '}
          <Link href="/signup" className="text-primary-blue hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
