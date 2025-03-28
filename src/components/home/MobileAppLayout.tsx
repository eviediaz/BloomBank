import React, { ReactNode } from "react";

interface MobileAppLayoutProps {
  children: ReactNode;
}

/**
 * A layout component that provides the mobile app container styling
 * This can be reused across different pages to maintain consistent layout
 */
const MobileAppLayout: React.FC<MobileAppLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[rgba(246,193,211,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto min-h-screen">
      {children}
    </div>
  );
};

export default MobileAppLayout;
