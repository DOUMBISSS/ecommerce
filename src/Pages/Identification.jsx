import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



export default function Identification (){
  let slug = useParams().slug;
  const keys = ["title","categorie","reference"];
  const [search,setSearch]=useState("");

  // useEffect(() => {
  //   fetch('https://back-doc.onrender.com/products')
  //   .then((res)=>res.json())
  //   .then((categoryArticles)=>{dispatch(getCatArticlesSmart(categoryArticles))
  //   })
  //   .catch(e => { console.log(e)})
  //   }, [])

  // const addToCart = (id) => {
  //   dispatch(AddArticle(id))
  // }

const handleSearching = (e)=>{
  setSearch(e.target.value);
}


    return (
        <div>
            <div class="container">
            <h3 className="identify">IDENTIFIEZ VOTRE APPAREIL EN 1 CLIC</h3>
            <hr/>

            <div class="identification">
            <p>Trouvez la pièce qu'il vous faut de manière simplifiée grâce à notre outil d'identification de pièce.
                <br/>Copiez Collez le <strong>nom du modèle</strong> ou <strong>nom de la marque</strong> ou <strong>numéro de référence du constructeur</strong> et RECHERCHEZ.<br/>
                  Vous retrouverez alors les caractéristiques de votre machine ainsi qu'un lien pour accéder directement 
                    aux pièces détachées de la gamme de votre appareil. </p>
            <div class="box-search">
              <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleSearching} value={search}/>
              <label for="floatingInput">Lancez votre recherche</label>
            </div>
            </div>
         </div>
         <div className="col-3 col-md-12">
              <div className="identification__part">

              {/* {categoryArticles.filter((categoryArticle) => keys.some((key) => {
            if (search === ""){
                return 0;
              }
              else if (categoryArticle[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return categoryArticle;
              }
              return 0;
                })).map((categoryArticle) => <div key={categoryArticle._id}className='featured__product__cards'>
                        <div className='featured__product__cards__header'>
                        <p className='sales'>Promo -20%</p>
                           <div className='featured__product__cards__header__images'>
                           <Link to={`/detail/${categoryArticle._id}`}><img src={categoryArticle.image} alt="" /></Link>
                           </div>
                        </div>
                        <div className='featured__product__cards__body'>
                                <p className='brand'>{categoryArticle.brand}</p>
                                <h5 className='product__title'>{categoryArticle.title}</h5>
                               <h5 className='product__categorie'>{categoryArticle.categorie}</h5>
                               <p className='product__desc'>{categoryArticle.description}</p>
                               <p className='product__price'>{categoryArticle.price}</p>
                                <p className="info">2 en stock</p>
                               <div className='button--block'>
                               <Link className='link__btn' to={`/detail/${categoryArticle._id}`}><button className='btn__buy'>Acheter</button></Link>
                               <button className='btn__add'onClick={() => addToCart(categoryArticle)}>+</button>
                                </div>  
                        </div>
                    </div> 
                        )} */}
              </div>
            </div>
        </div>



        </div>
    );
}