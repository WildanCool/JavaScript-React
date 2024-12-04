// SOAL 1
function Greeting({ name, massage }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{massage}</p>
    </div>
  );
}

// SOAL 2
function UserProfile ({username, age, location}) {
  return(
    <div>
      <h1>username: {username}</h1>
      <p>age: {age}</p>
      <p>location: {location}</p>
    </div>
  )
}

export { Greeting, UserProfile };
