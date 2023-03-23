import { projectsService } from '@/src/services/proyects';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AllProjectsResponse, Project } from '@/src/types';
import Pagination from '../Pagination/Pagination';
import ProjectCard from './ProjectCard/ProjectCard';
import { ProjectsWrapper } from './Projects.styles'
import Notiflix from 'notiflix';
import { theme } from '@/styles/theme';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter()
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    Notiflix.Loading.init({
      className: 'notiflix-loading',
      zindex: 4000,
      backgroundColor: 'rgba(0,0,0,0.8)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      customSvgCode: null,
      svgSize: '80px',
      svgColor: theme.colors.gray,
      messageID: 'NotiflixLoadingMessage',
      messageFontSize: '15px',
      messageMaxLength: 34,
      messageColor: '#dcdcdc',
    });
  }, []);

  useEffect(() => {
    Notiflix.Loading.dots()
    const getData = async () => {
      try {
        const response: AllProjectsResponse = await projectsService.getProjects(page, itemsPerPage)
        setProjects(response.data.items)
        setTotalItems(response.data.meta.totalItems)
      } catch (e) {

        router.push("/")
      }
    };
    getData();
    Notiflix.Loading.remove();
  }, [page])

  const handlePageClick = (selectedItem: { selected: number; }) => {
    setPage(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <ProjectsWrapper>
      <div className='projects'>
        {projects?.map((project) => <ProjectCard {...project} key={project.id} />)}
      </div>
      <Pagination
        onPageChange={handlePageClick}
        pageCount={totalItems > itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 0}
      />
    </ProjectsWrapper>
  )
}

export default Projects