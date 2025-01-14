'use client';
import React, { useState, useEffect } from 'react';

interface CommentProps {
  postId: string;
}

const Comment: React.FC<CommentProps> = ({ postId }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

  // Load comments for the specific post from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${postId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [postId]);

  // Function to add a new comment
  const addComment = () => {
    if (name.trim() !== '' && comment.trim() !== '') {
      const updatedComments = [...comments, { name, comment }];
      setComments(updatedComments);
      setName('');
      setComment('');
      localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments)); // Save to localStorage with postId
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mt-4 text-purple-400">Comment Box</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="border border-purple-200 mt-3 w-full p-2 transition duration-300 ease-in-out focus:border-purple-700"
      />
      <br />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment"
        className="border border-purple-200 mt-3 w-full p-2 transition duration-300 ease-in-out focus:border-purple-700"
      />
      <br />
      <button
        className="bg-purple-400 text-white w-full mt-3 p-2 transition duration-300 ease-in-out hover:bg-purple-500"
        onClick={addComment}
      >
        Add Comment
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {comments.map((data, index) => (
              <li key={index} className="border-b pb-2">
                <strong>{data.name}:</strong> {data.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comment;
