const getllAllPosts = async()=>{
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  } catch (error : unknown) {
    
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home