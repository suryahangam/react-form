import React, {useState, useEffect } from 'react';
import './index.css';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [interests, setInterests] = useState([]);
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubscriptionChange = () => {
    setSubscribe(!subscribe);
  };

  const handleInterestChange = (selectedInterests) => {
    setInterests(selectedInterests);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleImageUpload = (event) => {
    // Handle profile picture upload logic
    const picture = event.target.files[0];
    setProfilePicture(picture);
  };

  useEffect(() => {
    console.log('Form Data:', {
      name,
      email,
      subscribe,
      interests,
      bio,
      profilePicture,
    });
  }, [name, email, subscribe, interests, bio, profilePicture]);

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>
        Subscribe to Newsletter:
        <input
          type="checkbox"
          checked={subscribe}
          onChange={handleSubscriptionChange}
        />
      </label>

      <select
        multiple
        value={interests}
        onChange={(e) => handleInterestChange(Array.from(e.target.selectedOptions, (option) => option.value))}
      >
        <option value="Reading">Reading</option>
        <option value="Travelling">Travelling</option>
        <option value="Singing">Singing</option>
      </select>

      <textarea
        placeholder="Write a short bio..."
        value={bio}
        onChange={handleBioChange}
      ></textarea>

      <input type="file" onChange={handleImageUpload} />
      <button class="button" type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
