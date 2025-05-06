import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike}>
      {liked ? 'Đã thích' : 'Thích'}
    </button>
  );
}

export default LikeButton;
