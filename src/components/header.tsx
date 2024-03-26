"use client";
import Link from "next/link";
import React from "react";
import SignInButton from "./signin-button";

const NAV_LINKS = [
  { name: "Dashbaord", href: "/dashboard" },
  { name: "Top investors", href: "/top-investors" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow">
      <div className="flex items-center justify-between px-20 py-2">
        <div className="flex items-center gap-14">
          <Link className="font-medium text-xl" href="/">
            MoneyDashboard
          </Link>
          <nav>
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <SignInButton />
        </div>
      </div>
    </header>
  );
}
