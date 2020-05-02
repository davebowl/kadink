import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
        mutation login($input: UsersPermissionsLoginInput!) {
            login(input: $input) {
            jwt
            user {
                id
                email
            }
        }
    }
`;
