import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import {PostsPropsType} from './PostsContainer';




export const Posts:React.FC<PostsPropsType> = (props) => {

	const mappingPosts = props.data.map(p => <Post key={p.id} id={p.id} postTitle={p.postTitle} likesCount={p.likesCount}/>)

	const onClickHandler = () => {
		props.addPost()

	}
	let onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
		props.updateNewPostText(event.currentTarget.value)
	}

	return (
		<>
			<textarea value={props.newPostText}  onChange={onChangeHandler}/>
			<button onClick={ onClickHandler }>Add post</button>
			<div>
				my posts:
				<div>
					{mappingPosts}
				</div>
			</div>
		</>
	);
};

