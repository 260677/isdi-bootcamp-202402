import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Post from "./Post";

function Profile() {
    const { username } = useParams(); // Use the username parameter from the URL

    // TODO: Call an API to get posts by username (you can replace this comment with actual API calls)

    // Assuming you want to filter posts authored by the user
    const ownPosts = Post.filter((post) => post.author === username);

    return (
        <>
            <h1>Hello {username}</h1>
            {/* Display the filtered posts */}
            <article>
                {ownPosts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.image}</h2>
                        <p>{post.text}</p>
                    </div>
                ))}
            </article>
        </>
    );
}

export default Profile;