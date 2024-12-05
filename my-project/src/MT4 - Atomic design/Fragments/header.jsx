import H1 from "../Component/h1";
import H3 from "../Component/h3";

export default function Header({ judul, pembuka }) {
  return (
    <div className="mb-1">
      <H1 judul={judul} />
      <H3 pembuka={pembuka} />
    </div>
  );
}
