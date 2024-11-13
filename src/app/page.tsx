"use client";

import { Button, Link } from "@nextui-org/react";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button
        as={Link}
        color="danger"
        href="/members"
        variant="bordered"
        startContent={<GoSmiley size={20} />}
      >
        Click me
      </Button>
    </div>
  );
}
