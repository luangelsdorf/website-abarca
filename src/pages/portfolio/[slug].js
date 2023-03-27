import Head from 'next/head';
import Footer from 'src/components/layout/Footer';
import ProjectPresentation from 'src/components/portfolio/ProjectPresentation';
import ProjectFooter from 'src/components/portfolio/structures/ProjectFooter';
import brandProjects from 'src/data/portfolio.json';

export default function Project(props) {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>

      <ProjectPresentation project={props} />
      <ProjectFooter />
      <Footer />
    </>
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