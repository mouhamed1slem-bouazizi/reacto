import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Preview, CATS, TDAS, Screens, Users, Calendar, ColorPicker, ColorMapping, Editor, Kanban, Area, Bar, Financial, Line, Pie, Pyramid, Stacked } from './pages';
import './App.css';

const App = () => {
    const acitveMenu = true;
  return (
    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {acitveMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ):(
                    /* When the Sidebar closed  */
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${acitveMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                </div>
                <div>
                    <Routes>
                        {/* dashboard  */}
                        <Route path="/" element={<Preview />}/>
                        <Route path="/preview" element={<Preview />}/>

                        {/* pages  */}
                        <Route path="/screens" element={<Screens />}/>
                        <Route path="/cats" element={<CATS />}/>
                        <Route path="/tdas" element={<TDAS />}/>
                        <Route path="/users" element={<Users />}/>

                        {/* apps  */}
                        <Route path="/kanban" element={<Kanban />}/>
                        <Route path="/editor" element={<Editor />}/>
                        <Route path="/calendar" element={<Calendar />}/>
                        <Route path="/color-picker" element={<ColorPicker />}/>

                        {/* charts  */}
                        <Route path="/line" element={<Line />}/>
                        <Route path="/area" element={<Area />}/>
                        <Route path="/bar" element={<Bar />}/>
                        <Route path="/pie" element={<Pie />}/>
                        <Route path="/financial" element={<Financial />}/>
                        <Route path="/color-mapping" element={<ColorMapping />}/>
                        <Route path="/pyramid" element={<Pyramid />}/>
                        <Route path="/stacked" element={<Stacked />}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App