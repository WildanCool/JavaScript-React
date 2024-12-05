import Header from "../Fragments/header";
import Form from "../Fragments/form";
import Footer from "../Fragments/footer";

export default function RegistTemplate() {
    return (
        <div className="flex justify-center">
      <div className="border border-black px-4 py-2 w-[350px] bg-gray-100">
        <Header judul="Register" pembuka="Silahkan Registrasi terlebih dahulu" />
        <Form label="First Name" input="Fill the Firts Name" type="text" />
        <Form label="Second Name" input="Fill the Second Name" type="text" />
        <Form label="Email" input="Fill the Email" type="email" />
        <Form label="Password" input="Fill the Password" type="password" />
        <Footer p="sudah punya akun?" span="Login" button="Register"/>
      </div>
    </div>
    )
}