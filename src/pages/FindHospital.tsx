import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

interface Hospital {
  id: string;
  name: string;
  address: string;
  contact: string;
  email: string;
}

const FindHospital: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHospitals = async () => {
      setLoading(true);
      try {
        const hospitalsRef = collection(db, "hospitals");
        const q = query(hospitalsRef, where("name", "==", searchTerm));
        const querySnapshot = await getDocs(q);

        const hospitalData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Hospital[];

        setHospitals(hospitalData);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm !== "") {
      fetchHospitals();
    } else {
      setHospitals([]);
    }
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Hospital Search</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by hospital name" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {hospitals.length > 0 ? (
            <ul>
              {hospitals.map((hospital) => (
                <li key={hospital.id}>
                  <h3>{hospital.name}</h3>
                  <p>{hospital.address}</p>
                  <p>{hospital.contact}</p>
                  <p>{hospital.email}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hospitals found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default FindHospital;
