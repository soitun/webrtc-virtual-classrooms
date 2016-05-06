
export default function LoginReducer(state = {}, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                username: action.username,
                roomName: action.roomName,
                token: action.token
            };
        default:
            return state;
    }
}