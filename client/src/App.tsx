import ClickCounter from './ClickCounter';
import './styles.css';

export const App = () => {
  return (
    <>
      <h1>Helloasd- {process.env.NODE_ENV} - {process.env.name}</h1>
      <ClickCounter />
    </>
  )
}
