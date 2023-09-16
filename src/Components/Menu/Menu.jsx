import React from 'react';
import './menu.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Cardcomponent from './Cardcomponent/Cardcomponent';

import BhajiPaav from '../../assets/Images/Menu/BhajiPaav.jpeg';
import ChholeChana from '../../assets/Images/Menu/ChholeChana.jpeg';
import ChickenBiryani from '../../assets/Images/Menu/ChickenBiryani.jpeg';
import ChickenBurger from '../../assets/Images/Menu/ChickenBurger.jpeg';
import ChickenLegs from '../../assets/Images/Menu/ChickenLegs.jpeg';
import Dhosa from '../../assets/Images/Menu/Dhosa.jpeg';
import PepproniPizza from '../../assets/Images/Menu/PepproniPizza.jpeg';
import Samosas from '../../assets/Images/Menu/Samosas.jpeg';

const menuItems = [
  {
    title: 'Bhaji Paav',
    description: "Enjoy the authentic flavors of India with our delectable Bhaji Paav. This savory delight features a fragrant and spicy vegetable bhaji served alongside soft, buttery paav bread. The combination of tender vegetables and aromatic spices makes every bite a delightful journey through the streets of Mumbai. Savor the rich textures and bold flavors of this classic Indian street food. A plate of Bhaji Paav is more than just a meal; it's an experience that will transport your taste buds to the bustling bazaars of India.",
    price: '$12.75',
    image: BhajiPaav
  },
  {
    title: 'Chhole Kulcha',
    description: "Indulge in the taste of North India with our Chhole Kulcha. Plump, flavorful chickpeas simmered in a medley of spices, served with soft, oven-baked kulcha bread. This dish is a harmonious blend of earthy, savory, and slightly tangy flavors. The kulcha's crispy exterior gives way to a soft, warm center that perfectly complements the robust chhole. Every bite is a celebration of the rich culinary traditions of Punjab.",
    price: '$14',
    image: ChholeChana
  },
  {
    title: 'Chicken Biryani',
    description: "Prepare to be transported to the heart of Hyderabad with our Chicken Biryani. Fragrant basmati rice layered with succulent pieces of tender chicken, aromatic spices, and caramelized onions. Each spoonful is a symphony of flavors, as the spices mingle with the perfectly cooked chicken, creating a taste explosion that's both comforting and exciting. This biryani is a true masterpiece that will leave your taste buds tingling for more.",
    price: '$15',
    image: ChickenBiryani
  },
  {
    title: 'Chicken Burger',
    description: "Elevate your burger experience with our Chicken Burger. Juicy, marinated chicken patty grilled to perfection and nestled between soft, toasted buns. Topped with crisp lettuce, ripe tomatoes, and a creamy, tantalizing sauce, this burger is a mouthful of pure delight. The chicken is tender and full of flavor, making every bite a savory adventure. Whether you're a burger enthusiast or a chicken lover, this burger is sure to satisfy your cravings.",
    price: '$12.5',
    image: ChickenBurger
  },
  {
    title: 'Chicken Legs',
    description: "Dive into a plate of our succulent Chicken Legs. These tender, marinated chicken drumsticks are expertly roasted to juicy perfection. The marinade infuses the meat with a symphony of flavors, resulting in a savory and mouthwatering experience. Each bite offers a delightful combination of tender chicken and perfectly crisped skin, making it a must-try for poultry aficionados.",
    price: '$9',
    image: ChickenLegs
  },
  {
    title: 'Dhosa',
    description: "Embark on a culinary journey to South India with our Dhosa. This thin, crispy, and golden-brown rice crepe is a canvas for a myriad of flavors. Served with an array of chutneys and sambar, each bite is a delightful balance of textures and tastes. The dhosa's delicate crispness contrasts perfectly with the rich, tangy sambar and aromatic coconut chutney, creating a symphony of flavors that dance on your palate.",
    price: '$15',
    image: Dhosa
  },
  {
    title: 'Pepperoni Pizza',
    description: "Experience the classic Italian flavors of our Pepperoni Pizza. A thin, hand-stretched crust topped with zesty tomato sauce, gooey mozzarella cheese, and generous slices of savory pepperoni. The pizza is baked to perfection, resulting in a delightful blend of crispy edges and a soft, flavorful center. With each bite, you'll savor the smoky, spicy notes of pepperoni, making this pizza a timeless favorite for all pizza enthusiasts.",
    price: '$15',
    image: PepproniPizza
  },
  {
    title: 'Samosas',
    description: "Delight in the crispy, golden goodness of our Samosas. These triangular pastries are filled with a flavorful mixture of spiced potatoes, peas, and aromatic herbs. The crispy outer layer gives way to a savory, fragrant interior that's both comforting and satisfying. Dip them in our tangy tamarind chutney for the perfect balance of sweet and spicy flavors. These samosas are a beloved snack that's perfect for any occasion.",
    price: '$12',
    image: Samosas
  }
];


const Menu = () => {
  return (
    <div className='menu-container'>
      <CardGroup className='card-group-class'>
        {menuItems.map((menuItem) => (
        <Cardcomponent
          key={menuItem.title}
          title={menuItem.title}
          description={menuItem.description}
          price={menuItem.price}
          imagesrc={menuItem.image}
        />
        ))}
    </CardGroup>      
    </div>
  )
}

export default Menu;