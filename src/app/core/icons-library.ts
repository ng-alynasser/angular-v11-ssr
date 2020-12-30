import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faDribbble,
  faEnvira,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faSeedling,
  faProjectDiagram,
  faArrowRight,
  faHandHoldingWater,
  faHandHoldingMedical,
  faGasPump,
  faIndustry,
  faPlaceOfWorship,
  faPrescriptionBottle,
  faCogs,
  faBusAlt,
  faHardHat,
  faSatelliteDish,
  faPlug,
  faHands,
  faChalkboardTeacher,
  faNetworkWired,
  faTools,
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
    faArrowRight,
    faHandHoldingWater,
    faGasPump,
    faIndustry,
    faPlaceOfWorship,
    faPrescriptionBottle,
    faBusAlt,
    faHardHat,
    faSatelliteDish,
    faPlug,
    faHands,
    faHandHoldingMedical,
    faChalkboardTeacher,
    faNetworkWired,
    faTools
  );
}
