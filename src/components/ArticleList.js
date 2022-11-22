import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const renderBlogs = posts.map((post) => {
        return <Article key={post.id} {...post}/>
    })
    return <>
            <main>
                {renderBlogs}
            </main>
           </>
}

export default ArticleList;