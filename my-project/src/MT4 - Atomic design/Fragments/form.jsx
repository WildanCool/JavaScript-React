import Label from "../Component/label";
import Input from "../Component/input";

export default function Form({ label, input, type }) {
  return (
    <div className="mb-5">
      <Label label={label} />
      <Input input={input} type={type} />
    </div>
  );
}
