import { Greeting, UserProfile } from "./dari.jsx";

export default function App() {
  const userInfo = {
    username: "jhondoe",
    age: 20,
    location: "New York",
  };
  return (
    <>
      <Greeting name="Alice" massage="Welcome to React!" />

      <div>
        <UserProfile {...userInfo} />
      </div>
    </>
  );
}
