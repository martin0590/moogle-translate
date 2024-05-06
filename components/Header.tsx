import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Header = () => {
  const { userId } = auth();

  return (
    <header className="flex items-center justify-between px-8 py-2 border-b mb-5">
      <div className="flex items-center justify-center h-20 overflow-hidden">
        <Link href="/">
          <b>Moogle Translate</b>
        </Link>
      </div>

      {userId ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <SignInButton fallbackRedirectUrl={"/translate"} mode="modal" />
      )}
    </header>
  );
};

export default Header;
