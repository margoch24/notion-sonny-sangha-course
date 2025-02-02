import { auth } from "@clerk/nextjs/server";
import { use } from "react";

function DockLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  // const { sessionClaims, userId, redirectToSignIn } = await auth();
  //   if (!userId) return redirectToSignIn();
  const { id } = use(params);

  return <div>{children}</div>;
}

export default DockLayout;
