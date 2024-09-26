import Logo from "@/app/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center  wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image src={Logo} alt="logo was not found!" width={128} height={38} />
        </Link>

        <p>{new Date().getFullYear()} Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
