import { useEffect, useState } from 'react';
import  firebase  from 'firebase/app';
// import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore'
// import '../config/firebase' 


const ShareHospitals = (): JSX.Element => {
  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    firebase.initializeApp({ /* Your Firebase configuration */ });
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const shareHospitalsByEmail = async (): Promise<void> => {
    try {
      // const db = firebase.firestore(); // Access the Firestore instance

      const hospitalsSnapshot = await db.collection('hospitals').get();
      const hospitalsData = hospitalsSnapshot.docs.map((doc) => doc.data());

      // Format hospitalsData as desired for sharing via email

      const emailSubject = 'List of Hospitals';
      const emailBody = JSON.stringify(hospitalsData, null, 2);

      const shareUrl = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(shareUrl);
    } catch (error) {
      console.error('Error sharing hospitals via email:', error);
    }
  };

  return (
    <div>
      <input type="email" value={emailAddress} onChange={handleEmailChange} placeholder="Enter email address" />
      <button onClick={shareHospitalsByEmail} disabled={!emailAddress}>
        Share Hospitals via Email
      </button>
    </div>
  );
};

export default ShareHospitals;
