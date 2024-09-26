import Logo from "@/app/assets/images/logo.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image src={Logo} width={128} height={38} alt="logo was not found!" />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;
