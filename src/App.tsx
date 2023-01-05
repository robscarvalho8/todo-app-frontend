import { Routes } from './routes';
import { Theme, GlobalStyles } from './themes';

export const App = () => {
    return (
        <Theme>
            <GlobalStyles />
            <Routes />
        </Theme>
    );
};
