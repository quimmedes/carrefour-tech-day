import './style/Nav.css'

//Menu principal

const NavBar = ()=>{
    return(
        <div>
            
<div className="topnav">
  <a className="active" href="/">Home</a>
  <a href="#Sobre">Sobre</a>
  <div className="search-container">
    <form action="/">
      <input type="text" placeholder="Pesquisar Lojas por Cep.." name="pesquisar" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
</div>

        </div>
    );
}

export default NavBar;