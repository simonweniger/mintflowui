import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import AccordionList from "./pages/AccordionList";
import AlertList from "./pages/AlertList";
import AvatarList from "./pages/AvatarList";
import BadgeList from "./pages/BadgeList";
import BreadcrumbsList from "./pages/BreadcrumbsList";
import ButtonList from "./pages/ButtonList";
import ButtonGroupList from "./pages/ButtonGroupList";
import CardList from "./pages/CardList";
import DrawerList from "./pages/DrawerList";
import NavList from "./pages/NavList";
import DropdownList from "./pages/DropdownList";

function App() {
  return (
    <Router>
      <main className="bg-white relative h-screen overflow-hidden">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
            <div className="mx-4 md:mx-0 bg-gray-100 shadow-inner dark:bg-gray-800 rounded-2xl p-10">
              <Switch>
                <Route path="/accordion" component={AccordionList} />
                <Route path="/alert" component={AlertList} />
                <Route path="/avatar" component={AvatarList} />
                <Route path="/badge" component={BadgeList} />
                <Route path="/breadcrumbs" component={BreadcrumbsList} />
                <Route path="/button" component={ButtonList} />
                <Route path="/button-group" component={ButtonGroupList} />
                <Route path="/card" component={CardList} />
                <Route path="/divider" component={CardList} />
                <Route path="/drawer" component={DrawerList} />
                <Route path="/navigation" component={NavList} />
                <Route path="/dropdown" component={DropdownList} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
