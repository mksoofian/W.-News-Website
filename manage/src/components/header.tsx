import Image from "next/image";
import Link from "next/link";

type Nav = Links[];
type Links = {
  name: string;
  link: string;
};

export default function Header() {
  const navLinks: Nav = [
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Product",
      link: "/",
    },
    ,
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Community",
      link: "/",
    },
  ];
  return (
    <div className="flex text-center justify-between">
      <Image
        src="logo.svg"
        alt="Manage logo"
        width={100}
        height={50}
        className="w-auto h-auto"
      />
      <nav className="flex">
        <>
          {navLinks.map(({ name, link }, index) => {
            return (
              <li key={name + index}>
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
        </>
      </nav>
      <button className="bg-BrightRed px-4 py-2 rounded-full text-VeryLightGray">
        Get Started
      </button>
    </div>
  );
}
