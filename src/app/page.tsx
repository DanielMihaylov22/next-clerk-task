import { Metadata } from "next";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

const textStyle = "w-full flex justify-center items-center p-4 text-xl font-semibold text-center"

export default function DashboardPage() {
  return (
    <main>
      <SignedOut>
        <div className={textStyle}>Hello</div>
        <div className={textStyle}>Welcome to Daniel's Dashboard, please Sign in to view the Dashboard</div>
      </SignedOut>
      <SignedIn>
        <h1 className={textStyle}>Welcome to Daniel's Dashboard</h1>
      </SignedIn>
    </main>
  );
}
