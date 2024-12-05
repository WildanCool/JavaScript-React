import Header from "../Fragments/header";
import Form from "../Fragments/form";
import Footer from "../Fragments/footer";

export default function LoginTemplate() {
  return (
    <div className="flex justify-center">
      <div className="border border-black px-4 py-2 w-[350px] bg-gray-100">
        <Header judul="Login" pembuka="Selamat Datang di Website Kami" />

        <Form label="Username" input="Fill the Username" type="text" />
        <Form label="Password" input="Fill the Password" type="password" />

        <Footer p="belum punya akun?" span="Register" button="Login"/>
      </div>
    </div>
  );
}
