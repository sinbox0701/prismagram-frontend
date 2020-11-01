import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput"
import PostPresenter from "./PostPresenter";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { useMutation } from "react-apollo-hooks";

const PostContainer = ({
    id,
    user,
    files,
    likeCount,
    isLiked,
    comments,
    createdAt,
    caption,
    location
}) => {
    const comment = useInput("");
    const [isLikedS,setIsLiked] = useState(isLiked);
    const [likeCountS,setLikeCount] = useState(likeCount);
    const [currentItem,setCurrentItem] = useState(0);
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE,{
        variables:{postId:id}
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT,{
        variables:{postId:id, text:comment.value}
    });

    const slide = () =>{
        const totalFiles = files.length;
        if(currentItem === totalFiles - 1){
            setTimeout(() => setCurrentItem(0),3000);
        }else{
            setTimeout(() => setCurrentItem(currentItem + 1),3000);
        }

    };
    useEffect(()=>{
        slide();
    },[currentItem]);//currentItem이 변경 될때 마다 작동

    const toggleLike = () => {
        toggleLikeMutation();
        if (isLikedS === true) {
          setIsLiked(false);
          setLikeCount(likeCountS - 1);
        } else {
          setIsLiked(true);
          setLikeCount(likeCountS + 1);
        }
      };

    return (
        <PostPresenter
            user={user}
            files={files}
            likeCount={likeCountS}
            location={location}
            caption={caption}
            isLiked={isLikedS}
            comments={comments}
            createdAt={createdAt}
            newComment={comment}
            setIsLiked = {setIsLiked}
            setLikeCount = {setLikeCount}
            currentItem={currentItem}
            toggleLike={toggleLike}
        />
    );
};

PostContainer.propTypes ={
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ),
    likeCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }).isRequired
        })    
    ).isRequired,
    caption: PropTypes.string.isRequired,
    location: PropTypes.string,
    createdAt: PropTypes.string.isRequired
};

export default PostContainer;