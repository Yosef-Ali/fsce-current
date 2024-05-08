'use client';

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";

export default function NewsAndEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto pt-8 pb-8">
          <div className="flex flex-wrap -mx-2">
            {/* Add your specific content or components for the Programs section here */}
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pb-10 pt-10">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            {children}
          </div>
          <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}