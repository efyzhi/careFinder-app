import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import styles from '../styles/FindHospital.module.css'


interface Hospital {
  id: string;
  name: string;
  location: string;
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
      try {
        setLoading(true);
        const hospitalsRef = collection(db, "hospitals");
        const q = query(hospitalsRef, where("location", "==", searchTerm));
        const querySnapshot = await getDocs(q);

        const hospitalsData: Hospital[] = [];
        querySnapshot.forEach((doc) => {
          hospitalsData.push({ id: doc.id, ...doc.data() } as Hospital);
        });

        setHospitals(hospitalsData);
      } catch (error) {
        console.error("Error retrieving hospitals:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchHospitals();
    } else {
      setHospitals([]);
    }
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div  className={styles.container}>
      <h2>Hospital Search</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by location" />
      {loading ? (
        <p>Loading...</p>
      ) : hospitals.length > 0 ? (
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id}>
              <h3>{hospital.name}</h3>
              <p>{hospital.location}</p>
              <p>{hospital.address}</p>
              <p>{hospital.contact}</p>
              <p>{hospital.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hospitals found.</p>
      )}
    </div>
  );
};

export default FindHospital;
