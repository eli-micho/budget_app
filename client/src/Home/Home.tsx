import { MdAccountBalanceWallet } from 'react-icons/md';

export default function Home() {
    return (
        <div className="home">
            <div className="auth-form">
                <div className="logo-container">
                    <span>
                        <MdAccountBalanceWallet />
                    </span>
                    <span>Budgyt</span>
                </div>
                <form>
                    <div className="login-fields">
                        <div className="login-field-container">
                            <span></span>
                            <label>
                                <input placeholder="Username" />
                            </label>
                            <div className="error"></div>
                        </div>

                        <div className="login-field-container">
                            <span></span>
                            <label>
                                <input placeholder="Password" />
                            </label>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="sign-up-container">
                        <span>
                            Don&#39;t have an account? <button>Sign Up!</button>
                        </span>
                    </div>
                    <div className="login-buttons">
                        <button type="submit">Login</button>
                        <button className="sample-account">
                            Sample Account
                        </button>
                    </div>
                </form>
                <div className="social-media-container">
                    <div className="social-media-title">
                        <hr />
                        Login with social media
                        <hr />
                    </div>
                    <div className="social-media-login">
                        <div className="google">Google</div>
                        <div className="google">Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
