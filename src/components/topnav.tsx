import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div className="padding-2">
        Daniel's Dashboard
        <div>
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <SignedIn>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </SignedIn>
        </div>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
}
