
// import {CREATE_MENU,DELETD_MENU,UPDATA_MENU,GET_MENU} from "../actions/menu"
// const initialState = {
//     menu: [],
//     loading: false,
//     error: false,
//     selectedMenu: {},
//     owner: []
// }
// export const menuReducer = (state= initialState,action)=>{
//     switch (action.type) {
//         case SET_MENU:
//             return {
//                 ...state,
//                 menu:[ ...state.menu, action.payload]
//                  }
//             break;
//         case GET_MENU:{
//             const selectedMenu = state.menu.find((men)=> menu.id === action.payload.id)
//         }
//             return{...state,selectedMenu} 
//             break;
//         case DelETD_MENU:{
//             const DeletMenu = state.menu.filter((men)=> men.id !=0 action.payload.id )
//         }
//             return{...state,
//                 menu:DeletMenu} 
//             break;  
                 
//         default:

//             break;
//     }
// }