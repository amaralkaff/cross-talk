import { ReactNode } from "react";

export default function MembersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <p>Members Layout</p>
      {children}
    </div>
  );
}
