import { Navigation } from "../../components";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div>
      <Navigation />

      <div className="menu_bg"></div>
      <div className="menu_wrapper container">
        <div className="header">
          <h2>OUR MENU</h2>
          <button>Menu</button>
          <p>
            *Consuming raw or undercooked meats, poultry, seafood, shellfish or
            eggs, may increase your risk of food borne illness.
          </p>
        </div>

        <div className="cards">
          <div className="left">
            <div className="box">
              <h3>Starters</h3>
              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>CJ’s Soul Roll</h5>
                    <p className="price">$11.99</p>
                  </div>
                  <p className="desc">
                    Crispy egg rolls stuffed with our smoked turkey collards,
                    candied yams, and mac & cheese.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Veggie Soul Rolls</h5>
                    <p className="price">$10.99</p>
                  </div>
                  <p className="desc">
                    Crispy egg roll stuffed with our candied yams and mac &
                    cheese.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Fried Okra</h5>
                    <p className="price">$7.99</p>
                  </div>
                  <p className="desc">
                    Crispy breaded okra served with a house-made zesty sauce.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Fried Green Tomatoes</h5>
                    <p className="price">$12.99</p>
                  </div>
                  <p className="desc">
                    Buttermilk battered and deep-fried green tomatoes served
                    with a housemade zesty sauce
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Aaliyah’s Angel Eggs</h5>
                    <p className="price">$9.99</p>
                  </div>
                  <p className="desc">
                    Our creamy, savory take on the southern staple“deviled eggs.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Smoked Collards Dip</h5>
                    <p className="price">$12.99</p>
                  </div>
                  <p className="desc">
                    Our take on the classic“spinach artichoke dip” features our
                    smoked turkey collards infused into a spicy cream sauce with
                    Romano and gruyere cheeses. Perfectly bubbly, served with a
                    spicy cream sauce with Romano, and Gruyere cheeses.
                    Perfectly bubbly, served with mini garlic naan bread to
                    tortilla chips.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Mixed Greens Salad</h5>
                    <p className="price">$10.99</p>
                  </div>
                  <p className="desc">
                    Spring mix topped with corn, tomato, red onion, and avocado.
                    Your choice of dressing.(add chicken)
                  </p>
                </div>
              </div>
            </div>

            <br />

            <div className="box">
              <h3>Chicken Combos</h3>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>3 Piece Wings</h5>
                    <p className="price">$8.99</p>
                  </div>
                  <p className="desc">*Served with Cornbread</p>
                </div>
              </div>
            </div>

            <br />

            <div className="box">
              <h3>Sides</h3>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>Aretha’s Sweet Potato Casserole</h5>
                    <p className="price">$12.99</p>
                  </div>
                  <p className="desc">
                    Sweet potatoes topped with brown sugar and chopped pecans.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Bernie’s Mac & Cheese</h5>
                    <p className="price">$4.99/+</p>
                  </div>
                  <p className="desc">
                    Our creamy 5 cheese blend is macaroni and cheese. Sm $4.99 |
                    Lg $9.99
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Al’s Greens</h5>
                    <p className="price">$5.99/+</p>
                  </div>
                  <p className="desc">
                    Fresh hand-picked greens. Cooked until tender, with smoked
                    turkey legs. Sm $5.99 | Lg $11.99
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Dirty Rice</h5>
                    <p className="price">$4.99/+</p>
                  </div>
                  <p className="desc">
                    Our take on a traditional Louisiana Creole dish. Sm $4.99 |
                    Lg $9.99
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Baked Beans</h5>
                    <p className="price">$8.99</p>
                  </div>
                  <p className="desc">
                    Sweet and savory beans, coked low and slow to perfection.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Black Eyed Peas</h5>
                    <div>
                      <p className="price">$4.99</p>
                      <p className="price">$9.99</p>
                    </div>
                  </div>
                  <p className="desc">
                    These“good luck” beans are sure to be good to your soul as
                    well.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Rice & Gravy</h5>
                    <p className="price">$11.99</p>
                  </div>
                  <p className="desc">
                    Southern Louisiana staple of Buttery long-grain rice, topped
                    with smooth, homestyle gravy.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Mashed Potatoes</h5>
                    <div>
                      <p className="price">$4.99</p>
                      <p className="price">$9.99</p>
                    </div>
                  </div>
                  <p className="desc">Extra Creamy hand smashed potatoes.</p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Green Beans</h5>

                    <div>
                      <p className="price">$4.99</p>
                      <p className="price">$9.99</p>
                    </div>
                  </div>
                  <p className="desc">
                    Slow cooked string beans combined with onion, garlic, and
                    cooked turkey pieces.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Potato Salad</h5>

                    <div>
                      <p className="price">$5.99</p>
                      <p className="price">$11.99</p>
                    </div>
                  </div>
                  <p className="desc">
                    This southern staple is sure to be a crowd pleaser when the
                    potatoes and all the fixin’s hit your tastebuds.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Cornbread</h5>
                    <div>
                      <p className="price">$3.99</p>
                      <p className="price">$7.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="box">
              <h3>Entrees</h3>
              <h4>Served w/ choice of one side</h4>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>Pop’s Burger & Fries</h5>
                    <p className="price">$14.99</p>
                  </div>
                  <p className="desc">
                    100% Angus beef on a soft buttery bun, with your choice of
                    toppings.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>BBQ Rib Tips</h5>
                    <p className="price">$16.99</p>
                  </div>
                  <p className="desc">
                    A little nugget of smoky rib meat, glazed in our house-made
                    sweet and spicy bbq sauce.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>B.B King’s BBQ Ribs (1/2 or Full Rack)</h5>
                    <p className="price">$21.99/+</p>
                  </div>
                  <p className="desc">
                    The tastiest, meatiest rib you’ll eat. Slow cooked so they
                    fall off the bone (half slab serves one hearty eater, a full
                    slab makes 2 or 3 people very happy). 1/2 Rack $21.99 | Full
                    Rack $36.99
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>CJ’s Buttermilk Fried Chicken Tenders</h5>
                    <p className="price">$13.99</p>
                  </div>
                  <p className="desc">
                    Buttermilk brined chicken deep-fried to a crispy golden
                    brown
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Roasted Chicken</h5>
                    <p className="price">$23.99</p>
                  </div>
                  <p className="desc">
                    1/2 Chicken portions. Rotisserie chicken pieces roasted to
                    perfection.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Smoked Leg Quarters</h5>
                    <p className="price">$13.99</p>
                  </div>
                  <p className="desc">
                    Leg quarters cooked moist, tender, and smoking good.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Prince’s Pulled Pork</h5>
                    <p className="price">$14.99</p>
                  </div>
                  <p className="desc">
                    Slow roasted pork that tastes as sweet and tender as the
                    meat of our ribs.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Elvis Chops</h5>
                    <p className="price">$18.99</p>
                  </div>
                  <p className="desc">
                    Center cut chops, seasoned to perfection, deep-fried to a
                    perfect golden brown.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>M.J’s Fish (Fried, Blackened, or Grilled)</h5>
                    <p className="price">$16.99</p>
                  </div>
                  <p className="desc">
                    Enjoy your choice of 2 pieces of crispy golden fried
                    Roughie, Perch, or Catfish.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Veggie Platter</h5>
                    <p className="price">$16.99</p>
                  </div>
                  <p className="desc">Pick from your choice of 3 sides.</p>
                </div>
              </div>
            </div>

            <br />

            <div className="box">
              <h3>Flat Breads</h3>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>Buffalo Chicken Flat Bread</h5>
                    <p className="price">$14.99</p>
                  </div>
                </div>
                <div className="item">
                  <div className="top">
                    <h5>Margherita Flat Bread</h5>
                    <p className="price">$12.99</p>
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="box">
              <h3>Desserts</h3>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>Gia’s Banana Pudding</h5>
                    <p className="price">5.00</p>
                  </div>

                  <p className="desc">
                    Sweet layers of vanilla custard, and cookies, and garnished
                    with fresh bananas and banana caramel.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Kobe’s Peach Cobbler</h5>
                    <p className="price">$5.00</p>
                  </div>
                  <p className="desc">
                    Sweetly spiced tender peaches, topped with flaky, buttery
                    cake-like topping.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Bourbon Pecan Pie</h5>
                    <p className="price">$5.00</p>
                  </div>
                  <p className="desc">
                    Classic pecan pie with a spicy southern twist.
                  </p>
                </div>

                <div className="item">
                  <div className="top">
                    <h5>Red Velvet Molten Cake</h5>
                    <p className="price">$6.00</p>
                  </div>
                  <p className="desc">
                    Rich chocolate cake with a lightly crunchy shell, and a warm
                    liquid center.
                  </p>
                </div>
              </div>
            </div>

            <br />

            <div className="box">
              <h3>Kids Menu</h3>

              <div className="menu">
                <div className="item">
                  <div className="top">
                    <h5>Cheese Pizza</h5>
                    <p className="price">$8.00</p>
                  </div>
                </div>
                <div className="item">
                  <div className="top">
                    <h5>Buffalo Chicken Pizza</h5>
                    <p className="price">$10.00</p>
                  </div>
                </div>
                <div className="item">
                  <div className="top">
                    <h5>Kids Burger & Fries</h5>
                    <p className="price">$7.00</p>
                  </div>
                </div>
                <div className="item">
                  <div className="top">
                    <h5>Kids Tenders & Fries</h5>
                    <p className="price">$6.00</p>
                  </div>
                </div>
                <div className="item">
                  <div className="top">
                    <h5>Mac & Cheese</h5>
                    <p className="price">$3.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
