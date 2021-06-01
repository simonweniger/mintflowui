import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {themeChange} from "theme-change"

//Components
import Sidebar from './components/Sidebar';
import logo from "./logo.svg";

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
import SidebarList from "./pages/SidebarList";
import DropdownList from "./pages/DropdownList";
import MenuList from "./pages/MenuList";
import ModalList from "./pages/ModalList";
import ProgressList from "./pages/ProgressList";
import TabList from "./pages/TabList";
import InputList from "./pages/InputList";
import CheckboxList from "./pages/CheckboxList";
import RadioList from "./pages/RadioList";
import SelectList from "./pages/SelectList";
import TextareaList from "./pages/TextareaList";
import ToggleList from "./pages/ToggleList";
import DividerList from "./pages/DividerList";
import Styleguide from "./pages/Styleguide";

function App() {

  useEffect(() => {
    themeChange(false)
  }, []);

  return (
    <Router>
      <main data-theme="" className="bg-base-100 relative h-screen overflow-hidden">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <header className="w-full bg-base-100 dark:bg-gray-700 flex h-16 rounded-2xl z-40">
              <img src={logo} className="lg:hidden ml-4 mt-2 h-12" alt="MintFlow UI" />
              <div className="w-full relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                  <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                      <div className="container relative left-0 z-50 flex w-3/4 h-full">
                          <div className="relative flex items-center w-full lg:w-64 h-full group">
                              <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-neutral uppercase cursor-pointer sm:hidden">
                                  <svg fill="none" className="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                      </path>
                                  </svg>
                              </div>
                              <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-neutral pointer-events-none fill-current group-hover:text-neutral-focus sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                  </path>
                              </svg>
                              <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl border border-base-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ring-opacity-90 bg-base-100 text-neutral aa-input" placeholder="Search"/>
                              </div>
                          </div>
                          <div className="p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                          <div className="flex m-5">
                            <select data-choose-theme className="focus:outline-none bg-base-200 h-10 rounded-full px-3 text-neutral
                             border border-base-300">
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                              <option value="black">Black</option>
                              <option value="aqua">🐬 Aqua</option>
                              <option value="cyberpunk">Cyberpunk</option>
                            </select>
                          </div>
                            <div className="lg:hidden relative">
                              <input id="nav-drawer" type="checkbox" className="drawer-toggle" /> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                          </div>
                      </div>
                  </div>
              </header>
            <div className="mx-4 md:mx-0 bg-base-200 shadow-inner dark:bg-gray-800 rounded-2xl p-10">
              <Switch>
                <Route path="/accordion" component={AccordionList} />
                <Route path="/alert" component={AlertList} />
                <Route path="/avatar" component={AvatarList} />
                <Route path="/badge" component={BadgeList} />
                <Route path="/breadcrumbs" component={BreadcrumbsList} />
                <Route path="/button" component={ButtonList} />
                <Route path="/button-group" component={ButtonGroupList} />
                <Route path="/card" component={CardList} />
                <Route path="/divider" component={DividerList} />
                <Route path="/drawer" component={DrawerList} />
                <Route path="/navigation" component={NavList} />
                <Route path="/sidebar" component={SidebarList} />
                <Route path="/dropdown" component={DropdownList} />
                <Route path="/menu" component={MenuList} />
                <Route path="/modal" component={ModalList} />
                <Route path="/progress" component={ProgressList} />
                <Route path="/tab" component={TabList} />
                <Route path="/checkbox" component={CheckboxList} />
                <Route path="/input" component={InputList} />
                <Route path="/radio" component={RadioList} />
                <Route path="/select" component={SelectList} />
                <Route path="/textarea" component={TextareaList} />
                <Route path="/toggle" component={ToggleList} />
                <Route path="/styleguide" component={Styleguide} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
