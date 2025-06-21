import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import Linkedln_icon from './Linkedln_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.jpg'
import Car from './car.png'
import sample_img_2 from './sample_img_2.jpg'
import War from './War.png'
import Gril from './Gril.png'
import Bike from './Bike.png'
import Sky from './Sky.png'
import Green from './Green.png'
import Queen from './Queen.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import Pro from './Pro.svg'
import user_lock from './user_lock.svg'




export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    Linkedln_icon,
    star_icon,
    rating_star,
    sample_img_1,
    Car,
    War,
    Gril,
    Queen,
    Sky,
    Bike,
    Green,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    Pro,
    user_lock,
    profile_icon
    
}





export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];



export const galleryData = [
  {
    imageUrl: War,
    prompt: "Batman leading superhero war scene"
  },
  {
    imageUrl: Gril,
    prompt: "Beautiful fantasy girl portrait smiling"
  },
  {
    imageUrl: Bike,
    prompt: "Futuristic racing motorcycle in the mountains"
  },
  {
    imageUrl: Sky,
    prompt: "Devil silhouette on a hill against a dark sky"
  },
  {
    imageUrl: Green,
    prompt: "Green angry monster character with orange eyes"
  },
  {
    imageUrl: Queen,
    prompt: "Batman dressed as king with royal queen"
  }
];


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]