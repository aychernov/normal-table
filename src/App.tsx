import React from 'react';
import Table from './components/Table/Table'
import users from "./components/Table/users.json";
import posts from "./components/Table/posts.json";
import comments from "./components/Table/todos.json";
import './App.css';
import {IUser} from "./components/Table/Types";

function App() {
    //Data for tables headers and key json
    const usersColumns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "User Name",
                accessor: "username"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Address",
                accessor: "address.street"
            },
            {
                Header: "Sity",
                accessor: "address.city"
            },
        ],
        []
    );

    const postsColumns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Text example",
                accessor: "body"
            }
        ],
        []
    );

    const commentsColumns = React.useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "What to do",
                accessor: "body"
            },
        ],
        []
    );

    // Data for tables rows
    const dataUsers = React.useMemo<IUser[]>(() => users, []);
    const dataPosts = React.useMemo(() => posts, []);
    const dataComments = React.useMemo(() => comments, []);

    return (
        <div className='App'>
            <Table columns={usersColumns} data={dataUsers}/>
            <Table columns={commentsColumns} data={dataComments}/>
            <Table columns={postsColumns} data={dataPosts}/>

        </div>

    );
}

export default App;
