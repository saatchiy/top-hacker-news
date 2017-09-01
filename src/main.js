import App from 'core/App';
import * as index from 'index';
import AppContainer from 'gui/views/containers/AppContainer';

const app = new App();

index.renderWithHotReload(app);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./gui/views/containers/AppContainer.jsx', () => {
        index.renderWithHotReload(app);
    });
}

