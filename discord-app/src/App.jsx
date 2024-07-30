import "./App.css";
import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div class="App">
      <div class="navigation">
        <img id="logo" src={discordLogo} />
        <img id="menu" src={menuIcon} />
      </div>
      <h2>IMAGINE A PLACE...</h2>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div class="images">
        <div class="buttons">
          <a href="https://discord.com/download" target="_blank">
            <button id="download">Download for Mac</button>
          </a>
          <a href="https://discord.com/" target="_blank">
            <button id="open">Open Discord in your browser</button>
          </a>
        </div>
        <div>
          <img src={discordBackground} />
        </div>
      </div>
    </div>
  );
}

export default App;
