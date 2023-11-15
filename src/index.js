import React from 'react';
import ReactDOM from 'react-dom';
import UserProfileForm from './UserProfileForm';
import './index.css';


const App = () => {
  return (
    <div class="container">
      <h1>User Profile Form</h1>
      <UserProfileForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

