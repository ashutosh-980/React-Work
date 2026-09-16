import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (!user) {
        console.log("User is not logged in.");
        navigate("/");
        return;
      }

      try {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.log(error.message);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="border w-80 bg-white rounded-md p-5">
      {userDetails ? (
        <>
          <h3 className="text-xl italic font-bold text-center">
            Welcome {userDetails.name} 🙏🙏
          </h3>
          <div>
            <p className="text-md italic font-semibold">
              Name :- {userDetails.name}
            </p>
            <p className="text-md italic font-semibold">
              Email :- {userDetails.email}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleLogOut}
              className="border mt-4 px-5 py-2 font-medium text-md rounded-xl bg-blue-600 text-white cursor-pointer transition-transform hover:scale-110 hover:bg-blue-800 duration-300 ease-in"
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <p className="text-md italic font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default Home;
