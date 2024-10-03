import { useState } from "react";
import { doc, writeBatch } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import data from "../../data/data.json"

const Update = () => {

    const bulkInsert = async (dataArray) => {
        const batch = writeBatch(db);

        dataArray.forEach((element, index) => {
            const docRef = doc(db, 'items', `item-0${index}`);

            batch.set(docRef, element)
        });

        try {

            await batch.commit();
        } catch (error) {
            console.log("Error cargando los items")
        }
    }

    return (
        <button onClick={() => bulkInsert(data)}>ACTUALIZAR DATOS</button>
    )
};
export default Update;