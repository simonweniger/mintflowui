import React from "react";
import logo from "../logo.svg";

// ROUTING
import { Link } from "react-router-dom";

function Sidebar() {
  return (
        <div className="h-screen hidden lg:block my-4 relative w-72">
                <div className="flex items-center justify-center pt-3">
                    <img src={logo} className="h-24" alt="MintFlow UI" />
                </div>
                    <nav id="nav-drawer" className="h-screen drawer-side overflow-auto pb-44">
                            <ul className="menu px-6 overflow-y-auto w-auto bg-base-100 text-base-content">
                                <li className="rounded-lg">
                                    <Link to="accordion" className="rounded-lg">
                                            Accordion
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/alert" className="rounded-lg">
                                            Alert
                                    </Link>
                                    </li>
                                <li>
                                    <Link to="/avatar" className="rounded-lg">
                                            Avatar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/badge" className="rounded-lg">
                                            Badge
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/breadcrumbs" className="rounded-lg">
                                            Breadcrumbs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/button" className="rounded-lg">
                                            Button
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/button-group" className="rounded-lg">
                                            ButtonGroup
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card" className="rounded-lg">
                                            Card
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/carousel" className="rounded-lg">
                                            Carousel
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/divider" className="rounded-lg">
                                            Divider
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/drawer" className="rounded-lg">
                                            Drawer
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/navigation" className="rounded-lg">
                                            Navigation
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/sidebar" className="rounded-lg">
                                            Sidebar
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/stat" className="rounded-lg">
                                            Stat
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/steps" className="rounded-lg">
                                            Steps
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/dropdown" className="rounded-lg">
                                            Dropdown
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/hero" className="rounded-lg">
                                            Hero
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/menu" className="rounded-lg">
                                            Menu
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/modal" className="rounded-lg">
                                            Modal
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/progress" className="rounded-lg">
                                            Progress
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tab" className="rounded-lg">
                                            Tab
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/table" className="rounded-lg">
                                            Table
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/checkbox" className="rounded-lg">
                                        Checkbox
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/input" className="rounded-lg">
                                            Input
                                    </Link>
                                    <Link to="/radio" className="rounded-lg">
                                            Radio
                                    </Link>
                                    <Link to="/select" className="rounded-lg">
                                        Select
                                    </Link>
                                    <Link to="/textarea" className="rounded-lg">
                                            Textarea
                                    </Link>
                                    <Link to="/toggle" className="rounded-lg">
                                            Toggle
                                    </Link>
                                    <Link to="/styleguide" className="rounded-lg">
                                            Styleguide
                                    </Link>
                                </li>
                            </ul>
                         </nav>
                    </div>
            );
        }

export default Sidebar;