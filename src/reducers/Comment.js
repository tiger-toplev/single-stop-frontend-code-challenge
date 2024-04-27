import ActionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
  comments: []
}

export default function Comment(state = initialState, action) {
  let { payload } = action;

  switch (action.type) {    
    case ActionTypes.GET_ALL_COMMENTS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_COMMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.CREATE_COMMENT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ALL_COMMENTS.SUCCESS:
      return {
        ...state,
        comments: Object.keys(payload).map((key) => {
          return payload[key];
        }),
        loading: false,
      };
    case ActionTypes.CREATE_COMMENT.SUCCESS:
      return {
        ...state,
        comments: [...state.comments, payload],
        loading: false,
      };
    case ActionTypes.DELETE_COMMENT.SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload.id),
        loading: false,
      };
    default:
      return state;
  }
}