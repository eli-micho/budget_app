import {
    AuthFormContainer,
    LogoContainer,
    Logo,
    AuthInput,
    LoginForm,
    AuthSocialMediaHeader,
    AuthSocialMediaButton,
} from './AuthStyles';
import Button from '../../shared/components/Button/Button';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';

export default function AuthForm() {
    return (
        <AuthFormContainer>
            <LogoContainer>
                <Logo>
                    <MdAccountBalanceWallet />
                </Logo>
                <h1>Budgyt</h1>
            </LogoContainer>
            <LoginForm>
                <AuthInput placeholder="Email" type="text" />
                <AuthInput placeholder="Password" type="password" />

                <span>
                    Don&#39;t have an account? <button>Sign Up!</button>
                </span>

                <Button>Login</Button>
                <Button>Sample Account</Button>

                <AuthSocialMediaHeader>
                    <hr />
                    Or login with
                    <hr />
                </AuthSocialMediaHeader>

                <AuthSocialMediaButton>
                    <FaGoogle />
                </AuthSocialMediaButton>
                <AuthSocialMediaButton>
                    <FaFacebook />
                </AuthSocialMediaButton>
            </LoginForm>
        </AuthFormContainer>
    );
}
