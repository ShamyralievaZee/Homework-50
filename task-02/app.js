const Header = ({ name,logo }) => {
    return (

        <header>
            <img width="30px" src={logo} alt="logo"/> {name}
        </header>
    );
};

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Genres</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Cartoons</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">YA</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Address</a></li>
            </ul>
        </aside>
    );
};

const noPoster = 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';

const Movie = ({poster,name,year}) =>{
    return (
        <a href="#" className='movieWrap'>
            <img width="300px" height="426px" src={!(poster)? noPoster : poster} alt={name}/>
            <h2 className='movieName'>{name}</h2>
            <p className='movieYear'>Year: {year}</p>
        </a>
    );
};

const Content = () => {
    const movies = [
        {poster:'https://m.media-amazon.com/images/I/91XY1nLj1XL._AC_UF1000,1000_QL80_.jpg', name:'The girl from the other side',year: 2019},
        {poster:'https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', name:'Over the garden wall', year:2014},
        {poster:'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg', name:'Coraline, world of Nightmares',year:2009},
        {poster:'https://m.media-amazon.com/images/I/71+XBMfnIML._AC_UF894,1000_QL80_.jpg', name:'Paranorman', year:2012},
        {poster:'https://lumiere-a.akamaihd.net/v1/images/p_frankenweenie2012_20501_06183b98.jpeg?region=0%2C0%2C540%2C810', name:'Frankenweenie',year:2012},
        {poster:'https://m.media-amazon.com/images/M/MV5BNTA4MWQ4NGUtOGQ0MS00M2QyLWE5MDItZWM2YzA0ZDgxZTA2XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg', name:'Wolfwalkers',year:2020},
        {poster:'https://m.media-amazon.com/images/I/81uXO5L9YTL._AC_UF1000,1000_QL80_.jpg', name:'Fantastic Mr.Fox',year:2009},
        {poster:'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/img_4616.jpeg', name:'Beetlejuice', year: 1991},
    ];

    return(
        <div id="content">
            <h3>Movies you need to watch:</h3>
            <p>Movies are like an expensive form of therapy for me. - Tim Burton</p>
            <div className="movieList">
                {movies.map((movie, index) => (
                    <Movie key={index} poster={movie.poster} name={movie.name} year={movie.year}/>
                ))}
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>&copy; All rights reserved 2024</p>
        </footer>
    );
};

const App = () => (
    <div id="mainContainer">
        <Header logo='https://cdn-icons-png.flaticon.com/512/863/863735.png' name="Autumn Movies" />
        <div id="layout">
            <Sidebar />
            <Content title="Your best movies channel!" quote="Movies are like an expensive form of therapy for me. - Tim Burton" />
        </div>
        <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));