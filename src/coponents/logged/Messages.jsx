import {
    Grid,
    Paper,
    Divider,
    TextField,
    List,
    ListItem,
    ListItemText,
    Fab,
    Button
} from "@mui/material";

// import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from 'react';
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Messages = function () {
    const [conversations, setConversations] = useState([]);
    const [actualConversation, setActualConversation] = useState([]);
    const userId = localStorage.getItem("userId");
    const message = useRef("");

    const getConversations = useCallback(() => {
        const URL = "http://localhost:8010";
        const userId = localStorage.getItem("userId");
        const authorizationToken = localStorage.getItem("authorizationToken");
        fetch(URL + "/message/api/v1/messages/conversations/" + userId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorizationToken
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setConversations(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Nie udało się załadować konwersacji");
            });
    }, []);

    useEffect(() => {
        getConversations();
    }, [getConversations]);

    useEffect(() => {
        console.log("Pobieranie konwersacji");
    }, [actualConversation]);

    const getActualConversation = useCallback((receiverId) => {
        const URL = "http://localhost:8010";
        const userId = localStorage.getItem("userId");
        const authorizationToken = localStorage.getItem("authorizationToken");
        fetch(URL + "/message/api/v1/messages/" + userId + "/conversation/" + receiverId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorizationToken
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setActualConversation(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Nie udało się załadować konwersacji");
            });
    }, []);

    const sendMessage = (receiverId) => {
        const URL = "http://localhost:8010";
        const userId = localStorage.getItem("userId");
        const authorizationToken = localStorage.getItem("authorizationToken");
        const data = new FormData();
        // for (const item of attachments) {
        //     data.append('attachments', item);
        // }
        data.append('receiverId', receiverId);
        data.append('senderId', userId);
        data.append('message', message.current.value);
        fetch(URL + "/message/api/v1/messages", {
            method: "POST",
            body: data,
            headers: {
                'Authorization': authorizationToken
            }
        }).then((data) => {
            if (data.status > 299) {
                alert("Coś poszło nie tak, nie udało sie wysłać wiadomości");
            } else {
                alert("Pomyślnie wysłano wiadomość");
            }
        })
            .catch((error) => {
                console.error('Error:', error);
                alert("Coś poszło nie tak, nie udało sie wysłać wiadomości");
            });
    };

    return (
        <div className="searchBG">
            <div className="searchBar">
                <Grid container>
                    <Grid container component={Paper}>
                        <Grid
                            item
                            xs={3}
                            sx={{
                                borderStyle: "solid",
                                borderWidth: "2px",
                                borderColor: "rgba(34, 101, 151, 0.1)",
                            }}
                        >
                            <Divider />
                            <Divider />
                            <List>
                                {
                                    !!conversations && conversations.map(conversation => (
                                        <ListItem
                                        >
                                            <Button
                                                onClick={() => getActualConversation(conversation.receiverId)}>
                                                <h5>Przejdź do konwersacji</h5>
                                            </Button>
                                            <ListItemText primary={conversation.receiverName}>Nieznany użytkownik</ListItemText>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                        <Grid item xs={9} className="messageArea">
                            <List>
                                {
                                    !!actualConversation && (
                                        actualConversation.map(message => (
                                            <ListItem
                                                sx={message.senderId == userId ?
                                                    { backgroundColor: "rgba(34, 101, 151,0.1)" } :
                                                    { backgroundColor: "rgba(50, 10, 151,0.1)" }}
                                            >
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <ListItemText align={message.senderId == userId ? "right" : "left"} primary={message.message} />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <ListItemText align={message.senderId == userId ? "right" : "left"} secondary={new Date(message.sendDate).toLocaleString()} />
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                        ))
                                    )
                                }
                            </List>
                            <Divider />
                            {!!actualConversation.length != 0 && (
                                <Grid
                                    container
                                    direction="row"
                                    align="right"
                                    spacing={3}
                                    padding={1}
                                >
                                    <Grid item xs={10}>
                                        <TextField
                                            id="outlined-basic-email"
                                            label="Napisz wiadomość"
                                            fullWidth
                                            inputRef={message}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <Fab aria-label="add">
                                            <AttachFileIcon />
                                        </Fab>
                                    </Grid>
                                    <Grid item>
                                        <Fab color="primary" aria-label="send">
                                            <SendIcon onClick={() => sendMessage(actualConversation[0].senderId == userId ? actualConversation[0].receiverId : actualConversation[0].senderId)} />
                                        </Fab>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Messages;