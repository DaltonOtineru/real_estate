import { getProviders, signIn, useSession } from 'next-auth/react';

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => {
              signIn(provider.id, {
                callbackUrl: '/',
              });
            }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
