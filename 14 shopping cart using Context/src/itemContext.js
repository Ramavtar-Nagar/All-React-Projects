import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    const handleAdd = (price) => {
        setTotal(total + price);
        setItem(item + 1);
    };

    const handleRemove = (price) => {
        if(total <= 0){
        return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
    };

    const clear = () => {
        setItem(0);
        setTotal(0);
    }

    return(
        <itemContext.Provider value = {{total, setTotal, item, setItem, handleAdd, handleRemove, clear}}>
            {children}
        </itemContext.Provider>
    )
}

export {itemContext, useValue}
export default CustomItemContext;