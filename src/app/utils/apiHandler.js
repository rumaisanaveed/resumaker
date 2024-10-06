import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "../firebaseConfig";
import { formatDate } from "./formatDate";

export const withLoading = async (callback, setLoading) => {
  setLoading(true);
  try {
    await callback();
  } catch (error) {
    console.error(error);
    toast.error("An error occurred. Try again!");
  } finally {
    setLoading(false);
  }
};

export const saveToFirestore = async (
  collectionPath,
  data,
  setIsFormSubmitted
) => {
  const ref = doc(db, ...collectionPath);
  await setDoc(ref, data, { merge: true });
  toast.success("Data saved successfully");
  setIsFormSubmitted(true);
};

export const handleSave = async (
  values,
  type,
  formatDateFields = {},
  resumeId,
  userId,
  setIsFormSubmitted
) => {
  if (!resumeId || !userId) {
    console.error("Resume id or user id is missing");
    return;
  }

  const formattedData = Object.entries(formatDateFields).reduce(
    (acc, [field, value]) => {
      acc[field] = formatDate(value);
      console.log(acc[field]);
      return acc;
    },
    {}
  );

  const dataToSave = {
    [type]: {
      ...values,
      ...formattedData,
    },
  };

  // Save the data to Firestore
  await saveToFirestore(
    ["users", userId, "resumes", resumeId],
    dataToSave,
    setIsFormSubmitted
  );
};
