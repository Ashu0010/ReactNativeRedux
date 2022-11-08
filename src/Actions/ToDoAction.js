export const ADDED = 'ADDED';
export const DELETED = 'DELETED'
export const EDITED = 'EDITED'
export const TOGGLE = 'TOGGLE'
// export const AddTodo = payload => ({type: ADD_TODO, payload});
// export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});

export const added = (data,nav) => {
    //console.log('=>>>>>>>>>>',nav);
    return{
        type : ADDED,
        payload : {[nav]:data},
    }
}

export const deleted = (data,nav) => {
    return{
        type : DELETED,
        payload : {[nav]:data},
    }
}
export const edited = (data,nav) => {
    return{
        type : EDITED,
        payload : {[nav]:data},
    }
}
export const toggleEditing = (data,nav) => {
    return{
        type : TOGGLE
    }
}