let noPoster = 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';
const Movie = ({poster,name,year}) =>{
    console.log(poster);
    return (
        <a href="#" className='movieWrap'>
                <img width="300px" height="427px" src={!(poster)? noPoster : poster} alt={name}/>
                <h2 className='movieName'>{name}</h2>
                <p className='movieYear'>Year: {year}</p>
        </a>
    );
};

const container = document.getElementById('root');
const movies = [
    {poster:'https://m.media-amazon.com/images/I/91XY1nLj1XL._AC_UF1000,1000_QL80_.jpg', name:'The girl from the other side',year: 2019},
    {poster:'https://m.media-amazon.com/images/M/MV5BYzhjNzI0NWEtMzEyYy00OGViLThhMjctMWQxNGQ3Y2IzOTY4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', name:'Over the garden wall', year:2014},
    {poster:'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg', name:'Coraline, world of Nightmares',year:2009},
];

const content = movies.map((movie,index) => {
    return(
        <Movie key={index} poster={movie.poster} name={movie.name} year={movie.year}/>
    );
});

ReactDOM.render(content,container);