import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Post } from '../Post/Post';

import posts from '../../data/mock-posts';

import '../../global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts && posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author} 
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
