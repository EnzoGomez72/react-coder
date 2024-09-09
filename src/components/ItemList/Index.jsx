
/*const ItemList = ({ label }) => {

    return(
        <li className="navbar__item">
            <a href="" className="navbar__link">{ label }</a></li>
    )
}

export default ItemList;*/
import { useState, useEffect } from "react";
import Card from "../Card/Index";

const ItemList = ({category}) => {
    let [ items, setItems] = useState([]);

    useEffect(() => {
        fetch('../src/data/data.json')
        .then(res => res.json())
        .then(data => {
            if (category) {
                setItems(data.filter(item => item.category === category))
            } else {
                setItems(data);
            }
            })
        }, []);
    

    return(
        <div className="ItemList">
        {items.map((item, i) => <Card key={`card-${i}`} {...item}/>)}
        </div>
    );
};

export default ItemList;