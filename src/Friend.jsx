export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className="Box">
      <h1>Name : {name} </h1>
      <p>Email :{email}</p>
    </div>
  );
}
