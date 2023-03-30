import React from 'react';
import Abarca from './presentations/Abarca';
import Bronzo from './presentations/Bronzo';
import Casulo from './presentations/Casulo';
import MapTrack from './presentations/Maptrack';
import Arca from './presentations/Arca';
import RodrigoCarvalho from './presentations/RodrigoCarvalho';
import Grana from './presentations/Grana';
import BRC from './presentations/BRC';
import Certivale from './presentations/Certivale';
import UtilFacilities from './presentations/UtilFacilities';
import PegadaNeutra from './presentations/PegadaNeutra';
import NefroSinos from './presentations/NefroSinos';

export default function ProjectPresentation({ project }) {
  const projectComponents = {
    'abarca': Abarca,
    'bronzo': Bronzo,
    'casulo': Casulo,
    'maptrack': MapTrack,
    'arca': Arca,
    'rodrigo-carvalho': RodrigoCarvalho,
    'grana': Grana,
    'brc': BRC,
    'certivale': Certivale,
    'util-facilities': UtilFacilities,
    'pegada-neutra': PegadaNeutra,
    'nefro-sinos': NefroSinos,
  }
  
  const ProjectComponent = projectComponents[project.slug];

  return <ProjectComponent />
}
