import React from "react";

const MenuCard = ({ menuData }) => {
  // passing the prop attribute menuData

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {

          const {id, name,category,image,description, Type} = curElem
          // destructring in javascript
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category} </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-author subtle"> {Type} </span><br/>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;