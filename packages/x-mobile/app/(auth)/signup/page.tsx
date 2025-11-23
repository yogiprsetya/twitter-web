'use client';

import { Button, Input, InputPassword } from '@twitter-web/ui';
import Link from 'next/link';
import { useState } from 'react';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign up logic
    console.log('Sign up:', { name, email, password, confirmPassword });
  };

  return (
    <div className="w-full max-w-md p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Buat akun Anda</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 *:w-full">
        <Input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputPassword
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <InputPassword
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button type="submit" size="big">
          Daftar
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-dark-6 text-sm">
          Sudah punya akun?{' '}
          <Link href="/signin" className="text-primary-blue hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
