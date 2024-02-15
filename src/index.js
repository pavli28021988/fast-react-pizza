import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    /* const style = { color: "red", fontSize: "38px", textTransform: "uppercase" } */

    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    //const pizzas = [];
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>


            {/* <Pizza
                name="Pizza Prosciutto"
                ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                photoName="pizzas/prosciutto.jpg"
                price={10}
            />
            <Pizza
                name='Pizza Salamino'
                ingredients='Tomato, mozarella, and pepperoni'
                photoName='pizzas/salamino.jpg'
                price={13}
            /> */}

            {/* // conditional rendering with &&
            {numPizzas > 0 && (

                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} />
                    ))}
                </ul>

            )} */}

            {/* conditional rendering with ternary operator */}

            {numPizzas > 0 ? (
                <React.Fragment>  {/* Fragment <></>=> if it needs key => we write React.Fragment */}
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious 😋.

                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} />
                        ))}
                    </ul>
                </React.Fragment>



            ) : <p>We are still working on our menu.Please come back later 😊</p>}

        </main>
    );
}

function Pizza({ pizzaObj }) {
    //console.log(props);
    //if (pizzaObj.soldOut) return null

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {pizzaObj.soldOut ? (<span> SOLD OUT</span>) : (<span>{pizzaObj.price + 5}$</span>)}
                {/* <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 5}</span> */}
            </div>

        </li>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 24;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    /* if (hour >= openHour && hour <= closeHour) {
          alert("We are currently open")
      } else {
          alert("Sorry we are closed")
      } */

    return (
        <footer className="footer">
            {/* <h4>
                {new Date().toLocaleTimeString()}We are currently open. We are working
                24/7.
            </h4> */}

            {isOpen /* && */ ? (
                <Order closeHour={closeHour} openHour={openHour} />

            ) : (<p>Sorry too late.We are already closed.We are waiting for you tomorrow from {openHour}:00 O'clock. 😇</p>)}
        </footer >
    );
}
function Order({ closeHour, openHour }) {
    return (
        <div className="order">

            <p> We are open until {closeHour}:00 O'clock.Come to visit us or order online or we are waiting for you tomorrow from {openHour}:00 O'clock 😃</p>
            <button className="btn">Order</button>
        </div>
    )


}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
