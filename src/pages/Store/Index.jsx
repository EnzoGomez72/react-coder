import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/Index";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Index";


const Store = () => {
    const { category } = useParams();

    let [items, setItems] = useState([]);
    let [loading, setLoading] = useState(false);
    let [fallback, setFallback] = useState({
        visible: false,
         message:'No pudimos cargar los datos'
    });

    useEffect(() => {
        setLoading(true);


        const itemsCollection = category ? query(collection(db, 'items'), where('category', '==', category)): collection(db, 'items');
        getDocs(itemsCollection)
        .then((snapshot)=> {
            if (snapshot.size === 0) {
                setFallback({visible:true, message:'No pudimos cargar los datos'});
              }else{
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
              }
        })
        .finally(()=> setLoading(false));

    }, [category]);

    return (
        <>
        {loading ? (<Spinner/>): fallback.visible ?(<p>{fallback.message}</p>):
        (
<ItemList items={items}/>
        )
        }
</>
    );
};

export default Store;

/*const Store = () => {
    const { category } = useParams();

    let [items, setItems] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection)
        .then((snapshot)=> {
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        });

    }, []);

    return (
        <>
            <ItemList items={items}/>
        </>
    );
};*/
