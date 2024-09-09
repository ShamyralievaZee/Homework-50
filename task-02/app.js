const Header = ({header}) =>{
    return (
      <header>{header}</header>
    );
};

const Sidebar = () =>{
    return(
        <aside id="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </aside>
    );
};

const Content = ({title, quote}) =>{
    return(
        <div id="content">
            <h2>{title}</h2>
            <p>{quote}</p>
            <img src="https://via.placeholder.com/600x400" alt="Placeholder"/>
        </div>
    );
}

const Footer = () =>{
    return(
      <footer>
          <p>&copy; All rights reserved 2024</p>
      </footer>
    );
};

const App = () =>(
    <div id="mainContainer">
        <Header header="Welcome to watch cozy autumn cartoon series!"/ />
        <div id="layout">
            <Sidebar />
            <Content title="Your best movies channel!" quote="Movies are like an expensive form of therapy for me. Tim Burton"/>
        </div>
        <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));