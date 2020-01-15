import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Github user</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Save</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7799184?s=460&v=4" alt="Rafael Guedes"/>
              <div className="user-info">
                <strong>Rafael Guedes</strong>
                <span>Python, Matlab</span>
              </div>
            </header>
            <p>Oceanographer data scientist</p>
            <a href="https://github.com/rafa-guedes">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7799184?s=460&v=4" alt="Rafael Guedes"/>
              <div className="user-info">
                <strong>Rafael Guedes</strong>
                <span>Python, Matlab</span>
              </div>
            </header>
            <p>Oceanographer data scientist</p>
            <a href="https://github.com/rafa-guedes">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7799184?s=460&v=4" alt="Rafael Guedes"/>
              <div className="user-info">
                <strong>Rafael Guedes</strong>
                <span>Python, Matlab</span>
              </div>
            </header>
            <p>Oceanographer data scientist</p>
            <a href="https://github.com/rafa-guedes">Access github profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7799184?s=460&v=4" alt="Rafael Guedes"/>
              <div className="user-info">
                <strong>Rafael Guedes</strong>
                <span>Python, Matlab</span>
              </div>
            </header>
            <p>Oceanographer data scientist</p>
            <a href="https://github.com/rafa-guedes">Access github profile</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
