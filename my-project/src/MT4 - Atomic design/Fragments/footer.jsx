import Button from "../Component/button";
export default function Footer({p, span, button}) {
  return (
    <div>
      <Button button={button} />
      <p>
        {p} <span className="text-blue-800">{span}</span>
      </p>
    </div>
  );
}
