import { useState, useRef, useEffect, useReducer} from "react";
import { db } from "../firebaseInit";
import {collection, addDoc, doc, setDoc, getDocs, onSnapshot, deleteDoc } from "firebase/firestore"

function blogsReducer(state, action){
    switch(action.type){
        case "ADD":
            return [action.blog, ...state];
        case "REMOVE":
            return state.filter((blog, index) => index !== action.index);
        default:
            return [];
    }

}
//Blogging App using Hooks
export default function Blog(){

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [formData, setFormData] = useState({title:"", content:""})
    const [blogs, setBlogs] = useState([]);
    const [state, dispatch] = useReducer(blogsReducer, []);
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    // useEffect(() => {
    //     if(blogs.length && blogs[0].title){
    //         document.title = blogs[0].title;
    //     }else{
    //         document.title = "No Blogs!!!"
    //     }
    // })


    useEffect(() => {

        // async function fetchData(){
        //     const snapShot = await getDocs(collection(db, "blogs"));
        //     // console.log(snapShot);

        //     const blogs = snapShot.docs.map((doc) => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     console.log(blogs);
        //     setBlogs(blogs);
        // }
        // fetchData();

        const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {

            const blogs = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log(blogs);
            setBlogs(blogs);
        })


    }, []);
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    async function handleSubmit(e){
        e.preventDefault();

        //setBlogs([{title: formData.title, content:formData.content}, ...blogs]);
        dispatch({type: "ADD", blog:{title: formData.title, content:formData.content}});
        setFormData({title: "", content: ""});
        titleRef.current.focus();

        const docRef = doc(collection(db, "blogs"))
        // await addDocs(docRef,{
        await setDoc(docRef,{
        title: formData.title,
        content: formData.content,
        createdOn:new Date()
    });

    }


    async function removeBlog(id){
        // setBlogs(blogs.filter((blog,index) => 
        //  i !== index 
        //  ))

        // dispatch({type:"REMOVE", index:i})

        const docRef = doc(db, "blogs", id);
        await deleteDoc(docRef);
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                        placeholder="Enter the Title of the Blog here.."
                        value={formData.title}
                        ref = {titleRef}
                        onChange={(e) => {
                            setFormData({title: e.target.value, content: formData.content});
                        }}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                        placeholder="Content of the Blog goes here.."
                        value={formData.content}
                        required
                        onChange={(e) => {
                            setFormData({title: formData.title, content: e.target.value});
                        }}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        
        {blogs.map((blog, i) => (
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <div className="blog-btn">
                    <button onClick={() => removeBlog(blog.id)} className="btn remove">
                        Delete
                    </button>
                </div>
            </div>
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
