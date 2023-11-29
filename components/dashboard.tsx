/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ThIh8C6THbK
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  IconArrowLeft,
  IconExit,
  IconHistory,
  IconLunch,
  IconReview,
  IconSettings,
} from "@/components/ui/icons";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-[#D91966] dark:bg-[#333132]">
      <header className="flex justify-center items-center h-16 px-6 bg-[#D91966] dark:bg-[#333132]">
        <div className="text-2xl font-bold text-white dark:text-gray-200">
          Frog&lsquo;s
        </div>
        <Button
          className="absolute right-6 text-white dark:text-gray-200 bg-transparent dark:bg-transparent hover:bg-transparent border-0 hover:text-gray-500"
          variant="outline"
        >
          <IconExit className="h-5 w-5" />
        </Button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <nav className="flex flex-col items-start justify-between p-6 space-y-1 bg-[#333132] text-white dark:text-gray-200">
          <div className="space-y-2">
            <Link className="flex items-center gap-2" href="#">
              <IconLunch className="h-5 w-5" />
              <span>Menu</span>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <IconHistory className="h-5 w-5" />
              <span>Historial</span>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <IconSettings className="h-5 w-5" />
              <span>Configuración</span>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <IconReview className="h-5 w-5" />
              <span>Review</span>
            </Link>
          </div>
          <Button variant="ghost">
            <IconArrowLeft className="h-5 w-5" />
          </Button>
        </nav>
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;