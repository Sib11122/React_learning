import './App.css'
import CreatePosts from './components/createPosts'
import SchedulePosts from './components/scheduledPosts'
function App() {
  return (
    <>
      <div className='upper'>
        <h1>Social Media Scheduler</h1>
      <p>Plan and Schedule your Social media content in one place</p>
      </div>
      <div className='container'>
        <div className='left'>
          <h2>Create Post</h2>
          <CreatePosts/>
        </div>
        <div className='right'>
          <h2>Scheduled Posts</h2>
          <SchedulePosts/>
        </div>
      </div>
    </>
  )
}

export default App
