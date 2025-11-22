'use client';

import { Button, Input, InputPassword } from '@twitter-web/ui';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="w-full max-w-md p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Buat akun Anda</h1>
      </div>

      <form className="space-y-4 *:w-full">
        <Input type="text" placeholder="Nama" required />

        <Input type="email" placeholder="Email" required />

        <InputPassword placeholder="Password" required />

        <InputPassword placeholder="Konfirmasi Password" required />

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
