import { useState } from "react";

function NewPost() {
    const [postType, setPostType] = useState("Question");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [articleText, setArticleText] = useState("");
    const [tags, setTags] = useState("");

    function handlePost() {
        const tagList = tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);

        if (!title.trim()) {
            alert("Please enter a title.");
            return;
        }

        if (postType === "Question" && description.trim().length < 10) {
            alert("Please describe your problem using at least 10 characters.");
            return;
        }

        if (postType === "Article" && abstract.trim().length < 10) {
            alert("Please enter an abstract using at least 10 characters.");
            return;
        }

        if (postType === "Article" && articleText.trim().length < 10) {
            alert("Please enter article text using at least 10 characters.");
            return;
        }

        if (tagList.length > 3) {
            alert("Please enter no more than 3 tags.");
            return;
        }

        alert(`Your ${postType.toLowerCase()} has been submitted successfully!`);
    }

    return (
        <main className="new-post">
            <h2 className="post-heading">New Post</h2>

            <div className="post-type">
                <span>Select Post Type:</span>

                <label>
                    <input
                        type="radio"
                        name="postType"
                        checked={postType === "Question"}
                        onChange={() => setPostType("Question")}
                    />
                    Question
                </label>

                <label>
                    <input
                        type="radio"
                        name="postType"
                        checked={postType === "Article"}
                        onChange={() => setPostType("Article")}
                    />
                    Article
                </label>
            </div>

            <h3 className="section-heading">
                What do you want to ask or share
            </h3>

            <p className="post-description">
                This section is designed based on the type of the post.
                It could be developed by conditional rendering.
                <span>
                    {" "}For {postType === "Question" ? "a question" : "an article"},
                    the following section would be appeared.
                </span>
            </p>

            <div className="form-row">
                <label htmlFor="post-title">Title</label>
                <input
                    id="post-title"
                    type="text"
                    placeholder={
                        postType === "Question"
                            ? "Start your question with how, what, why, etc."
                            : "Enter a descriptive title"
                    }
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>

            {postType === "Question" ? (
                <div className="form-field">
                    <label htmlFor="problem">Describe your problem</label>
                    <textarea
                        id="problem"
                        className="question-textarea"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
            ) : (
                <>
                    <div className="form-field">
                        <label htmlFor="abstract">Abstract</label>
                        <textarea
                            id="abstract"
                            className="abstract-textarea"
                            placeholder="Enter a 1-paragraph abstract"
                            value={abstract}
                            onChange={(event) => setAbstract(event.target.value)}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="article-text">Article Text</label>
                        <textarea
                            id="article-text"
                            className="article-textarea"
                            placeholder="Enter your article text"
                            value={articleText}
                            onChange={(event) => setArticleText(event.target.value)}
                        />
                    </div>
                </>
            )}

            <div className="form-row tags-row">
                <label htmlFor="post-tags">Tags</label>
                <input
                    id="post-tags"
                    type="text"
                    placeholder={`Please add up to 3 tags to describe what your ${postType.toLowerCase()} is about, e.g., Java`}
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                />
            </div>

            <div className="post-button-container">
                <button
                    type="button"
                    className="submit-post"
                    onClick={handlePost}
                >
                    Post
                </button>
            </div>
        </main>
    );
}

export default NewPost;