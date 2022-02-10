import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ILinkItemProps {
  href: string;
  title: string;
  current: boolean;
}

const pages = [
  {
    path: "/",
    title: "/home",
  },
  {
    path: "/work",
    title: "/work",
  },
  {
    path: "/blog",
    title: "/blog",
  },
];

const LinkItem = (props: ILinkItemProps) => {
  return (
    <div className={`md:px-10 ${props.current ? "font-bold" : ""}`}>
      <Link href={props.href}>{props.title}</Link>
    </div>
  );
};

function Navigation() {
  const { asPath } = useRouter();
  return (
    <nav className="mx-auto flex flex-row justify-around p-5 align-middle md:justify-start md:p-10">
      {pages.map((p) => {
        return <LinkItem key={p.path} href={p.path} title={p.title} current={p.path === asPath} />;
      })}
    </nav>
  );
}

export default Navigation;
