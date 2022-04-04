import React from 'react';

var contador = 0;
function addToShoppingCart()
{
  contador++;
  document.getElementById("unit").innerHTML = contador ;
}
function remUnit()
{
  if(contador>0)
  {
    contador--;
    document.getElementById("unit").innerHTML = contador ;
  }
}


const ProductCard = () => (
  // <className={styles.ProductCard}>
    <div class="product-card">
      <img src="https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300" alt='a' />
      <br />
      <span>Pamerita</span>
      <span><strong id='unit'></strong>/ud.</span>
      { contador > 0 ? 
        <div id="añadirCarrito">
            <button color="primary" onClick={addToShoppingCart}>
                Añadir al carro
            </button>
        </div>
        :
        <div class="product-card-footer" id="enCarrito">
            {/* <div class="product-card-footer-units">
                <small>En carro</small>
                <span><strong id='unit'></strong>/ud.</span>
            </div> */}
            <div>
                <button color="warn" onClick={remUnit}>
                    <div>
                      -
                    </div>
                </button>
                <button color="accent"  onClick={addToShoppingCart}>
                    +
                </button>
            </div>
        </div>
      }

      </div>
);

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
