import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faSeedling,
  faProjectDiagram,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export function buildIconLibrary(library: FaIconLibrary): void {
  library.addIcons(
    faTwitter,
    faFacebookSquare,
    faInstagram,
    faDribbble,
    faCheck,
    faSeedling,
    faProjectDiagram,
    faArrowRight
  );
}
