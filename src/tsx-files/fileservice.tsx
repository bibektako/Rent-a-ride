

export const uploadImage = (image,postId) => {
    const formDate = new FormData()
    formDate.append("image",image)
    return privateAxios.post(`/post/image/upload/${postId}`,formDate,{
        headers:{
            'Content-Type':'multipart/form-data'
        }

    })
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error creating comment:', error);
            throw error;
        });
};




export const deletePostService = (postId) => {
    let url = `/posts/${postId}`;

    return privateAxios.delete(url)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error deleting post:', error);
            throw error;
        });
};

export const updatePostService = (post,postId) => {
    console.log(post)
    let url = `/posts/${postId}`;

    return privateAxios.put(url,post)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error updating post:', error);
            throw error;
        });
};


