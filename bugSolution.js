```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList/>} >
          <Route path=':userId' element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function UsersList() {
  return (
    <div>
      <h2>Users List</h2>
      {/* Render user list here if needed */}
    </div>
  );
}

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
    </div>
  );
}
export default App;
```