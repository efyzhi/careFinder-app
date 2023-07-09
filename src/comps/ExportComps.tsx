import React from "react";
import exportHospitalsToCSV from "../comps/exportHospitalsToCSV";

const ExportComps = () => {
  const handleExportClick = () => {
    exportHospitalsToCSV();
  };

  return (
    <div>
      <button onClick={handleExportClick}>Export to CSV</button>
    </div>
  );
};

export default ExportComps;
