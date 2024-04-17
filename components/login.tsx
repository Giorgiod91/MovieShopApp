import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  const handleRegistration = () => {
    signIn("email", { callbackUrl: "http://localhost:3000/register" });
  };

  return (
    <div>
      {!session ? (
        <div>
          <h1>Login</h1>
          <button onClick={() => signIn("github")}>Login with GitHub</button>
          <button onClick={() => signIn("email")}>Login with Email</button>
          <button
            className="text-sm font-normal text-default-600 bg-default-100"
            onClick={handleRegistration}
          >
            Register
          </button>
        </div>
      ) : (
        <div>
          <p>Welcome, {session.user?.email}</p>
        </div>
      )}
    </div>
  );
}
