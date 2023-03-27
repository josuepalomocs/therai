import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="w-screen min-h-screen bg-neutral-900 text-white">
      {children}
    </div>
  );
}
