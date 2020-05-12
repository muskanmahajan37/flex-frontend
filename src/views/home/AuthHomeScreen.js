import React, { useState } from "react";
import axios from "axios";
// Styling
import "../../style/home.css";
// Components
import Header from "../../components/headers/Header";
import Card from "../../components/Card";
// Redux
import { connect } from "react-redux";
const AuthHomeScreen = ({ userId }) => {
    const [name, setemri] = useState(null);
    const [description, setdescription] = useState(null);
    const [category_id, setkategoria] = useState(null);
    const [price, setqmimi] = useState(null);
    const [image, setimage] = useState(null);
    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        setimage(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category_id", category_id);
        formData.append("user_id", userId);
        formData.append("price", price);
        formData.append("image", image);
        axios
            .post("http://localhost:8000/service", formData, {
                headers: {
                    "Content-Type": "Application/json",
                },
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log("My err: ", err));
    };
    return (
        <div className="parent">
            <Header />
            <h1>Home screen logged in</h1>
            <form onSubmit={handleSubmit}>
                <label>Emri</label>
                <input type="text" onChange={(e) => setemri(e.target.value)} />
                <br />
                <label>Description</label>
                <input type="text" onChange={(e) => setdescription(e.target.value)} />
                <br />
                <label>Kategori</label>
                <input type="number" onChange={(e) => setkategoria(e.target.value)} />
                <br />
                <label>Qmimi</label>
                <input type="number" onChange={(e) => setqmimi(e.target.value)} />
                <br />
                <label>Foto</label>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    userId: state.auth.user.id,
});
export default connect(mapStateToProps)(AuthHomeScreen);