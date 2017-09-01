import App from 'core/App';
import * as index from 'index';

const app = new App();

index.renderWithHotReload(app);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/AppContainer.jsx', () => {
        index.renderWithHotReload(app);
    });
}

