import React from 'react';
import Abarca from './presentations/Abarca';
import Bronzo from './presentations/Bronzo';
import Casulo from './presentations/Casulo';
import MapTrack from './presentations/Maptrack';
import Arca from './presentations/Arca';
import rodrigoCarvalho from './presentations/RodrigoCarvalho'

export default function ProjectPresentation({ project }) {
  const projectComponents = {
    'abarca': Abarca,
    'bronzo': Bronzo,
    'casulo': Casulo,
    'maptrack': MapTrack,
    'arca': Arca,
    'rodrigoCarvalho': rodrigoCarvalho,
  }
  
  const ProjectComponent = projectComponents[project.slug];

  return <ProjectComponent />
}
