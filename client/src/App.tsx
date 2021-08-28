import ClickCounter from './ClickCounter';
import './styles.css';

export const App = () => {
    const name = 'Elijah';
    return (
        <>
            <h1>
                Hello- {name}
                {process.env.NODE_ENV} - {process.env.name}
            </h1>
            <ClickCounter />
        </>
    );
};
