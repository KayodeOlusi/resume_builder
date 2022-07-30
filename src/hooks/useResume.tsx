import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const useResume = () => {
  const [user] = useAuthState(auth);
  const [userResumeId, setUserResumeId] = useState<string | null>(null);
  const [resumeCollection] = useCollection(query(collection(db, "resume")));
  const [resumeDocument] = useDocument(doc(db, "resume", userResumeId!));

  useEffect(() => {
    if (resumeCollection?.docs) {
      for (let i = 0; i < resumeCollection?.docs?.length; i++) {
        let singleDocument = resumeCollection?.docs[i];

        if (
          singleDocument?.data().user.email === user?.email ||
          singleDocument?.data().user.uid === user?.uid
        ) {
          setUserResumeId(singleDocument?.id);
          break;
        }
      }
    }
  }, [resumeCollection, user]);

  return resumeDocument?.data();
};

export default useResume;
