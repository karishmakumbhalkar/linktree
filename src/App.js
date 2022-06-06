import "./App.css";

import LinkCard from "./LinkCard/LinkCard";

function App() {
  const data = [

    {
      title: "github",
      tagline: "Follow me on github",
      username: "karishmakumbhalkar",
      link: "https://github.com/karishmakumbhalkar"
    },
    {
      title: "linkedin",
      tagline: "Follow me on linkedin",
      username: "karishmakumbhalkar",
      link: "https://linkedin.com/karishmakumbhalkar"
    },
    

  ];

  return (
    <div className="container">
      <h3 className="app-title">Linktree-Alt</h3>

      {
        data.map((cardinfo) => {
          return (
            <LinkCard
              title={cardinfo.title}
              tagline={cardinfo.tagline}
              username={cardinfo.username}
              link={cardinfo.link}
            />
          );
        })
      }
    </div>
  );
}

export default App;
