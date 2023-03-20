import { projectsService } from '@/src/services/proyects';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Project } from '@/src/types';
import Pagination from '../Pagination/Pagination';
import ProjectCard from './ProjectCard/ProjectCard';
import {  ProjectsWrapper } from './Projects.styles'

const ProjectsData = [
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },
  {
    title: 'Techo El Salvador',
    image: 'https://static.elmundo.sv/wp-content/uploads/2018/09/techo-e1536768331420.jpg',
    slug: 'techo',
    modalidad: 'presencial',
    horasRequeridas: '100'

  },

]
const data =
  [
    {
      "slug": "18",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "19",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "20",
      "title": "Programa de Becas Mártires de la UCA",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": null,
      "hours": null
    },
    {
      "slug": "21",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "22",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "23",
      "title": "Programa de Becas Mártires de la UCA",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": null,
      "hours": null
    },
    {
      "slug": "24",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "25",
      "title": "test",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": "test",
      "hours": 100
    },
    {
      "slug": "26",
      "title": "Programa de Becas Mártires de la UCA",
      "imageUrl": "https://picsum.photos/1200/700",
      "modality": null,
      "hours": null
    }
  ];
const Projects = () => {
  const [projects, setProjects]= useState<Project[]>([]);
  const router = useRouter()
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

 useEffect(() => {
    const getData = async () => {
      try {
        const data = await projectsService.getProjects()
        setProjects(data.items)
      } catch {
        router.push("/")
      }
    };
    getData();
  }, []) 

  const handlePageClick = (selectedItem: { selected: number; }) => {
    const newOffset = (selectedItem.selected * itemsPerPage) % projects.length +1;
    setPage(selectedItem.selected + 1);
    setItemOffset(newOffset);
  };

  console.log(page)
  console.log(itemOffset)

  return (
    <ProjectsWrapper>
      <div className='projects'>
        {projects?.map((project) => <ProjectCard {...project} key={project.id} />)}
      </div>

        <Pagination
          onPageChange={handlePageClick}
          pageCount={ projects.length > itemsPerPage ? 10 : 0}
        />
    </ProjectsWrapper>
  )
}

export default Projects