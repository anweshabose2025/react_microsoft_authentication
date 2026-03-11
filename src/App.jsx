// App.jsx

import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { InteractionStatus } from "@azure/msal-browser";

function App() {

  const { instance, accounts, inProgress } = useMsal();
  const account = accounts.length > 0 ? accounts[0] : null;
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (!account && inProgress === InteractionStatus.None) {
      instance.loginRedirect();
    }
  }, [account, inProgress, instance]);

  useEffect(() => {
  if (account) {
    fetch("https://cyber-training-functions-dqbgf2acc3hgbxbt.eastus-01.azurewebsites.net/api/getTrainingModules")
      .then(res => res.json())
      .then(data => setModules(data))
      .catch(err => console.error(err));
  }
  }, [account]);

  const logout = () => {
    instance.logoutRedirect();
  };

  if (account) {
    return (
      <div>
        <h1>Cyber Security Training Portal</h1>
        <h5>Microsoft Authentication - Azure Storage accounts (Blob Storage) - Azure Function (Azure Function App) - Hosting in Azure (Azure App service)</h5>
        <h2>Welcome {account.name}</h2>
        <h3>Training Modules</h3>

        <ul>
          {modules.map((module, index) => (
            <li key={index}>
              <a href={module.url} target="_blank">
                {module.title} ({module.type})
              </a>
            </li>
          ))}
        </ul>

        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return <div>Redirecting to Microsoft Login...</div>;
}

export default App;