"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1
          onClick={() => router.push("/")}
          className="text-2xl cursor-pointer"
        >
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      <Breadcrumbs />

      <div>
        <SignedOut>
          '
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
