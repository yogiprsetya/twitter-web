'use client';

import { Button, Input } from '@twitter-web/ui';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="w-full max-w-md p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Buat akun Anda</h1>
      </div>

      <form className="space-y-4">
        <div>
          <Input type="text" placeholder="Nama" required />
        </div>

        <div>
          <Input type="email" placeholder="Email" required />
        </div>

        <div>
          <Input type="password" placeholder="Password" required />
        </div>

        <div>
          <Input type="password" placeholder="Konfirmasi Password" required />
        </div>

        <Button type="submit" size="big" className="w-full">
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
