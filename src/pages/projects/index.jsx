import React from 'react'
import BreadCrump from './../../components/breadcrump'
import Food from './../../assets/food.webp'
import Donation1 from './../../assets/unamed.jpg'
import ProjectItem from './components'
import R from './../../assets/r.webp'
import { Donar1, Donar2 } from '../../utils/images'
function index() {


  const projects = [
    {
      title: 'street Care',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque nesciunt nemo non et sint eos nulla repellat placeat rem repudiandae quas, laborum quia veritatis facilis minus atque? Beatae, id?,",
      tagline: "Feed Me",
      goal: 4000,
      attained: 3000,
      donners:[
        {
          org:"UNEP",
          img:Donar2
        },
        {
          org:"WHO",
          img:Donar1
        },
        {
          org:"UN",
          img:Donar2
        },
        {
          org:"FYG",
          img:Donar1
        },
        {
          org:"FYG",
          img:Donar2
        },
        {
          org:"FYG",
          img:Donar1
        },
        {
          org:"FYG",
          img:Donar2
        },
        {
          org:"FYG",
          img:Donar2
        },
        {
          org:"FYG",
          img:Donar1
        },
        {
          org:"FYG",
          img:Donar2
        },
        {
          org:"FYG",
          img:Donar2
        }
      ],
      cause: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque nesciunt nemo no",

      image: Donation1

    },
    {
      title: 'Books Harvest',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque nesciunt nemo non et sint eos nulla repellat placeat rem repudiandae quas, laborum quia veritatis facilis minus atque? Beatae, id?,",
      tagline: "Children Education Needs For Change The World",
      goal: 100000,
      attained: 300,
      cause: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque nesciunt nemo no",
      image: R

    },
    {
      title: 'Mother Care',
      description: "Lorem ? Beatae, id?,",
      tagline: "Not my Choice",
      goal: 100000,
      attained: 30000,

      image: R

    },

  ]
  return (
    <div className='flex flex-wrap w-full'>
      <BreadCrump img={Food} title="Our Projects" path={[{ title: "home", path: '/' }, { title: "projects", path: 'projects' }]} />

      <div className="py-2 sm:px-20 px-2 w-full h-auto flex-wrap flex">
        {projects.map((item, i) => (
          <ProjectItem key={i} data={item} />
        ))}
      </div>
    </div>
  )
}

export default index