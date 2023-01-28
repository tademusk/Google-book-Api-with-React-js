import React, {useEffect , useState} from 'react';
import "./Home.scss";
import Navbar from './Navbar';
import Featured from './Featured'
import List from './List';
import axios from 'axios';

const Home = () => {

const [bookData, setBookData] = useState([])
const [javaData, setJavaData] = useState([])
const [pythonData, setPythonData] = useState([])
const [phpData, setPhpData] = useState([])
const [cplusplusData, setCplusplusData] = useState([])

    useEffect(() => {
        

        axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyC7Ca6MFrZBfPzQOof5axcHUmH_nUXBZfs&maxResults=15')
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err))

        axios.get('https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyC7Ca6MFrZBfPzQOof5axcHUmH_nUXBZfs&maxResults=15')
        .then(res=>setJavaData(res.data.items))
        .catch(err=>console.log(err))

        axios.get('https://www.googleapis.com/books/v1/volumes?q=python&key=AIzaSyC7Ca6MFrZBfPzQOof5axcHUmH_nUXBZfs&maxResults=15')
        .then(res=>setPythonData(res.data.items))
        .catch(err=>console.log(err))

        axios.get('https://www.googleapis.com/books/v1/volumes?q=php&key=AIzaSyC7Ca6MFrZBfPzQOof5axcHUmH_nUXBZfs&maxResults=15')
        .then(res=>setPhpData(res.data.items))
        .catch(err=>console.log(err))

        axios.get('https://www.googleapis.com/books/v1/volumes?q=Cplusplus&key=AIzaSyC7Ca6MFrZBfPzQOof5axcHUmH_nUXBZfs&maxResults=15')
        .then(res=>setCplusplusData(res.data.items))
        .catch(err=>console.log(err))

    } , [])
    return (
        <div className="home">
            <Navbar name = 'home' />
            <div className="space"></div>  
            {/* <Featured /> */}
            <List book = {bookData} title = "javaScript Books" />
            <List book = {javaData} title = "oop (Java) Books" />
            <List book = {pythonData} title = "Python Books" />
            <List book = {phpData} title = "php Books" />
            <List book = {cplusplusData} title = "C++ Books" />
        </div>
    )}

    export default Home