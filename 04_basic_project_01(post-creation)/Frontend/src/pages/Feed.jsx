// yaha hooks(useeffect) is liye used kiea hai jisse api ek baar he call ho nahi to bika hooks used kiye wo multiple time call hoga 

import React, { useState, useEffect } from 'react' 
import axios from 'axios'

const Feed = () => {

    const [post, setpost] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/vlir7gybc/image_IwISOgg1j.jpg",
            caption: "dangerous player"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res)=>{

            setpost(res.data.post)

        })
    },[])

    return (
        <section className='feed-section'>

            <h1>FEED SECTION</h1>

            {
                post.length > 0
                    ? post.map((post) => (
                        <div key={post._id} className="post-card">

                            <img src={post.image} alt="post" />

                            <p>{post.caption}</p>

                        </div>
                    ))
                    : <p>No posts available</p>
            }

        </section>
    )
}

export default Feed