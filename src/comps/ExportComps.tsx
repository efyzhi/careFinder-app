import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { createObjectCsvWriter } from "csv-writer";

interface HospitalExport {
  id: string;
  name: string;
  address: string;
  contact: string;
  email: string;
}

const ExportComps = () => {
  const [hospitals, setHospitals] = useState<HospitalExport[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const querySnapshot = await db.collection("hospitals").get();
        const hospitalData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as HospitalExport[];
        setHospitals(hospitalData);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };
    fetchHospitals();
  }, []);

  const handleExport = () => {
    const csvWriter = createObjectCsvWriter({
      path: "hospitals.csv",
      header: [
        { id: "id", title: "ID" },
        { id: "name", title: "Name" },
        { id: "address", title: "Address" },
        { id: "contact", title: "Contact" },
        { id: "email", title: "Email" },
      ],
    });

    csvWriter
      .writeRecords(hospitals)
      .then(() => console.log("CSV has been created successfully"))
      .catch((error) => console.error("Error creating CSV file", error));
  };

  return (
    <div>
      <h2>Export Hospitals</h2>
      <button onClick={handleExport}>Export to CSV</button>
    </div>
  );
};

export default ExportComps;
