  "use client"
  import { useState } from 'react';

  const Tabs = ({onTabChange}:{onTabChange:(tab:string) => void}) => {
    const [activeTab, setActiveTab] = useState('data');


    const handleTabChange = (tab:string) => {
        setActiveTab(tab);
        onTabChange(tab)
    }
    return (
      <div>
        <div className="flex space-x-16 xs:max-md:space-x-4 bg-[#F5EAE6] w-max mx-auto rounded-[200px] px-[5px] py-[5px]">
          {/* <button
            className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool
              ${activeTab === 'all' ?
                'bg-[#F15A24] rounded-[100px] text-black0' :
                'text-black'}`}
            onClick={() => handleTabChange('all')}
          >
            Metrics
          </button> */}
          <button
            className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool
              ${activeTab === 'data' ? 
                'bg-[#F15A24] rounded-[100px] text-black0' : 
                'text-black'}`}
            onClick={() => handleTabChange('data')}
          >
            Why Sign Up?
          </button>
          {/* <button
            className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool 
              ${activeTab === 'devops' ? 'bg-[#F15A24] rounded-[100px] text-black' : 'text-black'}`}
            onClick={() => handleTabChange('devops')}
          >
            Our Partners
          </button> */}
        </div>

        
      </div>
    );
  };

  export default Tabs;
