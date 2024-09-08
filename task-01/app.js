let noPoster = '';
const Movie = ({poster,name,year}) =>{
    return (
        <div className='movieWrap'>
            <img width="300" src={poster === undefined ? noPoster : poster} alt="name"/>
            <h2>{name}</h2>
            <p>Year: {year}</p>
        </div>
    );
};

const container = document.getElementById('root');
const movies = [{poster:'https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_.jpg', name:'Coraline',year:2009}];

const content = movies.map((movie,index) => {
    return(
        <Movie key={index} poster={movie.poster} name={movie.name} year={movie.year}/>
    );
});

ReactDOM.render(content,container);