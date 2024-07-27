import PasswordInput from "./PasswordInput";
const LoginForm = () =>{
    return (
    <form action="">
        <div>
            <label className="labelName" htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username"/>
        </div>
        <PasswordInput></PasswordInput>
        <div>
            <button type="button">LogIn</button>
        </div>

    </form>)
}
export default LoginForm;