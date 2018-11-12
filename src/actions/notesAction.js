import {GET_NOTES, NOTES_STATUS} from '../actionTypes'
import {database} from '../firebase'


export const getNotes = ()=> dispatch=>{
    dispatch({
        type: NOTES_STATUS,
        payload: true
    })
    database.on('value', snapshot => {
        dispatch({
            type: GET_NOTES,
            payload: snapshot.val()
        })
     
        dispatch({
            type: NOTES_STATUS,
            payload: -1
        })
    }, 
           ()=>{ dispatch({
                type: NOTES_STATUS,
                payload:-1
            })

    })
}

export const saveNote=(note)=>dispatch=>{
    database.push(note)
}

export const deleteNote = (id) => dispatch => {
    database.child(id).remove()
}