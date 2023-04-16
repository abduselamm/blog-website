import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('abduselam');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true)

        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/JSON"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                 <label>Blog Body:</label>
                <textarea 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                required
                ></textarea>
                
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                
                >
                    <option>abduselam</option>
                    <option>nesredin</option>
                </select>
                {!isPending && <button type="submit">add</button>}
                {isPending && <button type="submit" disabled>adding..</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
      );
} 
 
export default Create;