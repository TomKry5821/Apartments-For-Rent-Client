import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext("");

export const UserProvider = ({ children }) => {
    const URL = "http://localhost:8010";
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [id, setId] = useState()
    const [error, setError] = useState()
    const [authorizationToken, setAuthorizationToken] = useState()


    const registerNewUser = function (name, surname, email, password) {
        const body = {
            "name": name,
            "surname": surname,
            "email": email,
            "isActive": true,
            "password": password
        }
        fetch(URL + "/user/api/v1/public/users", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setName(data.name);
                setSurname(data.surname);
                setEmail(data.email);
                setPassword(data.password);
                setAuthorizationToken(data.accessToken);
                setId(data.id);
                setError(null);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError("Error");
            });
    }

    const loginUser = function (email, password) {
        const body = {
            "email": email,
            "password": password
        }
        fetch(URL + "/user/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setEmail(data.email);
                setPassword(data.password);
                setAuthorizationToken(data.accessToken);
                setId(data.id);
                setError(null);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError("Error");
            });
    }

    return (
        <UserContext.Provider
            value={{
                name,
                surname,
                email,
                password,
                id,
                authorizationToken,
                error,
                registerNewUser,
                loginUser
            }}>
            {children}
        </UserContext.Provider>
    )

}