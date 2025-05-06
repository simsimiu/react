import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserDetail from './pages/UserDetail';
import Dashboard from './pages/Dashboard';
import Login from './Login';
import Admin from './Admin';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

{/* Nội dung chương 4 */}

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Trang chủ</Link> | 
          <Link to="/about">Giới thiệu</Link> | 
          <Link to="/contact">Liên hệ</Link> | 
          <Link to="/dashboard">Dashboard</Link> | 
          <Link to="/admin">Admin</Link> | 
          <Link to="/login">Đăng nhập</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import HelloUser from './HelloUser';
// import UserCard from './UserCard';
// import Counter from './Counter';
// import NameForm from './NameForm';
// import UserProfile from './UserProfile';
// import LikeButton from './LikeButton';

// import Clock from './Clock';
// import InputFocus from './InputFocus';
// import ExpensiveCalc from './ExpensiveCalc';
// import { ThemeProvider } from './ThemeContext';
// import ThemedBox from './ThemedBox';

// function App() {
//   return (
//     <div className="App">



//       {/* Nội dung chương 3 */}

//       <ThemeProvider>
//         <div style={{ padding: '20px' }}>
//           <h1>Bài tập cuối chương 3</h1>
//           <Clock />
//           <InputFocus />
//           <ExpensiveCalc />
//           <ThemedBox />
//         </div>
//       </ThemeProvider>

//       {/* Nội dung chương 2 */}
//       <div>
//         <HelloUser name="TokyoAI" />
//       </div>
//       <div>
//         <Profile age={25} />
//       </div>
//       <div>
//         <UserCard name="TokyoAI" age={27} email="email.vn"/>
//         <UserCard name="Sim" age={25} email="email2.vn"/>
//       </div>
//       <div>
//         <h1>Đếm số</h1>
//         <Counter />
//       </div>
//       <div>
//         <h1>Chào mừng!</h1>
//         <NameForm />
//       </div>
//       <div>
//       <h1>Danh sách người dùng</h1>

//       <UserProfile name="Nguyễn Văn A" age={30} job="Lập trình viên" />
//       <LikeButton />

//       <UserProfile name="Trần Thị B" age={25} job="Thiết kế đồ họa" />
//       <LikeButton />

//       <UserProfile name="Phạm Văn C" age={40} job="Giáo viên" />
//       <LikeButton />
//     </div>
//       {/* Nội dung chương 1 */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// console.log("Hello React")

// function Welcome(props) {
//   return <h1>Xin chào, {props.name}</h1>;
// }

// // class Welcome extends React.Component {
// //   render() {
// //     return <h1>Xin chào, {this.props.name}</h1>;
// //   }
// // }
// function Profile(props) {
//   return <p>Tuổi: {props.age}</p>;
// }


// export default App;
