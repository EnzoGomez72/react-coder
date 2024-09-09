import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/Index";

const Store = () => {
    const {id} = useParams();

    return (
        <>
            <ItemList category={id}/>
        </>
    );
};

export default Store;