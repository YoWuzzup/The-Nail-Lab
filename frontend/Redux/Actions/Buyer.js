
export const buyerInfo = (data) => async (dispatch) => {
    dispatch({type: 'GET_BUYER_INFO', payload: data })
}