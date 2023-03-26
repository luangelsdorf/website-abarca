import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';
import brandProjects from 'src/data/portfolio.json';

export default function Project(props) {
  return (
    <ProjectPresentation project={props.slug} />
  )
}

Project.floatingHeader = true;

export async function getStaticPaths() {
  const paths = brandProjects.brand.map(project => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = brandProjects.brand.find(project => project.slug === params.slug);

  return {
    props: project,
  }
}