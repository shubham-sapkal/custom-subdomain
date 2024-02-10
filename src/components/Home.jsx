import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("");

    console.log("HostName: " + window.location.hostname);

    const nameChangeHandler = e =>
    {
        setName(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // console.log("Function called!");

        // navigate('shubham.localhost:3000/', {replace: true} );

        

        window.location.hostname = `${name}.${window.location.hostname}`;
    }

    return (
        <>
            <h1>Home Page</h1>
            <form onSubmit={submitHandler} >
                <label htmlFor="username">Enter Your UserName:</label><br />
                <input type="text" onChange={nameChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default Home;