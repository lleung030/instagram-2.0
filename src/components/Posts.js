import Post from './Post';

const posts = [
    {
        id: '123',
        username: 'lleung030',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'this is pretty sweet stuff!'
    },
    {
        id: '125',
        username: 'jenjenbutler',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'you are cute!'
    },
    {
        id: '124',
        username: 'jackinthebox',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'whatup whatup!'
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} id={post.id} 
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts
