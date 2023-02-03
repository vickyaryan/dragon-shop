const addItem = []

const singleItem = (state = addItem, action) =>{
    switch (action.type){        
        case "ADDSINGLEPRODUCT":
            return [...state, action.payload]
            break;

        default:
            return state
            break;
    }
}

export default singleItem