import React from 'react';
import Abarca from './presentations/Abarca';
import Bronzo from './presentations/Bronzo';
import Casulo from './presentations/Casulo';
import MapTrack from './presentations/Maptrack';
import Arca from './presentations/Arca';
import RodrigoCarvalho from './presentations/RodrigoCarvalho';
import Grana from './presentations/Grana';

export default function ProjectPresentation({ project }) {
  const projectComponents = {
    'abarca': Abarca,
    'bronzo': Bronzo,
    'casulo': Casulo,
    'maptrack': MapTrack,
    'arca': Arca,
    'rodrigoCarvalho': RodrigoCarvalho,
    'grana': Grana,
  }
  
  const ProjectComponent = projectComponents[project.slug];

  return <ProjectComponent />
}
