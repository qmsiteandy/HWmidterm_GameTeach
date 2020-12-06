import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import EmptyScreen from "../Screens/EmptyScreen";
import LoginScreen from "../Screens/LoginScreen";
import CoursebookScreen from "../Screens/CoursebookScreen";
import AlreadybookedScreen from "../Screens/AlreadybookedScreen";
import ClassfinishedScreen from "../Screens/ClassfinishedScreen";
import TodayclassScreen from "../Screens/TodayclassScreen";


const Main = () => {
   return (
     <main className="main">
       <div className="content">
         <Switch>
           <Route path="/" exact={true} component={HomeScreen} />
           <Route path="/empty" component={EmptyScreen} />
           <Route path="/loginpage" component={LoginScreen} />
           <Route path="/coursebook" component={CoursebookScreen} />
           <Route path="/todayclass" component={TodayclassScreen} />
           <Route path="/alreadybooked" component={AlreadybookedScreen} />
           <Route path="/classfinished" component={ClassfinishedScreen} />
         </Switch>
       </div>
     </main>
   );
}

export default Main;