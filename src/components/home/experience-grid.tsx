import React from "react";

const ExperienceGrid = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="grid grid-r md:grid-cols-2 ml-12 gap-4 mt-4">
      {children}
    </div>
  );
};

export default ExperienceGrid;
