import axios from 'axios';
const token = localStorage.getItem("token");


export const GET_USER = "GET_USER";

export const getUser = () => {
    return (dispatch) => {
        return  axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    })
                    .then((res) => {
                        dispatch({type:GET_USER, payload:res.data})
                    })
                    .catch(err => console.log("no Token", err));
    }
}

