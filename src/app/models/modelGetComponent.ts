
/**
 * This interface represents a User object with a single property 'String' of type string.
 * It can be used to define the structure of user data in the application.
 */
export interface User {
    name : string;
    profession : string;
    email : string;
}

/**
 * This interface represents a UserNameWithObject object that contains a 'name' property of type string and a nested 'userResponse' object with 'message' and 'page' properties, both of type string.
 * It can be used to define the structure of user data that includes additional response information in the application.
 */
export interface UserNameWithObject {
    name : string;
    userResponse : {
        message : string;
        page : string;
    }
}

export interface ResponseAPI {
    message: string;
    page: string;
}