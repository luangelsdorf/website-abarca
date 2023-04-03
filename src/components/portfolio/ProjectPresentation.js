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
import Util from './presentations/Util';
import PegadaNeutra from './presentations/PegadaNeutra';
import NefroSinos from './presentations/NefroSinos';
import Robtec from './presentations/Robtec';
import RossiDorneles from './presentations/RossiDorneles';

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
    'util': Util,
    'pegada-neutra': PegadaNeutra,
    'nefrosinos': NefroSinos,
    'robtec': Robtec,
    'rossi-dorneles': RossiDorneles,
  }
  
  const ProjectComponent = projectComponents[project.slug];

  return <ProjectComponent />
}
