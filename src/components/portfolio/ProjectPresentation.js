import React from 'react';
import Abarca from './presentations/Abarca';
import Bronzo from './presentations/Bronzo';
import Casulo from './presentations/Casulo';
import MapTrack from './presentations/Maptrack';

export default function ProjectPresentation({ project }) {
  const projectComponents = {
    'abarca': Abarca,
    'bronzo': Bronzo,
    'casulo': Casulo,
    'maptrack': MapTrack,
  }
  
  const ProjectComponent = projectComponents[project];

  return <ProjectComponent />
}
