import gql from "graphql-tag";

export const loginQuery = gql`
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
