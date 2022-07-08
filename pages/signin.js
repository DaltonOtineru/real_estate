import { getProviders, signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  return (
    <section className="flex items-center justify-center h-screen w-screen">
      <Head>
        <title>Sign In | Berkshire Hathaway</title>
      </Head>
      <div className="w-11/12 flex flex-col items-center justify-center">
        <h1 className="text-center text-xl lg:text-3xl dark:text-white dark:text-opacity-[.87] font-extrabold">
          Sign in to your account
        </h1>
        <p className="text-center dark:text-white dark:text-opacity-[.57] mb-4">
          Choose your authentication method
        </p>
        <div className="w-[400px] max-w-[95vw] flex flex-col lg:flex-row gap-6 text-center">
          {Object.values(providers).map((provider) => (
            <button
              className="flex-grow text-center text-4xl rounded-md dark:bg-[#222] dark:hover:bg-[#272727] w-full duration-200 hover:-translate-y-0.5 shadow-lg p-6 lg:p-10"
              key={provider.name}
              onClick={() => {
                signIn(provider.id, {
                  callbackUrl: '/',
                });
              }}
            >
              {provider.id === 'google' && (
                <FaGoogle className="text-black dark:text-white mx-auto" />
              )}
              {provider.id === 'twitter' && (
                <FaTwitter className="text-black dark:text-white mx-auto" />
              )}
              {provider.id === 'facebook' && (
                <FaFacebook className="text-black dark:text-white mx-auto" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
