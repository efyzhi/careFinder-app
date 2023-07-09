import { collection, getDocs } from "firebase/firestore";
import { createObjectCsvWriter } from "csv-writer";
import { db } from "../config/firebase";

const exportHospitalsToCSV = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "hospitals"));
    const hospitals = querySnapshot.docs.map((doc) => doc.data());

    const csvWriter = createObjectCsvWriter({
      path: "hospitals.csv",
      header: [
        { id: "id", title: "ID" },
        { id: "name", title: "Name" },
        { id: "location", title: "Location" },
        { id: "address", title: "Address" },
        { id: "contact", title: "Contact" },
        { id: "email", title: "Email" },
      ],
    });

    await csvWriter.writeRecords(hospitals);

    console.log("Hospital data exported to hospitals.csv successfully");
  } catch (error) {
    console.error("Error exporting hospital data:", error);
  }
};

export default exportHospitalsToCSV;
