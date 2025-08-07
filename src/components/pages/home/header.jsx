


function HeaderPage (props) {

    const {cartCount,toggleEvent} = props;

    return (
        <>
         <header
              className="product-list-header"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h1>E-commerce Products</h1>
              <div
                style={{
                  display: "flex",
                  marginRight: "52px",
                  position: "relative",
                  cursor:"pointer"
                }}
                onClick={()=> toggleEvent()}
              >
                <span
                  className=""
                  style={{
                    width: "2px",
                    height: "2px",
                    padding: "6px",
                    backgroundColor: "#f2ffd0",
                    position: "absolute",
                    right: "-3px",
                    top: "-6px",
                    borderRadius: "12px",
                    color: "blue",
                    fontSize: "10px",
                  }}
                >
                  <span
                    style={{ position: "absolute", top: "0", right: "3px" }}
                  >
                    {cartCount}
                  </span>
                </span>
                <span className="material-symbols-outlined" >
                  add_shopping_cart
                </span>
              </div>
            </header>        
        </>
    )
}

export default HeaderPage;