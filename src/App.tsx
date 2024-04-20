import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Verifyphone from './pages/Verifyphone';
import VerifyphoneTwo from './pages/VerifyphoneTwo';
import VerifyphoneThree from './pages/Verifyphonethree';
import Verifyemail from './pages/Verifyemail';
import VerifyemailTwo from './pages/VerifyemailTwo';
import VerifyemailThree from './pages/Verifyemailthree';
import Createpassword from './pages/Createpassword';
import Personalinfo from './pages/Personalinfo';
import PersonalinfoTwo from './pages/PersonalinfoTwo';
import SigninTwo from './pages/SigninTwo';
import Signin from './pages/Signin';
import Forgotpass from './pages/Forgotpassword';
import Forgotpasstwo from './pages/ForgotpasswordTwo';
import Forgotpassthree from './pages/ForgotpasswordThree';
import Continue from './pages/Continue';
import Phone from './pages/Newphone';
import Basicinfo from './pages/Basicinfo';
import Personalinfoedu from './pages/Personalinfoedu';
import Workexperience from './pages/Workexperience';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Verifyphone />
        </Route>
       
        <Route exact path="/homeThree">
          <VerifyphoneThree />
        </Route>
        <Route exact path="/email">
          <Verifyemail />
        </Route>
        <Route exact path="/emailTwo">
          <VerifyemailTwo />
        </Route>
        <Route exact path="/emailThree">
          <VerifyemailThree />
        </Route>
        <Route exact path="/password">
          <Createpassword />
        </Route>
        
        <Route exact path="/infoTwo">
          <PersonalinfoTwo />
        </Route>
        <Route exact path="/Signin">
          <Signin />
        </Route>
        <Route exact path="/SigninTwo">
          <SigninTwo />
        </Route>
        <Route exact path="/Forgotpass">
          <Forgotpass />
        </Route>
        <Route exact path="/Forgotpasstwo">
          <Forgotpasstwo />
        </Route>
        <Route exact path="/Forgotpassthree">
          <Forgotpassthree />
        </Route>
        <Route exact path="/Coninue">
          <Continue />
        </Route>
        <Route exact path="/homeTwo">
          <VerifyphoneTwo />
        </Route>
        <Route exact path="/phone">
          <Phone />
        </Route>
        <Route exact path="/Basicinfo">
          <Basicinfo />
        </Route>
        <Route exact path="/info">
          <Personalinfo />
        </Route>
        <Route exact path="/edu">
          <Personalinfoedu />
        </Route>
        <Route exact path="/work">
          <Workexperience />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;