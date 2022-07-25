import React, {useEffect, useState} from 'react';
import Model from "../utils/Model";
import data from "../utils/data";

const Home = (props) => {
    // console.log("Home Props:", props);
    let model = new Model(data);
    console.log("Home:", model.data);
    let list;
    return (
        <div>
            Hello React:
            {
                list = model.data.map((item) => {
                    return <div>{item.author}</div>
                })
            }
        </div>
    )
}
export default Home;