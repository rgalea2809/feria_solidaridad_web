import { projectsService } from '@/src/services/proyects';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AllProjectsResponse, Project } from '@/src/types';
import Pagination from '../Pagination/Pagination';
import ProjectCard from './ProjectCard/ProjectCard';
import {  ProjectsWrapper } from './Projects.styles'

const Projects = () => {
  const [projects, setProjects]= useState<Project[]>([]);
  const router = useRouter()
  const [totalItems, setTotalItems]= useState(0)
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

 useEffect(() => {
    const getData = async () => {
      try {
        const response : AllProjectsResponse = await projectsService.getProjects(page, itemsPerPage)
        setProjects(response.data.items)
        setTotalItems(response.data.meta.totalItems)
      } catch(e) {
        
        router.push("/")
      }
    };
    getData();
 }, [page]) 

  const handlePageClick = (selectedItem: { selected: number; }) => {
    setPage(selectedItem.selected + 1);
  };

  return (
    <ProjectsWrapper>
      <div className='projects'>
        {projects?.map((project) => <ProjectCard {...project} key={project.id} />)}
      </div>
        <Pagination
          onPageChange={handlePageClick}
          pageCount={ totalItems > itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 0}
        />
    </ProjectsWrapper>
  )
}

export default Projects