// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate(); // Initialize navigation function

//   return (
//     <div className="app">
//       <div className="card">
//         <h2>Welcome</h2>
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png" 
//           alt="BIT Logo" 
//           className="logo"
//         />
//         <h3>Reward Points Dashboard</h3>
//         <button className="sign-in-button" onClick={() => navigate('/First')}>
//           Sign in
//         </button>
//         <p className="sign-in-text">Sign in with your BIT Account</p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="app">
      <div className="card">
        <h2>Welcome</h2>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png" 
          alt="BIT Logo" 
          className="logo"
        />
        <h3>Reward Points Dashboard</h3>
        <button className="sign-in-button" onClick={() => navigate('/signup')}>
          Sign in
        </button>
        <p className="sign-in-text">Sign in with your BIT Account</p>
      </div>
    </div>
  );
};

export default Login;
