import React, {useContext, useState} from 'react';
import ToggleContext from '../contexts/ToggleContext';
import Headers from '../components/Headers';
import SideBar from '../components/SideBar';
import HomePage from '../components/HomePage';

function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {isToggled} = useContext(ToggleContext);

  const toggleSidebar = () => setIsSidebarOpen(open => !open);

  return (
      <div className={isToggled ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
          <Headers
              toggleSidebar={toggleSidebar}
          />
          <div className="pt-14">
                <SideBar isSidebarOpen={isSidebarOpen} />
                <main
                  className={`flex-1 transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? 'ml-56' : 'ml-16'
                  } p-4`}>
                  <HomePage />
                </main>
          </div>
      </div>
  );
}

export default Home;
