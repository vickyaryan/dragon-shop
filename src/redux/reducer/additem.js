const addItem = []

const addItems = (state = addItem, action) =>{
    switch (action.type){
        case "ADDALLITEM":
            return action.payload
            break;
        
        case "DELETEITEM":
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
            break;
            
        default:
            return state;
            break;
    }
}

export default addItems