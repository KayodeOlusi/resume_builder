import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

interface IResult {
  resume: IFormDetails;
  user_details: {
    name: string;
    email: string;
    uid: string;
  };
}

const useResume = () => {
  const [user] = useAuthState(auth);
  const [userResumeId, setUserResumeId] = useState<string>("");
  const [resumeCollection] = useCollection(query(collection(db, "resume")));
  const [resumeDocument] = useDocument(
    // @ts-ignore
    userResumeId && doc(db, "resume", userResumeId!)
  );

  useEffect(() => {
    if (resumeCollection?.docs) {
      for (let i = 0; i < resumeCollection?.docs?.length; i++) {
        let singleDocument = resumeCollection?.docs[i];

        if (
          singleDocument?.data().user_details.email === user?.email ||
          singleDocument?.data().user_details.uid === user?.uid
        ) {
          setUserResumeId(singleDocument?.id);
          break;
        }
      }
    }
  }, [resumeCollection, user]);

  const result = resumeDocument?.data() as IResult;

  return result;
};

export default useResume;
