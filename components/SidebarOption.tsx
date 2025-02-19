import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOption({ href, id }: { href: string; id: string }) {
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";
  const [data] = useDocumentData(doc(db, "documents", id));
  if (!data) return null;

  return (
    <Link
      href={href}
      className={`relative border p-2 rounded-md ${isActive ? "bg-gray-300 font-bold border-black" : "border-gray-400"}`}
    >
      <p className="truncate">{data.title}</p>
    </Link>
  );
}

export default SidebarOption;
