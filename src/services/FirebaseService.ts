import { ref, query, limitToLast, onValue } from "firebase/database";
import { database } from "../utils/firebaseUtils";

interface FirebaseItem {
  key?: string;
  [key: string]: unknown;
}

type CallbackFunction = (items: FirebaseItem[]) => void;

export default class FirebaseService {
  static getDataList = (
    nodePath: string,
    callback: CallbackFunction,
    size: number = 10
  ) => {
    const dataRef = ref(database, nodePath);
    const dataQuery = query(dataRef, limitToLast(size));

    console.log(database);

    onValue(
      dataQuery,
      (dataSnapshot) => {
        const items: FirebaseItem[] = [];
        dataSnapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val() as FirebaseItem; // Cast the result of val() to FirebaseItem
          item["key"] = childSnapshot.key;
          items.push(item);
        });
        callback(items);
      },
      (error) => {
        console.error(error);
      }
    );

    return dataQuery;
  };
}
