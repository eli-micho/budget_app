import {
    AuthFormContainer,
    LogoContainer,
    Logo,
    AuthInput,
    LoginForm,
    AuthSocialMediaHeader,
    AuthSocialMediaButton,
    AuthSocialMediaContainer,
    AuthLoginField,
} from './AuthStyles';
import Button from '../../shared/components/Button/Button';
import { FaFacebook, FaGoogle, FaRegUserCircle, FaLock } from 'react-icons/fa';
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
                <AuthLoginField>
                    <span>
                        <FaRegUserCircle />
                    </span>
                    <AuthInput placeholder="Email" type="text" />
                </AuthLoginField>

                <AuthLoginField>
                    <span>
                        <FaLock />
                    </span>
                    <AuthInput placeholder="Password" type="password" />
                </AuthLoginField>

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

                <AuthSocialMediaContainer>
                    <AuthSocialMediaButton>
                        <FaGoogle />
                    </AuthSocialMediaButton>
                    <AuthSocialMediaButton>
                        <FaFacebook />
                    </AuthSocialMediaButton>
                </AuthSocialMediaContainer>
            </LoginForm>
        </AuthFormContainer>
    );
}
