const initState = {
    posts: [
        {
            "id": '1',
            "title": "I am Sober",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": '2',
            "title": "I am focused",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": '3',
            "title": "I can control myself",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ],
}

function rootReducer(state = initState, action){
    if ( action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id;
        });
        return{
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;